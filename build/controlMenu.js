import { controlMenu } from "./store.js";

let renderControlMenu = () => {
    let gameInfo = `
    <div class="player">
    <div class="player_1 ${
      controlMenu.playerName == "player 1" ? "acitve" : ""
    }">Player 1</div>
    <div class="player_2 ${
      controlMenu.playerName == "player 2" ? "acitve" : ""
    }">Player 2</div>
    </div>
    <div class='score'>
    <div>Number of turns</div>
    <div class='score_counter'>${
      controlMenu.counter != undefined ? controlMenu.counter : 0
    }</div>
    </div>
    <div class='status'></div>
    <input type='button' value='PLAY AGAIN' class='reset-button'>
    `;

    return `<div class="game-info">${gameInfo}</div>`;
};
export default renderControlMenu;