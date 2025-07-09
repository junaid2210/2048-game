const board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

window.onload = function() {
    setUpBoard();
    generateRandomTile();
    generateRandomTile();
}

function setUpBoard() {
    let tiles = document.querySelectorAll('.tile');
    let index = 0;

    for(let r = 0 ; r < 4 ; r++){
        for(let c = 0 ; c < 4 ; c++){
            tiles[index].innerText = board[r][c] === 0 ? '' : board[r][c];
            index++;
        }
    }
}

function generateRandomTile() {
    let emptyTiles = [];

    for(let r = 0 ; r < 4 ; r++){
        for(let c = 0 ; c < 4 ; c ++){
            if(board[r][c] === 0) {
                emptyTiles.push({r,c});
            }
        }
    }

    if(emptyTiles.length === 0) 
        return;

    const randomIndex = Math.floor(Math.random() * emptyTiles.length);
    const {r , c} = emptyTiles[randomIndex];
    board[r][c] = 2;

    setUpBoard();
}