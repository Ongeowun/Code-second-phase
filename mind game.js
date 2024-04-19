let sentence = document.getElementById("h2")
let buttonTab = document.getElementById("button")

const gridArray = [
    {
     name: 'fries',
     img: 'image/fries',
    },
    {
        name: 'cheeseburger',
        img: 'image/cheeseburger',
       },
       {
        name: 'hotdog',
        img: 'image/hotdog',
       },
       {
        name: 'ice-cream',
        img: 'image/ice-cream',
       },
       {
        name: 'milkshake',
        img: 'image/milkshake',
       },
       {
        name: 'pizza',
        img: 'image/pizza',
       },
       {
        name: 'fries',
        img: 'image/fries',
       },
       {
           name: 'cheeseburger',
           img: 'image/cheeseburger',
          },
          {
           name: 'hotdog',
           img: 'image/hotdog',
          },
          {
           name: 'ice-cream',
           img: 'image/ice-cream',
          },
          {
           name: 'milkshake',
           img: 'image/milkshake',
          },
          {
           name: 'pizza',
           img: 'image/pizza',
          },
]


gridArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []


function createBoard(){
    for(let i = 0; i < gridArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        //const name = document.createElement('Steven')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)
        card.addEventListener('click', flipCard)
    }
}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionFirstId = cardsChosenIds[0]
    const optionSecondId = cardsChosenIds[1]
    //console.log(cards)
    if (optionFirstId == optionSecondId){
        alert('You Found a match!')
        cards[optionFirstId].setAttribute('src', 'images/blank.png')
        cards[optionSecondId].setAttribute('src', 'images/blank.png')
        cards[optionFirstId].removeEventListener('click', flipCard)
        cards[optionSecondId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
           cards[optionFirstId].setAttribute('src', 'images/blank.png')
           cards[optionSecondId].setAttribute('src', 'image/blank.png')
           alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []
    
    if (cardsWon.length == gridArray.length/2){
        resultDisplay.textContent = `Congratulations You Found them all!`
    }
}
function flipCard(){
    console.log(gridArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(gridArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', gridArray[cardId].img)
    if (cardsChosen.length === 2) {
     setTimeout(checkMatch, 500)
    }
}


/*
//Eloquent Javascript Exercise, Triangle//
let triangle = 0

for(triangle = 0; triangle < 20; triangle += 3) {
    console.log(triangle)
}

//Eloquent Javascript fizzbuzz Exercixe

let fizzBuzz = 0
    for (fizzBuzz =0; fizzBuzz < 100; fizzBuzz++) {
        console.log(fizzBuzz.length)
       if(fizzBuzz % 3 == 0) {
          console.log("fizz")
        } else if( fizzBuzz % 5 == 0) {
          console.log("Buzz")
        }    
        else (fizzBuzz % 3 == 0) || (fizzBuzz % 5 == 0) 
        {
            console.log("fizzBuzz")
        } 
    }
// Eloquent Javascript Example, in this example the Exponent becomes optional, if its not provided it will always default to 2//

function power(base, exponent = 2) {
     let number = 2 
     for(let nature = 0; nature < exponent; nature++) {
         number *= base
     }
     return number
}

console.log(power(8))
console.log(power(5, 8))

// Eloquent Javascript, adding Zero's infront of a number

function farmAnimals(animal, number){
    let numberString = String(animal)
    while(numberString.length < 3){
        numberString = 0 + numberString
    }
    console.log(`${numberString} ${number}`)
}

function farmInventory(Goats, Ducks, Horses){
    farmAnimals(Goats, "Goats")
    farmAnimals(Ducks, "Ducks")
    farmAnimals(Horses, "Horses")
}

farmInventory(10, 8, 11)

//Eloquent Javascript Exercise on Min
 /* function smallestNumber(Number1, Number2){
      Number1 = 7
      Number2 = 2
      
  }
  console.log(Math.min(smallestNumber(Number1, Number2)))*/
  //Bean Counting

  //The weresquirrel Problem: Eloquent Javascript
/*
  let journal//This is an array name// 
  = [
      {events: ["worked", "touched tree", "running", "pizza", "television"],
       squirrel: false},
       {events: ["work", "lasagna", "brush teeth", "touched tree", "cauliflower"],
    squirrel: false},
    {events: ["weekend", "cycling", "break", "peanuts", "beer"],
    squirrel: true}
  ]
  function phi(table){
      return (table[3] * table[0] - table[2] * table[1]) / 
      Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) *
                (table[1] + table[3]) * (table[0] + table[2]))
  }
  console.log(phi([20, 8, 10, 9]))

  function tableFor(event, journal){
      let table = [0, 0, 0, 0]
      for(let i = 0; i < journal.length; i++){
          let entry = journal[i], index = 0
          if(entry.events.includes(event)) index += 1
          if(entry.squirrel) index += 2
          table[index] += 1
      }
  }
  console.log(tableFor("pizza", journal))

//More examples on Javascript
let fruits = ["coconut"]

console.log("coconut".indexOf("t"))
console.log("coconut".slice("1", "5"))
//Understanding rest Parameters
function max(...numbers){
    let result = -Infinity
    for(let number of numbers){
        if(number > result) result = number
    }
   return result
}

console.log(max(2, 20, 5, -3))
//more rest Parameters

buttonTab.addEventListener("click", function enterButton() {
    let Name = document.getElementById("input-name").value
    h2.textContent = `Open Score ${Name}`
})
// Eloquent Javascript

function thePiFunction(radius){
    let circle = Math.random() * 2 * Math.PI
    return {x: radius * Math.cos(circle),
            y: radius * Math.sin(circle)}
            console.log(circle)
}

console.log(thePiFunction(10))
console.log(Math.PI)
//Eloquent Javascript the Sum of an array
function range (start, end) {
    let array = []
    for(let i = 0; i <= 10; i++){
        array.push(i)
    }
    return array = [start, end]
}
console.log(range(1, 10))*/