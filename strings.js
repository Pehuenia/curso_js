console.log('Items (2 + 5)')

//
let miString = 'Items (' + (1 + 1) + '): $' + Math.round(2095 + 799)/100 

console.log(miString)

console.log('I\'m a programming student.')

console.log(`Hola`)

//EJERCICIOS:

//3a.
const presentacion = 'My name is ';

//3b.
let nombre = 'Marina';

//3c.
console.log(presentacion + nombre + ".");

//3d.
let coffeePrice = 5;
let bagelPrice= 3;
let precioTotal = coffeePrice + bagelPrice


//3e.
let mensTotal= `Total cost: $${precioTotal}`;

//3g.
coffeePrice = 599;
bagelPrice = 295;

let totalCost = (coffeePrice + bagelPrice)/100;

let msgPrecio = `Total cost: $${totalCost}`;

//3k.
let totalProductos = 2095 * 2 + 799 * 2
let msgLinea1 = `Items (${2+2}):        $${totalProductos / 100}`

console.log(msgLinea1)
//3I
let totalShipping = 499 * 2
let msgLinea2 = `Shipping & handling: $${totalShipping/100}`
console.log(msgLinea2)

//3l

let totalBruto = totalProductos + totalShipping
let msgLinea3 = `Total before tax: $${totalBruto/100}`

console.log(msgLinea3)

//3m
let msgLinea4 = `Estimated tax(10%): $${Math.round(totalBruto * 0.10)/100}`

console.log(msgLinea4)
