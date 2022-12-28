import db from "../database/db.js";

import { DataTypes } from "sequelize";


const typeHistory = db.define('typeHistories',{
    description:{ type: DataTypes.STRING},
   

   

})

export default typeHistory