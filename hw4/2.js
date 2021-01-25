// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.


//не успела протестировать, возможна гора ошибок

function productObject (
    price, 
    prod_info,
    prod_name, 
    prod_amount,
    total_price,
    stored_amount
    ) {
    this.price = price,
    this.prod_info = prod_info,
    this.prod_name = prod_name,
    this.prod_amount = prod_amount,
    this.total_price = total_price,
    this.stored_amount = stored_amount,

    this.getTotalPrice() = function() {
        this.total_price = this.price * this.prod_amount;
    };

    this.getProductInfo () = function() {
       return(this.prod_name + ' ' + this.prod_info);
    }
}

var variety = [
    new productObject(
        599, 
        "???",
        "ёршик", 
        0,
        0,
        10
    ),
    new productObject(
        199, 
        "???",
        "zewa+", 
        0,
        0,
        100
    )
]

function cart(variety) {
    this.totalAmount = len(variety);
    this.totalPrice = 0;
    this.totalPriceCount = function() {
        for (let var_ in variety) {
            this.totalPrice = this.totalPrice + variety[var_].getTotalPrice;
        }
    };
    this.addToCart (num) = function() {
        if (this.variety[num].stored_amount > 0) {
            this.variety[num].prod_amount = this.variety[num].prod_amount + 1;
            this.variety[num].stored_amount = this.variety[num].stored_aount - 1;
        }
        else {
            return("Нужного количества нет на складе :с");
        }
    };

    this.removeFromCart (num) = function() {
        if (this.variety[num].prod_amount >= 1) {
            this.variety[num].prod_amount = this.variety[num].prod_amount - 1;
            this.variety[num].stored_amount = this.variety[num].stored_amount + 1;
        }
        else {
            return("Нельзя уменьшить количество товаров в корзине :с");
        }
    }
}