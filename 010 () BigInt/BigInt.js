'use strict';

// #1 превращение большого числа в тип данных bigint
//const bigint = 324234234232342342352354543421342353254n;

// #2 команда = BigInt() - может так же принимать строки и конвертировать в большое число
//const sameBigint = BigInt(324234234232342342352354543421342353254);

//console.log(typeof(bigint));

// нельзя использовать с методами такики как math() методами
//console.log(Math.round(5n));

// нельзя смешовать BigInt() и обычные числа
//console.log(5n + 5);

// обычере сложение (+, -, *) - пример
console.log(5n + 2n);
// операпция деление буде возвращать обычное значение без округленнной части
console.log(5n / 2n);

// операторы сравнения будут работать нормально
console.log(5n === 5);

// пример сложения биг инт с обычным числом - конвертирование

let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));

// наоборот (плюс унарный плюс оператор - не входит в перечесень) - будет ошибка
console.log(Number(bigint) + number);