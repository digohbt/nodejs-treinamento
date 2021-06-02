const calculadora = require ("./calculadora")
console.log("======= Soma ==========")
console.log(calculadora.somar(2, 5))
console.log(calculadora.somar2(2,1,1,1,1))
console.log("======= Fim ==========")

console.log("======= Subtração ==========")

console.log(calculadora.sub(5, 2))
console.log(calculadora.sub2(5,1,1,1))
console.log("======= Fim ==========")

console.log("======= Divisão ==========")

console.log(calculadora.div(5, 1))
console.log(calculadora.div2(10,2,1,1))
console.log("======= Fim ==========")

console.log("======= multiplicação ==========")

console.log(calculadora.mult(5, 2))
console.log(calculadora.mult2(10,2,2,2))
console.log("======= Fim ==========")

let array1 = [0 ,2,5]
let array2 = [0 ,2,5]

let array3 = [...array1, ...array2]
console.log(array3)