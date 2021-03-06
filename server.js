const express = require("express")
const cors = require("cors")
const passport = require("passport")
require("dotenv").config()
require("./config/database")
require("./config/passport")
const router = require("./routes/index")
const path = require("path")

const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use("/api", router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })
}

app.listen(process.env.PORT, process.env.HOST, () => console.log("Server listening"))