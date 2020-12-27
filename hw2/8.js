// 8. С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

//var value = parseInt(prompt("Введите число", 0.0))
//var pow = parseInt(prompt("Введите значение степени (целое)", 0))

value = 5
stepen = 6

function power(val, pow) {
    while (pow > 1) {
        val = val * value
        --pow
        return power(val, pow)
    }
    return val
}

alert(power(value,stepen))