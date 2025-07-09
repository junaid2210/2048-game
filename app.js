const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

window.onload = function () {
    setUpBoard();
    generateRandomTile();
    generateRandomTile();
}

function setUpBoard() {
    let tiles = document.querySelectorAll('.tile');
    let index = 0;

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            tiles[index].innerText = board[r][c] === 0 ? '' : board[r][c];
            index++;
        }
    }
}

function generateRandomTile() {
    let emptyTiles = [];

    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] === 0) {
                emptyTiles.push({ r, c });
            }
        }
    }

    if (emptyTiles.length === 0)
        return;

    const randomIndex = Math.floor(Math.random() * emptyTiles.length);
    const { r, c } = emptyTiles[randomIndex];
    board[r][c] = 2;

    setUpBoard();
}
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowRight")
        console.log('arrow right key is pressed!');
    else if (event.key === "ArrowLeft")
        moveLeft();
    else if (event.key === "ArrowUp")
        console.log('arrow top key is pressed!');
    else if (event.key === "ArrowDown")
        console.log('arrow bottom key is pressed!');
})

function moveLeft() {
    const oldBoard = JSON.stringify(board);

    for (let r = 0; r < 4; r++) {
        let row = board[r].filter(val => val !== 0);

        for (let c = 0; c < row.length - 1; c++) {
            if (row[c] === row[c + 1]) {
                row[c] *= 2;
                row[c + 1] = 0;
            }
        }

        row = row.filter(val => val !== 0);

        while (row.length < 4) {
            row.push(0);
        }

        board[r] = row;
    }

    const newBoard = JSON.stringify(board);
    if (oldBoard != newBoard) {
        generateRandomTile();
    }

    setUpBoard();
}