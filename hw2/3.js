// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; 
// ноль можно считать положительным числом. ### 

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

var a = getRandomArbitrary(-50, 50)
var b = getRandomArbitrary(-50, 50)
alert("a = " + a + " b = "+ b)

if(a >= 0 & b>=0) 
   alert(a - b);
else if ( a * b < 0)
   alert(a + b);
else
   alert(a * b);


