import {DataTypes} from 'sequelize'
import db from '../database/connect'

const Register = db.define('registra',{
  
    nombre:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }
})
export default Register