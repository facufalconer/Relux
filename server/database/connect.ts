import { Sequelize } from "sequelize";

const db = new Sequelize('node1','root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db;