

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

/*---------------------------- Variables (state) ----------------------------*/

let board, turn, winner, tie

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr")

const messageEl = document.querySelector("#message")   

const resetBtnEl = document.getElementById("reset-button")

/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach(function(square) {
    square.addEventListener("click", handleClick)
})

resetBtnEl.addEventListener("click", init)

/*-------------------------------- Functions --------------------------------*/

function init(evt) {    
    board = [null, null, null, null, null, null, null, null, null] 
    turn = 1        
    winner = false  
    tie = false     
    render()        
} 

init()             

/*-------------------------------- Render Function -----------------------------*/

function render(evt) {     
    updateBoard()        
    updateMessage()   
}

/*-------------------------------- updateBoard --------------------------------*/

function updateBoard() {         
    board.forEach(function(square, index) {
        if (square === 1) {
            return squareEls[index].textContent = "X"
        } else if (square === -1) {
            return squareEls[index].textContent = "O"
        } else if (square === null) {
            return squareEls[index].textContent = ""
        }
        
        })
    }

/*-------------------------------- updateMessage -------------------------------*/

function updateMessage() {                      
    if (winner === false && tie === false && turn === -1) {
        messageEl.textContent = "Player X, it's your turn!"
    } else if (winner === false && tie === false && turn === 1){
        messageEl.textContent = "Player O, it's your turn!"
    } else if (winner === true && tie === false && turn === 1) {
        messageEl.textContent = "Player X is the Winner!"
    } else if (winner === true && tie === false && turn === -1) {
        messageEl.textContent = "Player O is the winner!"
    } else if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie! Restart game."
    }
}

updateMessage()

/*-------------------------------- handleClick --------------------------------*/


function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.slice(2))
    if (board[sqIdx] !== null) return
    if (winner === true) return 
    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()
    render()
 }

 
function placePiece(index) {
    board[index] = turn
}

function checkForTie() {
    if (!board.includes(null)) {
        tie = true
    }
}

function checkForWinner(i) {
    winningCombos.forEach(function (winArray){
      let sum = winArray.reduce(function(prev, num) {
        return prev + board[num]
          }, 0); 
        if (Math.abs(sum) === 3){
        winner = true
      } 
    })
  }

function switchPlayerTurn() {
    if (winner === true) {
        return
    } else {
        turn = turn * -1
    }
}