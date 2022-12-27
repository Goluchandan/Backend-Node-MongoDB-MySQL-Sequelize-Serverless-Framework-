const express = require('express')
const app = express()
const router = require('./Routes/sequelizeCRUD.Routes')
const sequelize = require("./Config/sequelizeDatabase")


// const sequelizeModel = require('./Models/sequelizeModel')


require("dotenv").config()
app.use(express.json())
app.use("/api",router)
const port = process.env.PORT || 8000


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})