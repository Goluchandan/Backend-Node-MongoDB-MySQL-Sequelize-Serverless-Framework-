const express = require('express');
const router = express.Router();
const sequelizeModel = require('../Models/sequelizeModel')

//  here we can get whole data 
router.get("/read", async (req, res) => {
    const getAlldata = await sequelizeModel.findAll({});
   res.send(getAlldata)
});

// here we can one get only one data which id number i give 
router.get("/read/one/:id", async (req, res) => {
    const getAlldata = await sequelizeModel.findOne({
        where :{
            id : req.params.id,
        }
    });
   res.send(getAlldata)
});

// here we can create data in our mysql database
router.post("/create",async (req, res) => {
    const {title,image,category,price,desc} = req.body
    const newProduct = sequelizeModel.build({
        title,
        image,
        category,
        price,
        desc,
    })
    try {
        await newProduct.save()
        res.send("new data created");
    } catch (error) {
        res.status(404).json({ message: error });
    }  
})


// here we can post multiple data in our mysql database in one request
router.post('/multiple/create', async (req, res) => {
    var multipleData = req.body
    if(multipleData.length>1 ){
      var data = await sequelizeModel.bulkCreate(multipleData)
        res.status(200).send("Multiple data Send successfully")

    }
    else{
      var data =  await sequelizeModel.create(multipleData)
        res.status(200).send("one data Send successfully")

    }
    res.status(200).send("data Send")
})

// here we can update our whole data at a time using their id
router.put("/allupdate/:id", async (req, res) => {
    const {title,image,category,price,desc} = req.body
   
    await sequelizeModel.update(
      {
        title,
        image,
        category,
        price,
        desc,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    
    res.send("All Data updated successful")
  });

// router.put("/allupdate/:id", async (req, res) => {
//     const putData = req.body
//     await sequelizeModel.update(
//       putData,
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
    
//     res.send("All Data updated successful")
//   });

//   here we can update our one data at a time and also multiple data using their id
  router.patch('/update/:id', async (req, res) => {
    var updatedData = req.body
    const updatedProduct = await sequelizeModel.update( updatedData ,{
        where: {
            id: req.params.id,
          },
    })
    res.status(200).send("Data updated successful")
  })

//   here we can delete our data from database using their id
router.delete("/delete/:id", async (req, res) => {
    await sequelizeModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("deleted successfully")
  });

module.exports =router;
