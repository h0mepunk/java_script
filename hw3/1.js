// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function eratosphen(num) {
    a = [];
    result = [];
    limit = Math.sqrt(num);

    // Создаю массив от 2 до (n - 1)
    for (var i = 2; i < num; i++) {
        a.push(true);
    }

    // Удаляю кратные 2, 3, 5...
    var i = 2;
    while (i <= limit) {
        if (a[i]) {
            var j = i * i;
            while ( j < num) {
                a[j] = false;
                j += i;
            }
        }
        i++;
    }

    // Все значения массива [i] true являются простыми числами
    i = 2;
    while (i < num) {
        if(a[i]) {
            result.push(i);
        }
        i++;
    }

    return result;
};

console.log(eratosphen(101))