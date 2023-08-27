const { DataTypes } = require("sequelize");
const db = require("../conn");
const Mobile = require("./mobileModel");
const User = db.define('users',{
    user_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    freezeTableName:true,
    timestamps:false
});

User.hasOne(Mobile);
Mobile.belongsTo(User);



db.sync({alter:true}).then(()=>console.log("Done")).catch(err=>console.log(err));
module.exports = User;

