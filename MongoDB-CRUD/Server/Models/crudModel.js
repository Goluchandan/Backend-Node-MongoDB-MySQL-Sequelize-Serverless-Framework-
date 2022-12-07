const mongoose = require("mongoose")

const crudSchema = mongoose.Schema({
    title : {type: String, required : true},
    category: {type: String, required : true}, 
    img : {type: String, required : true},
    price : {type: Number, required : true},
    description: {type: String, required : true},
})

const crudModel = mongoose.model('crud', crudSchema)

module.exports = crudModel