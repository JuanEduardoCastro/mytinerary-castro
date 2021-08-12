const express = require("express")
const cors = require("cors")
const router = require("./routes/index.js")
require("dotenv").config()
require("./config/database")                  //primero se ve el console.log de aca y despues la del fetcheo

const app = express()

//middleware
app.use(cors())
app.use(express.json())                    // para convertir todo lo que venga json a javascript 

app.use("/api", router)

app.listen(4000, () => console.log("Server listening on port 4000"))