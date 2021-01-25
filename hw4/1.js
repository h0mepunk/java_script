// 1. Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var number = {
    edinitsi: 0,
    desyatki: 0,
    sotni: 0,
    str: 0,
    print_number: function() {
        alert("единицы = " + number.edinitsi + " десятки = " + number.desyatki + " сотни = " + number.sotni);
    },
    dispense_number: function() {
        this.edinitsi = this.str % 10;
        this.desyatki = (this.str % 100 - this.str % 10) / 10;
        this.sotni = (this.str % 1000 - this.edinitsi - this.desyatki * 10) / 100;
    },
    read_number: function() {
        this.str = parseInt(prompt("Введите целое трехзначное число"));
        if (this.str > 999) {
            this.str = parseInt(prompt("Ваше число больше 999. Введите целое трехзначное число"));
        }

    }
}

number.read_number();
number.dispense_number();
number.print_number();