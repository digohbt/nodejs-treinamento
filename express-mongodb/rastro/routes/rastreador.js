
module.exports = (app)  => {
    
    app.get("/", (request, response)=> {
        console.log("Rota Principal chamada..")
        response.send("<h1> Diego Henrique </h1>")
        }
    );
    
    app.post(
        "/rastreador", 
        app.controllers.rastreador.cadastrar
    ) 
}
 

