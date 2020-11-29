import { player, controlMenu } from "./store.js";
import board from "./store.js";
import render from "./app.js";

let placefigure = () => {
    let player1 = new player("player 1", ".player_1", "x");
    let player2 = new player("player 2", ".player_2", "o");
    player1.turn = true;
    let playersArray = [player1, player2];
    let get = (id) => {
        return document.querySelector(id);
    };
    let getAll = (id) => {
        return document.querySelectorAll(id);
    };
    getAll(".col").forEach((element) => {
        element.addEventListener("click", placeElement, true);

        function placeElement(e) {
            if (
                get(".game-info").classList.contains("draw") ||
                get(".game-info").classList.contains("win")
            ) {
                playersArray.map((elem) => {
                    return (elem.gameOver = true);
                });
            }
            let { row, col } = element.dataset;
            let playerTurn = playersArray.find((elem) => {
                if (elem.turn) return elem;
            });
            if (e.target.innerHTML == "" && !playerTurn.gameOver) {
                playersArray.map((elem) => {
                    if (elem.turn) {
                        get(elem.nameClass).classList.remove("active");
                        elem.turn = false;
                    } else {
                        get(elem.nameClass).classList.add("active");
                        elem.turn = true;
                    }
                });
                get(".score_counter").innerHTML =
                    Number(get(".score_counter").innerHTML) + playerTurn.counter;
                e.target.innerHTML = `<div>${playerTurn.figure}</div>`;
                board[row][col].changeCell(playerTurn.figure, false);
                controlMenu.storeControlMenuData(playerTurn.counter, playerTurn.name);
                playerTurn.checkTheWin(board);

                board.map((row, rowIndex) => {
                    row.map((col, colIndex) => {
                        if (playerTurn.gameOver) {
                            render();
                            console.log(board);
                            get(".status").innerHTML = `${playerTurn.name} win!`;
                            get(".game-info").classList.add("win");
                            Object.values(get(".player").children).map((elem) => {
                                elem.classList.remove("active");
                                elem.classList.add("win");
                            });
                        } else if (get(".score_counter").innerText == 9) {
                            get(".status").innerHTML = "It's a draw!";
                            get(".game-info").classList.add("draw");
                            Object.values(get(".player").children).map((elem) => {
                                elem.classList.remove("active");
                            });
                        }
                    });
                });
            }
        }
    });

    get(".reset-button").addEventListener("click", reset, false);

    function reset() {
        board.map((row) => {
            row.map((col) => {
                col.reset();
            });
        });
        controlMenu.reset();
        render();
    }
};
export default placefigure;