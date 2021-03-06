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
        this.winner = null;
        this.winningPlayer = null;
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


        this.getWinner();
        this.changePlayer();
    }

    isFinished() {
        if ((this.PlayerO.moves.length + this.PlayerX.moves.length == 9) || (this.winner)) {
            return true;
        };
        return false;

    }

    getWinner() {
        this.winner = null;
        this.winner = scoreWinner(this.PlayerO);
        if (this.winner != null) {
            return this.winner;
        }
        this.winner = scoreWinner(this.PlayerX);
        return this.winner;


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
        if (this.PlayerX.moves.length + this.PlayerO.moves.length == 9) {
            return true;
        };
        return false;

    }

    isDraw() {
        if ((this.PlayerO.moves.length + this.PlayerX.moves.length == 9) && (this.winner == null)) {
            return true;
        } else {
            return false;
        }

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
