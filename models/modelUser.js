import db from "../database/db.js";

import { DataTypes } from "sequelize";


const login = db.define('users',{
    userId:{ type: DataTypes.NUMBER},
    name:{ type: DataTypes.STRING},
    lastName:{ type: DataTypes.STRING},
    canPrint:{ type: DataTypes.BOOLEAN},
    city:{ type: DataTypes.STRING},
    department:{ type: DataTypes.STRING},
    medicalRecord:{ type: DataTypes.STRING},
    medicalSpeciality:{ type: DataTypes.STRING},
    university:{ type: DataTypes.STRING},
    password:{ type: DataTypes.STRING},

})

export default login
