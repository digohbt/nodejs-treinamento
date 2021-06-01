const calculadora = {
    somar (a, b ) {
        return a + b
    },
    somar2 (...params) {
        resultado = 0 
        for(let i = 0 ; i < params.length ; i++) {
            resultado += params[i]
        }
        return resultado
    },
    sub(a, b) {
        return a - b 
    },
    sub2(...params) {
        let i = 0
        let resultado = 0
        for(let i = 0 ; i < params.length ; i++) {
            resultado -= params[i]
        }
        return resultado
    },
    div(a, b) {
        return a / b 
    },
    div2(...params) {
        let resultado = 1
        for(let i = 0 ; i < params.length ; i++) {
            resultado /= params[i]
        }
        return resultado
    },
    mult(a, b) {
        return a * b 
    },
    mult2(...params) {
      
        let resultado = 1
        
        for(let i = 0 ; i < params.length ; i++) {
            resultado *= params[i]
        }
        return resultado
    },

}

module.exports = calculadora