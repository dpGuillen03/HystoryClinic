import db from "../database/db.js";

import { DataTypes } from "sequelize";


const queryPurpos = db.define('querypurposes',{
    description : { type: DataTypes.STRING},
    

})

export default queryPurpos