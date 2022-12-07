const express = require('express')
const app = express()
const database = require("./Config/database")
const router = require('./Routes/crud.routes')
require("dotenv").config();

const port = process.env.PORT || 8080
app.use(express.json());

app.use("/api" , router)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})

