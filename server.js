const express = require("express")
const cors = require("cors")

const app = express()

//middleware
app.use(cors())

const amigos = ["a", "b", "c", "d"]

app.get("/prueba/datos", (req, res) => {                       //requiest:   lo pedido del FE     response:   la respuesta al FE
    res.json({respuesta: amigos})                              //metodo json para convertir javascript y pueda viajar el dato
})


app.listen(4000, () => console.log("Server listening on port 4000"))


//instalar libreria de dotenv
//requerir la libreria y aplicar metodo config -> require("dotenv").config()
//crear archivo .env en la raiz del proyecto
//meter variables de entorno (sensibles) 
    //USERNAME=juan@gmail.com
    //PASSWORD=12345
//se usan esas variables en server.js -> process.env.USERNAME
//declarar ese archivo en .gitignore .. si se clona el repositorio no va andar porque no se va a subir archivo .env

////////PARA NOSOTROS SI HAY QUE SUBIRLO -> OJO <-  //////////////

