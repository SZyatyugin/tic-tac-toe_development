import board from "./store.js";
let renderboard = () => {
    let renderCol = (elem, index) => {
        return elem
            .map((elemCol, indexCol) => {
                return `<div class='col ${
          elemCol.style == "won" ? "won" : ""
        }' data-row=${index} data-col=${indexCol}>${
          elemCol.name != null ? elemCol.place : ""
        }</div>`;
            })
            .join("");
    };

    let row = board
        .map((elem, index) => {
            return `<div class='row'>${renderCol(elem, index)}</div>`;
        })
        .join("");

    return `
<div class='board'>${row}</div>
`;
};
export default renderboard;