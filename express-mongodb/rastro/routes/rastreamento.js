module.exports = (app)  => {
    app.post(
        "/rastreamento", 
        app.controllers.rastreamento.cadastrar
    ) ;
    app.get("/rastreamento/:codigoRastreador" , app.controllers.rastreamento.buscarPorCodigoRastreador )
}
 