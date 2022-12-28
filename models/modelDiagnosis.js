import db from "../database/db.js";

import { DataTypes } from "sequelize";


const diagnosi = db.define('diagnosis',{
    description : { type: DataTypes.STRING},


})

export default diagnosi