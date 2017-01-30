class TicTacToe {
    constructor() {
        this.previousMoveError = false;
        this.prevSymbol = 'x';  //true = x; false = o
        this.currentSymbol = 'o';
        this.usedMoves = [];
    }

    getCurrentPlayerSymbol() {
        if (!this.previousMoveError) {
            [this.currentSymbol] = [this.prevSymbol];
            this.previousMoveError = false;
            return this.currentSymbol;
        } else {
            this.previousMoveError = false;
            return this.currentSymbol;
        };
    }

    nextTurn(rowIndex, columnIndex) {
        let duplication = false;
        this.usedMoves.forEach(function(currentCoor) {
            if ((currentCoor[0] === rowIndex) && (currentCoor[1] === columnIndex)) {
                duplication = true;
            };
            if (!duplicate) {
                this.usedMovies.push([rowIndex, columnIndex]);
            } else {
                this.previousMoveError = true;
            }


        });
    }

    isFinished() {
        if ()

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}

module.exports = TicTacToe;

let game;

game = new TicTacToe();
debugger;
game.getCurrentPlayerSymbol();

game.nextTurn(0, 1)
game.getCurrentPlayerSymbol();

game.nextTurn(1, 2)
game.getCurrentPlayerSymbol();

game.nextTurn(0, 2)
game.getCurrentPlayerSymbol();

game.nextTurn(0, 0)
game.getCurrentPlayerSymbol();