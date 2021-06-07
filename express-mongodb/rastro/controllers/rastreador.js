const mongoose = require('mongoose');

module.exports = (app) => {
    const RastreadorController = {
        cadastrar (request, response) {
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

                    const Rastreador = app.models.rastreador;

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