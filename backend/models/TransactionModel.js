import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} =Sequelize;

const Transactions = db.define('transaction',{
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3,100]
        }
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[7,15]
        }
    },
    note: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    
},{
    freezeTableName: true
});

Users.hasMany(Transactions);
Transactions.belongsTo(Users, {foreignKey: 'userId'});


export default Transactions;

// (async()=>{
//     await db.sync();
// })();