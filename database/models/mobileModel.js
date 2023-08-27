const { DataTypes } = require("sequelize");
const db = require("../conn");

const Mobile = db.define('mobiles',{
    mobile_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    number:{
        type:DataTypes.INTEGER
    },
},{
    freezeTableName:true,
    timestamps:false
});


module.exports = Mobile;
