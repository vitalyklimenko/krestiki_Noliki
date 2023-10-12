const cells = document.querySelectorAll('.cell');
const result = document.querySelector('.result');
const resetButton = document.querySelector('.reset');

let currentPlayer = 'X';
let gameBoard = ['','','','','','','','','',''];
let gameOver = false;

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameOver = true;
            result.textContent = `${gameBoard[a]} выиграл!`;
            cells[a].style.backgroundColor = 'green';
            cells[b].style.backgroundColor = 'green';
            cells[c].style.backgroundColor = 'green';
            break;
        }
    }

    if (!gameBoard.includes('') && !gameOver) {
        gameOver = true;
        result.textContent = 'Ничья!';
    }
}

function handleClick(e) {
    const cell = e.target;
    const index = cell.id;

    if (!gameBoard[index] && !gameOver) {
        cell.textContent = currentPlayer;
        gameBoard[index] = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
        checkWinner();
    }
}

function resetBoard() {
    gameBoard = ['','','','','','','','',''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.style.backgroundColor = '#fff';
    });
    result.textContent = '';
    gameOver = false;
    currentPlayer = 'X';
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetBoard);
