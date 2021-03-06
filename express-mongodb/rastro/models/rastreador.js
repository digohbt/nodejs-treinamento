const mongoose = require('mongoose');

module.exports = (app) => {
    const Schema = mongoose.Schema;
    const rastreadorSchema = Schema(
        { 
            codigoRastreador:{ type:String , required : true, index:{ unique :true}}, 
            placaVeiculo: { type:String , required : true},
            cpfCliente: { type:String , required : true}
        }
    );

    const Rastreador =  mongoose.model("rastreadores", rastreadorSchema );

return Rastreador

}

