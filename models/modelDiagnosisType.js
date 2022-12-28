import db from "../database/db.js";

import { DataTypes } from "sequelize";


const diagnosiTp = db.define('diagnosistypes',{
    description : { type: DataTypes.STRING},
    

})

export default diagnosiTp