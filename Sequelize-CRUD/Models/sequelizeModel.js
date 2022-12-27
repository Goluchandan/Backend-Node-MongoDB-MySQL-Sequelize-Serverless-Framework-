const { DataTypes } = require("sequelize");
const sequelize = require("../Config/sequelizeDatabase");

// require("dotenv").config();

// Here i create model instance
const sequelizeModel = sequelize.define(
  "product_table",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }, // Or DataTypes.UUIDV1
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    // We need to choose the model name
    modelName: "Product",
  }
);

/*
   User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
   User.sync({ force: true }) - This creates the table, dropping it first if it already existed
   User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.

*/

sequelizeModel.sync();
// console.log(sequelizeModel === sequelize.models.sequelizeModel)

module.exports = sequelizeModel;
