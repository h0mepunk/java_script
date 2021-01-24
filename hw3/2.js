// 2. С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

var arrayOfPrices = [100, 150, 700, 500, 43, 80, 99]

function countBasketPrice(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array.pop();
    }
    return sum;
}

console.log(countBasketPrice(arrayOfPrices));