
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
init()  

function init(evt) {    
    board = [null, null, null, null, null, null, null, null, null] 
    turn = 1        
    winner = false  
    tie = false     
    render()        
}

function render(evt) {     
    updateBoard()        
    updateMessage()   
}

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

function updateMessage() {
    if(!winner && !tie){
        messageEl.innerText = `It's ${turn > 0 ? 'X' : 'O'}'s turn`
    } else if(!winner && tie) {
        messageEl.innerText = `Tie game`
    } else {
        messageEl.innerText = `${turn > 0 ? 'X' : 'O'} wins`
    }
}

updateMessage()


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