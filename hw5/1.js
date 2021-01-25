// 1. Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

var main = document.querySelectorAll('.header')
main.height = "1500px";
main.width = "1500px";
main.backgroundColor = "magenta";

function addCommonDiv() {
    var element = document.createElement("div");
    element.style.height = "170px";
    element.style.width = "170px";
    element.class = "CommonBoard";
    element.style.backgroundColor = "magenta";
    element.style.styleFloat = "left";


    var div = document.createElement("div");
    div.appendChild(element);
    document.body.appendChild(div);

    for (var i = 0; i < 10; i++) {
        for  (var j = 0; j < 10; j++) {
            var square = document.createElement("div");
            square.style.height = "15px";
            square.style.width = "15px";
            square.style.borderCollapse = "collapse";
            square.style.border = "solid 1px black";
            square.style.float = "left";
            square.style.margin = "0px";
            square.style.display = "inline";
            square.setAttribute("id", j)
            square.setAttribute("class", i)
                // if (j = 9) {
                //     square.style.clear = "left";
                // };
            element.appendChild(square);
          }
    }
};

function addSquares() {
}

Window.onload = addCommonDiv();
addSquares();