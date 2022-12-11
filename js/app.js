

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality

/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2], 
    [2, 5, 8], 
    [0, 3, 6], 
    [6, 7, 8], 
    [0, 4, 8], 
    [2, 4, 6], 
    [1, 4, 7], 
    [3, 4, 5]
]

console.log("winningCombos Const works", winningCombos[0])

/*---------------------------- Variables (state) ----------------------------*/

// Step 1 - Define the required variables used to track the state of the game

let board   // 1a) Use a variable named `board` to represent the state of the squares on //     the board.
let turn    // 1b) Use a variable named `turn` to track whose turn it is.
let winner  // 1c) Use a variable named `winner` to represent if anyone has won yet.
let tie     // 1d) Use a variable named `tie` to represent if the game has ended in a tie.

console.log("Required variables work", board)

/*------------------------ Cached Element References ------------------------*/

// Step 2 - Store cached element references.

const squareEls = document.querySelectorAll(".sqr")    // 2a) In a constant called `squareEls`, store the nine elements 
//    representing the squares on the page.
console.log("squareEls works")

const messageEl = document.querySelector("#message")      // 2b) In a constant called `messageEl`, store the element that displays the 
//    game's status on the page.
console.log("messageEl works")




/*----------------------------- Event Listeners -----------------------------*/

// squareEls.forEach(function (box) {
//     box.addEventListener("click", handleClick)
//     console.log("addEventListener is working")
// });
    

/*-------------------------------- Functions --------------------------------*/


// Step 3 - Upon loading, the game state should be initialized, and a function 
//          should be called to render this game state.

function init() {     // 3a) Create a function called `init`.
    board = [null, null, null, null, null, null, null, null, null] // 3c) Set the `board` variable to an array containing nine `null`s to 
    //    represent empty squares.

    turn = 1        // 3d) Set the `turn` to `1` - which will represent player X.
    winner = false  // 3e) Set the `winner` to false.
    tie = true      // 3f) Set `tie` to false.
    render()        // 3g) Call a function called `render` at the end of the `init` function.
} 

init()              // 3b) Call this `init` function when the app loads.

// Step 4 - The state of the game should be rendered to the user

function render() {      // 4a) Create a function called `render`, then set it aside for now.
    updateBoard()        // 4f) Invoke both the `updateBoard` and the `updateMessage` functions
    updateMessage()        //     inside of your `render` function.
}

render()

// 4b) Create a function called `updateBoard`.
 //     - Use the current index of the iteration to access the corresponding 
  //       square in the `squareEls` array.

    // 4c) In the `updateBoard` function, loop over `board` and for each element:
  //     - Use the current index of the iteration to access the corresponding 
  //       square in the `squareEls` array.

function updateBoard() {         
    board.forEach(function(square, index) {
        console.log("updateBoard is working")
        if (square === 1) {
            return squareEls[index].textContent = "X"
        } else if (square === -1) {
            return squareEls[index].textContent = "O"
        } else {
            return null
        }
    })
    console.log("board.forEach is now working on updateBoard")
}

updateBoard()

// 4d) Create a function called `updateMessage`

function updateMessage() {                      
    if (winner === false && tie === false && turn === -1) {
        messageEl.textContent = "Player X, it's your turn!"
    } else if (winner === false && tie === false && turn === 1){
        messageEl.textContent = "Player O, it's your turn!"
    } else if (winner === true && tie === false && turn === 1) {
        messageEl.textContent = "Player X is the Winner!"
    } else if (winner === true && tie === false && turn === -1) {
        messageEl.textContent = "Player 0 is the winner!"
    } else {
        messageEl.textContent = "It's a tie game!"
    }
    console.log(messageEl.textContent)
}

updateMessage()

function handleClick(evt) {
 console.log("My handleClick is working")
 
}

handleClick()

// function checkForTie() {

// }

// function checkForWinner() {

// }

// function switchPlayerTurn() {

// }