import renderboard from "./board.js";
import "./main.scss";
import renderControlMenu from "./controlMenu.js";
import placefigure from "./placefigure.js";

let get = (id) => {
    return document.querySelector(id);
};

let render = () => {
    get("#app").innerHTML = `
    ${renderboard()}
    ${renderControlMenu()}
    `;
    placefigure();
};
render();
export default render;