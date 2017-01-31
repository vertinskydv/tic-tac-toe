const WINNER_COMBINATIONS = [[[0, 0], [0, 1], [0, 2]],
                             [[1, 0], [1, 1], [1, 2]],
                             [[2, 0], [2, 1], [2, 2]],
                             [[0, 0], [1, 0], [2, 0]],
                             [[0, 1], [1, 1], [2, 1]],
                             [[0, 2], [1, 2], [2, 2]],
                             [[0, 0], [1, 1], [2, 2]],
                             [[0, 2], [1, 1], [2, 0]]];

class TicTacToe {
    constructor() {
        this.PlayerX = {
            symbol: "x",
            moves: [],
            change: function () {this.currentPlayer = this.PlayerO;}
        };
        this.PlayerO = {
            symbol: "o",
            moves: [],
            change: function () {this.currentPlayer = this.PlayerX;}
        };
        this.pervMoveCorrect = true;
        this.currentPlayer = this.PlayerX;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer.symbol;
    }

    changePlayer() {
        if (this.pervMoveCorrect) {
            this.currentPlayer.change.bind(this)();
        }
        this.pervMoveCorrect = true;
    }

    nextTurn(rowIndex, columnIndex) {
        let allMoves = this.PlayerO.moves.concat(this.PlayerX.moves);
        let duplication = false;
        allMoves.forEach(function(coordinate) {
            if ((coordinate[0] == rowIndex) && (coordinate[1] == columnIndex)) {
                duplication = true;
            }
        });

        if (!duplication) {
            this.currentPlayer.moves.push([rowIndex, columnIndex]);
        } else {
            this.pervMoveCorrect = false;
        }

        this.changePlayer();
    }

    isFinished() {
        if (this.PlayerO.moves.length + this.PlayerX.moves.length == 9) {
            return true;
        }

    }

    getWinner() {
        let winner = null;
        winner = scoreWinner(this.PlayerO);
        if (winner != null) {
            return winner;
        }
        winner = scoreWinner(this.PlayerX);
        return winner;


        function scoreWinner (player) {
            let haveWinner = false;
            if (player.moves.length >= 3) {
                haveWinner = WINNER_COMBINATIONS.some((winnerArray) => {
                    return winnerArray.every((winnerItem) => {
                        return player.moves.some((playerItem) => {
                                if ((winnerItem[0] == playerItem[0]) && (winnerItem[1] == playerItem[1])) {
                                    return true;
                                }
                        });
                    });
                });
            }
            if (haveWinner) {
                return player.symbol;
            } else {
                return null;
            }
        }
    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        let value = null;
        this.PlayerX.moves.forEach(function(coordinate) {
            if ((coordinate[0] == rowIndex) && (coordinate[1] == colIndex)) {
                value = 'x';
                return value;
            }
        });

        this.PlayerO.moves.forEach(function(coordinate) {
            if ((coordinate[0] == rowIndex) && (coordinate[1] == colIndex)) {
                value = 'o';
                return value;
            }
        });

        return value;
    }
}

module.exports = TicTacToe;

let game;

game = new TicTacToe();
game.nextTurn(2, 1)
game.getWinner();

game.nextTurn(2, 0)
game.getWinner();

game.nextTurn(2, 1)
game.getWinner();

game.nextTurn(1, 2)
game.getWinner();

game.nextTurn(0, 0)
game.getWinner();

game.nextTurn(2, 1)
game.getWinner();

game.nextTurn(1, 1)
game.getWinner();

game.nextTurn(1, 1)
game.getWinner();

game.nextTurn(1, 0)
debugger;
game.getWinner();
