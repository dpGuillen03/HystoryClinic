import { Sequelize } from "sequelize";


const db =  new Sequelize('clinica', 'root', '',{host:'localhost', dialect: 'mysql'})


export default db