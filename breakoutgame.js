const grid = document.querySelector('.grid')
const score = document.querySelector('.score')
const blockWidth = 100
const blockHeight = 20
boardWidth = 580
let timerId 
let xDirection = -2
let yDirection = 2
let ballDiameter = 20
boardHeight = 300

const userStart = [230, 10]
let currentPosition = userStart

const ballStart = [270, 40]
let ballCurrentPosition = ballStart
//creating blocks

class Block {
    constructor(xAxis, yAxis){
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    } 
}
//aLL My Blocks

const blocks = [
    new Block(10,  270),
    new Block(120, 270),
    new Block(240, 270),
    new Block(350, 270),
    new Block(460, 270),
    new Block(10,  240),
    new Block(120, 240),
    new Block(240, 240),
    new Block(350, 240),
    new Block(460, 240),
    new Block(10,  210),
    new Block(120, 210),
    new Block(240, 210),
    new Block(350, 210),
    new Block(460, 210),
]
//drawing blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++){
        const block = document.createElement('div')
        block.classList.add('block')
        block.style.left = blocks[i].bottomLeft[0] + 'px'
        block.style.bottom = blocks[i].bottomLeft[1] + 'px'
        grid.appendChild(block)
    }
}
addBlocks()
//add user
    const user = document.createElement('div')
    user.classList.add('user')
    drawUser()
    grid.appendChild(user)

function drawUser(){
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
}
function drawBall(){
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}
//move User
function moveUser(e){
     switch(e.key){
         case 'ArrowLeft':
             if (currentPosition[0] > 0){
                 currentPosition[0] -= 10
                 drawUser()
             }
         break;
         case 'ArrowRight':
             if (currentPosition[0] < boardWidth - blockWidth){
                 currentPosition[0] += 10
                 drawUser()
             }
             break;
     }
}
document.addEventListener('keydown', moveUser)
// add ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)
//Moving the Ball

function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkCollision()
}
timerId = setInterval(moveBall, 30)
//checking for ball collision
function checkCollision(){
    for (let i = 0; i < blocks.length; i++){
        if(
         (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
         ((ballCurrentPosition + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
        ) {
            const allBlocks = Array.from(document.querySelectorAll('.block'))
            allBlocks[i].classList.remove('block')
            blocks.splice(i, 1)
            changeDirection()
        }
      
    }
    if (
        ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
        ballCurrentPosition[1] >= (boardHeight - ballDiameter)||
        ballCurrentPosition[0] <= 0
        ){
            changeDirection()
        }
//check for game over
        if (ballCurrentPosition[1] <= 0){
          clearInterval(timerId)
          score.textContent = 'You Loose'
          document.removeEventListener('keydown', moveUser)
        }
       
    }
function changeDirection(){
  if (xDirection === 2 && yDirection === 2){
      yDirection = -2
      return
  }
  if (xDirection === 2 && yDirection === -2){
    xDirection = -2
    return
}
  if (xDirection === -2 && yDirection === -2){
      yDirection = 2
      return
  }

  if (xDirection === -2 && yDirection === 2){
      xDirection = 2
      return
  }
}