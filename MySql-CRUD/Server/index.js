const express = require("express");
const connection = require("./Config/mySqlConnection");
const app = express();
const router = require("./Router/sqlCRUD.routes")
require("dotenv").config();

const port = process.env.PORT || 8000;

app.use(express.json())
app.use("/api", router)

app.get("/", (req, res) => res.send("Hello World!"));


app.listen(port, () => {
    console.log(`http://localhost:${port}/`)
})
