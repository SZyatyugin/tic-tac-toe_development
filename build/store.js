class player {
    constructor(name, nameClass, figure) {
        this.nameClass = nameClass,
            this.name = name,
            this.figure = figure,
            this.turn = null,
            this.gameOver = false,
            this.counter = 1;
        this.totalCounter += this.counter;

    }
    checkTheWin(board) {
        board.map((row, rowIndex) => {
            row.map((col, colIndex) => {
                if (board[rowIndex][0].name != null && board[rowIndex][0].name == board[rowIndex][1].name && board[rowIndex][0].name == board[rowIndex][2].name) {
                    this.gameOver = true;
                    board[rowIndex][0].changeStyle();
                    board[rowIndex][1].changeStyle();
                    board[rowIndex][2].changeStyle();



                } else if (board[0][colIndex].name != null && board[0][colIndex].name == board[1][colIndex].name && board[1][colIndex].name == board[2][colIndex].name) {
                    this.gameOver = true;
                    board[0][colIndex].changeStyle();
                    board[1][colIndex].changeStyle();
                    board[2][colIndex].changeStyle();


                } else if (board[0][0].name != null && board[0][0].name == board[1][1].name && board[0][0].name == board[2][2].name) {
                    this.gameOver = true;
                    board[0][0].changeStyle();
                    board[1][1].changeStyle();
                    board[2][2].changeStyle();


                } else if (board[2][0].name != null && board[2][0].name == board[1][1].name && board[2][0].name == board[0][2].name) {
                    this.gameOver = true;
                    board[2][0].changeStyle();
                    board[1][1].changeStyle();
                    board[0][2].changeStyle();

                }
            })
        })
    }
}
let controlMenu = {
    counter: 0,
    playerName: null,
    storeControlMenuData(counter, playerName) {
        this.counter += counter;
        this.playerName = playerName;
    },
    reset() {
        this.counter = 0;
        this.playerName = null
    }
}

let cell = {
    name: null,
    place: null,
    empty: null,
    coords: null,
    style: null,
    changeCell(name, empty) {
        this.name = name,
            this.empty = empty,
            this.place = `<div>${name}</div>`
    },
    reset() {
        this.name = null,
            this.empty = null,
            this.coords = null,
            this.style = null
    },
    changeStyle() {
        this.style = 'won'
    }

}
let board = new Array(3).fill(null).map(() => { return new Array(3).fill(null).map(() => ({...cell })) });
board.map((row, indexRow) => {
    return row.map((col, indexCol) => {
        return col.coords = { row: indexRow, col: indexCol }
    })
})


export { player, cell, controlMenu }
export default board