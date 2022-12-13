const express = require('express')
const connection = require('../Config/mySqlConnection')
const router = express.Router()

// here we will get whole data
router.get('/read', (req, res) =>{
    connection.query("SELECT * FROM Sql_CRUD" ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})

//here we get data by id

router.get('/read/:id', (req, res) =>{
    connection.query("SELECT * FROM Sql_CRUD WHERE id=?",[req.params.id] ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})

//  here i can post data in mysql database 

router.post('/create', (req, res) =>{
    var data = req.body
    var product = [data.title, data.category, data.price, data.product_info]
    connection.query("INSERT INTO Sql_CRUD(title ,category,price, product_info) value(?)" ,[product] ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})


// here we can update one data item
router.patch('/update', (req, res) =>{
    var data = req.body
    connection.query("UPDATE Sql_CRUD SET ? WHERE id="+ data.id ,[data] ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})

// Here i can update my whole data 

router.put('/allupdate', (req, res) =>{
    var data = req.body
    connection.query("UPDATE Sql_CRUD SET ? WHERE id="+ data.id ,[data] ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            if(rows.affectedRows == 0){
                var product = [data.title, data.category, data.price, data.product_info]
                connection.query("INSERT INTO Sql_CRUD(title ,category,price, product_info) value(?)" ,[product] ,(err , rows) =>{
                    if(err){
                        console.log(err)
                        res.send(err)
                    }
                    else{
                        console.log(rows)
                        res.send(rows)
                    }
                })
            }
            else{
                console.log(rows)
                 res.send(rows)
            }
        }
    })
})




// here we can delete from id
router.delete('/delete/:id', (req, res) =>{
    connection.query("DELETE FROM Sql_CRUD WHERE id=?",[req.params.id] ,(err , rows) =>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(rows)
            res.send(rows)
        }
    })
})



module.exports=router