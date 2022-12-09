

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality

/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.getElementsByClassName("sqr")
console.log(squareEls)
const messageEl = document.getElementById("message")



/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector('board').addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

function init() {
    console.log("its working!")
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1
    winner = false
    tie = false
    render()
} 

init()

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach(box => {
        document.getElementById('sq0').textContent = "A"
        document.getElementById('sq1').textContent = "B"
        document.getElementById('sq2').textContent = "C"
        document.getElementById('sq3').textContent = "D"
        document.getElementById('sq4').textContent = "E"
        document.getElementById('sq5').textContent = "F"
        document.getElementById('sq6').textContent = "G"
        document.getElementById('sq7').textContent = "H"
        document.getElementById('sq8').textContent = "I"
    })
   
}

updateBoard()

// updateBoard()

// function updateMessage() {
//     console.log("Update Message")
// }

// function handleClick(evt) {
//     placePiece()
//     checkForTie()
//     checkForWinner()
//     switchPlayerTurn()
// }

// function placePiece() {

// }

// function checkForTie() {

// }

// function checkForWinner() {

// }

// function switchPlayerTurn() {

// }