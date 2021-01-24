// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15. ### 


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var c = getRandomArbitrary(0, 15);
alert(c);
switch(c){
    case c = 0:
         alert("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15");
         break;
    case c = 1:
        alert("2 3 4 5 6 7 8 9 10 11 12 13 14 15");
         break;
    case c = 2:
        alert("3 4 5 6 7 8 9 10 11 12 13 14 15");
        break;
    case c = 3:
        alert("4 5 6 7 8 9 10 11 12 13 14 15");
        break;
    case c = 4:
        alert("5 6 7 8 9 10 11 12 13 14 15");
        break;
    case c = 5:
        alert("6 7 8 9 10 11 12 13 14 15");
        break;
    case c = 6:
        alert("7 8 9 10 11 12 13 14 15");
        break;
    case c = 7:
        alert("8 9 10 11 12 13 14 15");
        break;
    case c = 8:
        alert("9 10 11 12 13 14 15");
        break;
    case c = 9:
        alert("10 11 12 13 14 15");
        break;
    case c = 10:
        alert("11 12 13 14 15");
        break;
    case c = 11:
        alert("12 13 14 15");
        break;
    case c = 12:
        alert("13 14 15");
        break;
    case c = 13:
        alert("14 15");
        break;
    case c = 14:
        alert("15");
        break;
    case c = 15:
        alert("nothing to show");
        break;
    default:
         alert("???");
 }