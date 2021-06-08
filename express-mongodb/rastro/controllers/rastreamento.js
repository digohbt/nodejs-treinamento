const { response } = require("express")
const mongoose = require("mongoose")
const rastreador = require("../models/rastreador")

function conectar ( callback ) {
    mongoose.connect(
        'mongodb://localhost:27017/rastro-dev', // string de conexão
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
    ).then((resultado) => {
        callback()
    }).catch(erro => {
        response.send("erro")
    } )
}

module.exports = (app) => {
    
    const RastreamentoController = {
        
        cadastrar(request, response) {
            const Rastreamento = app.models.rastreamentos
            const Rastreador = app.models.rastreador
            const rastreamento = new Rastreamento(request.body)

            if (!rastreamento.dataHora) {
                rastreamento.dataHora = new Date
            }
            conectar( () => {
                Rastreador.find({ codigoRastreador: rastreamento.codigoRastreador })
                .then((listaRastreador) => {
                    if (listaRastreador.length > 0) {
                        Rastreamento.create(rastreamento)
                            .then(resultado => {

                                response.status(200).send("Criado com sucesso")
                                mongoose.disconnect()

                            }).catch(erro => {
                                response.status(500).send(`erro ao criar ${erro}`)
                                mongoose.disconnect()
                            })
                    } else {
                        response.status(404).send("rastreador nao encontrado ")
                    }


                }).catch((erro) => {
                    response.status(404).send("rastreador nao encontrado ")
            })
            })
        },
        buscarPorCodigoRastreador(request, response) {
            conectar( ( ) => {
                const Rastreamento = app.models.rastreamentos

                Rastreamento.find({codigoRastreador : request.params.codigoRastreador })
                .then(( listaRastreador)=> {
                    console.log(listaRastreador)
                    response.status(200).send(listaRastreador)
                    mongoose.disconnect()
                })
                .catch(erro =>{
                    response.status(500).send("erro")
                    mongoose.disconnect()
                })
            }) ;
            
        }
    }
    return RastreamentoController
}