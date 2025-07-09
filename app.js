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
        moveRight();
    else if (event.key === "ArrowLeft")
        moveLeft();
    else if (event.key === "ArrowUp")
        moveUp();
    else if (event.key === "ArrowDown")
        moveDown();
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

function moveRight() {
    const oldBoard = JSON.stringify(board);

    for (let r = 0; r < 4; r++) {
        let row = [...board[r]].reverse();

        row = board[r].filter(val => val !== 0);

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
        row.reverse();
        board[r] = row;
    }

    const newBoard = JSON.stringify(board);
    if (oldBoard != newBoard) {
        generateRandomTile();
    }

    setUpBoard();
}

function moveUp() {
    const oldBoard = JSON.stringify(board.map(rows => [...rows]));

    for (let c = 0; c < 4; c++) {
        let col = [];

        for (let r = 0; r < 4; r++) {
            
            if (board[r][c] !== 0) {
                col.push(board[r][c]);
            }
        }

        for(let i = 0 ; i < col.length - 1 ; i++){
            if(col[i] === col[i+1]){
                col[i] *= 2;
                col[i+1] = 0;
            }
        }

        col = col.filter(val => val !== 0);

        while(col.length < 4){
            col.push(0);
        }

        for(let r = 0 ; r < 4 ; r++){
            board[r][c] = col[r];
        }
    }
    const newBoard = JSON.stringify(board);
    if(oldBoard != newBoard){
        generateRandomTile();
    }
    setUpBoard();
}

function moveDown() {
    const oldBoard = JSON.stringify(board.map(rows => [...rows]));

    for (let c = 0; c < 4; c++) {
        let col = [];

        for (let r = 3; r >= 0; r--) {
            
            if (board[r][c] !== 0) {
                col.push(board[r][c]);
            }
        }

        for(let i = 0 ; i < col.length - 1 ; i++){
            if(col[i] === col[i+1]){
                col[i] *= 2;
                col[i+1] = 0;
            }
        }

        col = col.filter(val => val !== 0);

        while(col.length < 4){
            col.push(0);
        }

        col.reverse();

        for(let r = 0 ; r < 4 ; r++){
            board[r][c] = col[r];
        }
    }
    const newBoard = JSON.stringify(board);
    if(oldBoard != newBoard){
        generateRandomTile();
    }
    setUpBoard();
}