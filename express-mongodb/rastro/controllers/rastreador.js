const mongoose = require('mongoose');

module.exports = (app) => {
    // cria RastreadorController para ser exportado para consign 
    const RastreadorController = {
        //  função que sera criada para cadastrar ela sera visivel do lado de fora por causa do consign 
        cadastrar (request, response) {
            // criar conecção com banco de dados usado moongose resposta da conecção sucesso the(), erro coneção cath()
            let conexao = mongoose.connect(
                    'mongodb://localhost:27017/rastro-dev', // string de conexão
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true,
                        useCreateIndex: true
                    }
                ).then((resposta => {
                    //  console.log(codigoRastreador,placaVeiculo, cpf)
                    const {codigoRastreador,placaVeiculo, cpfCliente  } = request.body
                    //  buscar models/rastreadores   =>  o Schema do banco de dados  ... 
                    const Rastreador = app.models.rastreador;
                    
                    // pega rastreador atribiu o objeto com dados formatados Rastreador ( )
                    const rastreador =  new Rastreador({codigoRastreador,placaVeiculo, cpfCliente })

                      Rastreador.create(rastreador)
                        .then((resultado ) => {
                            console.log("Rastriador criado casdastrado com sucesso")
                            response.status(200).send('Rastriador criado casdastrado com sucesso')
                            mongoose.disconnect()
                        })
                        .catch((erro) => {
                            response.status(500).send(`erro ao cadastrar  rastreador ${erro}`)
                            mongoose.disconnect()
                
                        })
            
                    })).catch( erro => {
                        response.status(400).send(`Erro de conecção  ${erro}`)
                        mongoose.disconnect()
            })
               
        }
        
    }
    return RastreadorController

}