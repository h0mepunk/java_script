// 1. Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

var main = document.querySelectorAll('.header')
main.height = "570px";
main.width = "570px";
main.backgroundColor = "magenta";

let upper_letters = {A:"01", B:"02", C:"03", D:"04", E:"05", F:"06", G:"07", H:"08"}
let lower_letters = {A:"91", B:"92", C:"93", D:"94", E:"95", F:"96", G:"97", H:"98"}
let left_numbers = {"1":"10", "2":"20", "3":"30", "4":"40", "5":"50", "6":"60", "7":"70", "8":"80"}
let right_numbers = {"1":"19", "2":"29", "3":"39", "4":"49", "5":"59", "6":"69", "7":"79", "8":"89"}
let whites = {  "1":"11", "2":"13", "3":"15", "4":"17", 
                "5":"22", "6":"24", "7":"26", "8":"28",
                "9":"31", "10":"33", "11":"35", "12":"37",
                "13":"42", "14":"44", "15":"46", "16":"48",
                "17":"51", "18":"53", "19":"55", "20":"57", 
                "21":"62", "22":"64", "23":"66", "24":"68",
                "25":"71", "26":"73", "27":"75", "28":"77",
                "29":"82", "30":"84", "31":"86", "32":"88",
            }
let figures = { "11":"WL.png", "12":"WH.png", "13":"WS.png", "14":"WQ.png", "15":"WK.png", "16":"WS.png", "17":"WH.png", "18":"WL.png",
                "21":"WP.png", "22":"WP.png", "23":"WP.png", "24":"WP.png", "25":"WP.png", "26":"WP.png", "27":"WP.png", "28":"WP.png",
                "71":"BP.png", "72":"BP.png", "73":"BP.png", "74":"BP.png", "75":"BP.png", "76":"BP.png", "77":"BP.png", "78":"BP.png",
                "81":"BL.png", "82":"BK.png", "83":"BS.png", "84":"BQ.png", "85":"BK.png", "86":"BS.png", "87":"BK.png", "88":"BL.png"
        }           


function letters(set) {
    for (var i in set) {
        //alert(i + ' ' + set[i])
        var square = document.getElementById(set[i]);
        //alert(square)
        var element = document.createElement("p");
        element.innerHTML = i;
        element.style.alignContent = "center";
        element.height = "20px";
        element.width = "20px";
        element.margin = "5px";
        square.appendChild(element)
    }
}

function whiteSquares (set) {
    for (var i in set) {
        var square = document.getElementById(set[i]);
        square.style.backgroundColor = "white";
    }
}

function setFigures(set){
    for (var i in set) {
        var figure = document.getElementById(i);
        var pic = document.createElement("img");
        pic.setAttribute("src", set[i]);
        figure.appendChild(pic)
     //   figure.style.backgroundImage= set[i];
    }
}


function addCommonDiv() {
    var element = document.createElement("div");
    element.style.height = "550px";
    element.style.width = "550px";
    element.class = "CommonBoard";
    element.style.backgroundColor = "magenta";
    element.style.styleFloat = "left";


    var div = document.createElement("div");
    div.appendChild(element);
    document.body.appendChild(div);

    for (var i = 0; i < 10; i++) {
        for  (var j = 0; j < 10; j++) {
            var square = document.createElement("div");
            square.style.height = "53px";
            square.style.width = "53px";
            square.style.borderCollapse = "collapse";
            square.style.border = "solid 1px black";
            square.style.float = "left";
            square.style.margin = "0px";
            square.style.display = "inline";
            square.style.alignContent = "center";
            var id = "".concat(i, j);
            square.setAttribute("id", id)
            element.appendChild(square);
          }
    };

    letters(upper_letters);
    letters(lower_letters);
    letters(left_numbers);
    letters(right_numbers);
    whiteSquares(whites);
    setFigures(figures);
};

Window.onload = addCommonDiv();