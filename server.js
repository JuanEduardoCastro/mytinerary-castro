const express = require("express")
const cors = require("cors")
const passport = require("passport")
require("dotenv").config()
require("./config/database")
require("./config/passport")
const router = require("./routes/index")

const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use("/api", router)

app.listen(process.env.PORT || 4000, process.env.HOST || "0.0.0.0", () => console.log("Server listening on port 4000"))