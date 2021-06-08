
module.exports = (app)  => {
    
    app.get("/", (request, response)=> {
        console.log("Rota Principal chamada..")
        response.send("<h1> Diego Henrique </h1>")
        }
    );
    //  rola para acessar o caminho backend 
    app.post(
        "/rastreador", 
    //  chama função que esta criada no controle e add App usando consign
        app.controllers.rastreador.cadastrar
    ) ;
    app.put(
        "/rastreador", 
    //  chama função que esta criada no controle e add App usando consign
        app.controllers.rastreador.alterar
    ) 
    app.delete(
        "/rastreador/:codigoRastreador", 
    //  chama função que esta criada no controle e add App usando consign
        app.controllers.rastreador.excluir
    ) 
}
 

