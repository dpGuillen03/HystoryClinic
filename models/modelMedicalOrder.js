import db from "../database/db.js";

import { DataTypes } from "sequelize";


const medicalOrder = db.define('orders',{
    medicalOrderType:{ type: DataTypes.NUMBER},
    diagnosis:{ type: DataTypes.STRING},
    idMedicalHistory: { type: DataTypes.NUMBER},
    document: { type: DataTypes.STRING},
    date: { type: DataTypes.STRING},
    detail: { type: DataTypes.ABSTRACT},
    observation: { type: DataTypes.STRING},
    state: { type: DataTypes.BOOLEAN, defaultValue: 1},

})

export default medicalOrder