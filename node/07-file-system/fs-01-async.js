const fs = require("fs");

// lendo arquivo 

let retorno = fs.readFile('index.html', 
(error, dados)=> {
    if(error) {
        throw error 
    }else {
        console.log(dados.toString())
    }


})