

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality

/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2], [2, 5, 8], [0, 3, 6], [6, 7, 8], [0, 4, 8], [2, 4, 6], [1, 4, 7], [3, 4, 5]
]

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.getElementsByClassName("sqr")
console.log(squareEls);
const messageEl = document.getElementById("message")



/*----------------------------- Event Listeners -----------------------------*/

// document.querySelector('board').addEventListener('click', handleClick)

/*-------------------------------- Functions --------------------------------*/

function init() {
    board = [1, null, -1, 1, null, -1, 1, null, -1]
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
    board.forEach(function(square, i) {
        if (square === -1) {
            squareEls[i].textContent = "O"; return
        } else if (square === 1) {
            squareEls[i].textContent = "X"; return
        } else {
            squareEls[i].textContent = ""; return
        }
    })
   
}

updateBoard()

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