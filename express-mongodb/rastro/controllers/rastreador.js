const mongoose = require('mongoose');
const rastreamento = require('../routes/rastreamento');

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
               
        },
        alterar( request, response) {
            const Rastreador = app.models.rastreador;

            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then( ( )=> {
                Rastreador.updateOne({ codigoRastreador: request.body.codigoRastreador },
                    {$set: {
                        placaVeiculo : request.body.placaVeiculo,
                        cpfCliente : request.body.cpfCliente
                    }} 
                ).then( (resultado) => {
                    console.log(resultado)

                    if(resultado.nModified > 0) {
                        response.status(200).send("rastreador atualizado ")
                        mongoose.disconnect()
                    }else{
                        response.status(500).send("rastreador nao atualixado  ")
                        mongoose.disconnect()
                    }

                } ).catch( () => {
                    response.status(500).send("nao atualizado ")
                    mongoose.disconnect()

                })
            }).catch((erro) => {
                response.send("erro conecçao ")
            })
        },

        excluir(request, response) {
            console.log("==================")
            const Rastreador = app.models.rastreador;
            const Rastreamento = app.models.rastreamentos;
            
            mongoose.connect(
                'mongodb://localhost:27017/rastro-dev', // string de conexão
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex: true
                }
            ).then( () => {
                console.log(request.params.codigoRastreador)
                Rastreamento.deleteMany( {codigoRastreador : request.params.codigoRastreador})
                    .then(resposta => {
                        Rastreador.deleteOne({codigoRastreador : request.params.codigoRastreador})
                            .then(resposta => {
                                response.send("OK deletado")
                            })
                            .catch( erro => {
                                response.send("nao deletado")
                            } )
                    }).catch( resposta => {
                        response.send(" nao apagado rastreamanto apagado ")
                    } )
            }).catch( erro => {
                response.status(500).send(" erro de conecao  ")
            })
        }
    }
    return RastreadorController

}