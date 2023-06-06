
console.log(Math.round(2.2))

//2.a
let total = 10+3*8+5;

console.log(total)

//2.b
console.log(total/3)

//2.c
let sumaCentavos = 1850+750 *2
console.log(`Total a pagar por una tostadora más dos remeras: $${sumaCentavos/100}`)

//2.d
let totalConImpuestos = Math.round(sumaCentavos * 0.10) /100

console.log(`Total a pagar con impuestos: $${totalConImpuestos}`)

//2.e
//let totalConImpuestos2 = 0

console.log(`Monto en pesos: $${Math.round(sumaCentavos * 0.2)/100}`)

// 2.j 
let redondeadoAbajo = Math.floor(2.8);

console.log(`Redondeado hacia abajo: ${redondeadoAbajo}`)

// 2.k
let redondeadoArriba = Math.ceil(2.2)

console.log(`Redondeado hacia arriba: ${redondeadoArriba}`)

//Challenge Exercises
const stringDeResultadoFar = 'Temperatura convertida a grados farenheit:';
const stringDeResultadoCel = 'Temperatura convertida a grados centígrados:';
//2.l
let tempInCelsius = 25;
let tempInFarenheit = (tempInCelsius * 9 / 5) + 32;

console.log(`${stringDeResultadoFar + tempInFarenheit}`)

//2.m
tempInFarenheit = 86;

tempInCelsius = (tempInFarenheit - 32) * 5/9;

console.log(`${stringDeResultadoCel + tempInCelsius}`)

//2.n 

tempInCelsius = -5;

tempInFarenheit = (tempInCelsius * 9/ 5) + 32;

console.log(`${stringDeResultadoFar + tempInFarenheit}`)


