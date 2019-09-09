'use strict';

const total = 100;

const ordered = 50;

const difference = ordered <= total;

let message;

if (difference) {
  message = 'Заказ оформлен, с вами свяжется менеджер!';
} else {
  message = 'На складе недостаточно товаров!';
}
console.log(message);

