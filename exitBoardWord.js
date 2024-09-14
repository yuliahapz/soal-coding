const board = [
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
    ['.','.','S','.','.'], // S starting point
    ['.','.','.','.','.'],
    ['.','.','.','.','.'],
];

let startX = 2;  // S
let startY = 2;  // S

const rows = board.length;  // 5
const cols = board[0].length;  // 5

const directions = [ 
    [-1, 0], // up
    [0, 1],  // right
    [1, 0],  // down
    [0, -1], // left
];

function exitBoard(x, y) {
    let steps = 0;

    while (x >= 0 && x < rows && y >= 0 && y < cols) {
        console.log(`At position (${x}, ${y})`);

        const [dx, dy] = directions[1]; // Move to the right

        x += dx;
        y += dy;
        steps++;
    }

    console.log(`Exited the board after ${steps} steps at position (${x}, ${y})`);
}

exitBoard(startX, startY);
