// 1. Задать температуру в градусах по Цельсию. 
// Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, 
// где Tf – температура по Фаренгейту, Tc – температура по Цельсию

var celsiusTemperature = parseFloat(prompt("Введите температуру по цельсию", 0.0));
var farenheitTemperature = ( 9 / 5 ) * celsiusTemperature + 32;
alert(farenheitTemperature)
