import db from "../database/db.js";

import { DataTypes } from "sequelize";


const externalcause = db.define('externalcauses',{
    description : { type: DataTypes.STRING},
    

})

export default externalcause