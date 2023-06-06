
console.log(Math.round(2.2))

//2.a
//let total = 10+3*8+5;

//console.log(total)

//2.b
//console.log(total/3)

//2.c
//let sumaCentavos = 1850+750 *2
//console.log(`Total a pagar por una tostadora más dos remeras: $${sumaCentavos/100}`)

//2.d
// let totalConImpuestos = Math.round(sumaCentavos * 0.10) /100

// console.log(`Total a pagar con impuestos: $${totalConImpuestos}`)

//2.e
//let totalConImpuestos2 = 0

//console.log(`Monto en pesos: $${Math.round(sumaCentavos * 0.2)/100}`)

//2.f
let totalInCentsWithoutTaxes = 2095 + 799 + 1899;

//2.g
let totalWithoutTaxes = totalInCentsWithoutTaxes / 100;
console.log(`Total por 3 ítmes sin impuestos: $${totalWithoutTaxes}`);

let shippHand = 499;

console.log(`Shipping & handling: $${shippHand/100}`)

let totalBeforeTax = (totalInCentsWithoutTaxes + shippHand)/100;

console.log(`Total before tax $${totalBeforeTax}`)

//2.h
let taxes = Math.round((totalInCentsWithoutTaxes + shippHand) * 0.10)/100;
console.log(`Estimated tax(10%): $${taxes}`)

//2.i
let orderTotal = totalBeforeTax + taxes

console.log(`Order total: $${orderTotal}`);