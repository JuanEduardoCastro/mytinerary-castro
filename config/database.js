const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNameUrlParser: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))    