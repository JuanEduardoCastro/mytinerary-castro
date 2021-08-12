const express = require("express")
const cors = require("cors")
const router = require("./routes/index.js")

const app = express()

//middleware
app.use(cors())
app.use(express.json())                    // para convertir todo lo que venga json a javascript 

app.use("/api", router)

app.listen(4000, () => console.log("Server listening on port 4000"))