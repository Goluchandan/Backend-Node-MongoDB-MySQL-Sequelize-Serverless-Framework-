const express = require("express");
const router = express.Router();
const crudModel = require("../Models/crudModel");

// create data usng post request
router.post("/create", async (req, res) => {
  const { title, category, price,img, description } = req.body;
  const newData = crudModel({
    title: title,
    category: category,
    img: img,
    price: price,
    description: description,
  });

  try {
    await newData.save();
    res.send("new data created");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

// Read data using get request

router.get("/read", async (req, res) => {
  try {
    const getdata = await crudModel.find({});
    res.send(getdata);
  } catch (error) {
    res.send(error);
  }
});

// Update one data using patch request

router.patch("/update/:id", (req, res) => {
    const { id } = req.params;
    let data = req.body
    console.log(data);
    crudModel.findByIdAndUpdate(id,{$set : data},{ retuenOriginal : false})
    .then((result) => {console.log(result)
        res.send(result)
    })
    .catch((err) => {console.log(err) 
    res.send(err)
    })
    
});
// Update whole data using patch request
router.put("/allupdate/:id", (req, res) => {
  const { id } = req.params;
  let data = req.body
  crudModel.findByIdAndUpdate({_id:id},{
    $set:data
  }).then((result) => {
    res.json({status:201,result})
  }).catch((err) => {
    res.status(401).json({status:401,err})
  })
})

// delete by id 
router.delete("/delete/:id",async(req,res)=>{

  try {
      const {id} = req.params;

      const deleteData = await crudModel.findByIdAndDelete({_id:id});

      res.status(201).json({status:201,deleteData});

  } catch (error) {
      res.status(401).json({status:401,error})
  }

})




module.exports = router;
