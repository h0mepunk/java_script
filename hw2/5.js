// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return. ### 

var a = 1
var b = 5

function plus (val1, val2) {
    return val1 + val2
}

function minus (val1, val2) {
    return val1 - val2
}

function multiply (val1, val2) {
    return val1 * val2
}

function divide (val1, val2) {
    return val1 / val2
}

alert("a =" + a + " b =" + b + "\n" +
    " a+b = " + plus(a,b) + "\n" +
    " a-b = " + minus(a,b) + "\n" +
    " a*b = "+ multiply(a,b) + "\n" +
    " a/b = " + divide(a,b))