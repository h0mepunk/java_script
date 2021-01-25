// 1. Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

var main = document.querySelectorAll('.header')
main.height = "1500px";
main.width = "1500px";
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
let figures = { "11":"WL.jpg", "12":"WH.jpg", "13":"WS.jpg", "14":"WQ", "15":"WK", "16":"WS", "17":"WH", "18":"WL",
                "21":"WP", "22":"WP", "23":"WP", "24":"WP", "25":"WP", "26":"WP", "27":"WP", "28":"WP",
                "71":"BP", "72":"BP", "73":"BP", "74":"BP", "75":"BP", "76":"BP", "77":"BP", "78":"BP",
                "81":"BL", "82":"BK", "83":"BS", "84":"BQ", "85":"BK", "86":"BS", "87":"BK", "88":"BL"
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
    var figure = document.getElementById(i);
        figure.style.backgroundImage= set[i];
}


function addCommonDiv() {
    var element = document.createElement("div");
    element.style.height = "370px";
    element.style.width = "370px";
    element.class = "CommonBoard";
    element.style.backgroundColor = "magenta";
    element.style.styleFloat = "left";


    var div = document.createElement("div");
    div.appendChild(element);
    document.body.appendChild(div);

    for (var i = 0; i < 10; i++) {
        for  (var j = 0; j < 10; j++) {
            var square = document.createElement("div");
            square.style.height = "35px";
            square.style.width = "35px";
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

};

Window.onload = addCommonDiv();