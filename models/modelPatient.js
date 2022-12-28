import db from "../database/db.js";
import { DataTypes } from "sequelize";

const patient = db.define('patients',{
    documentTypeId:{ type: DataTypes.NUMBER},
    document:{ type: DataTypes.STRING},
    nameOne:{ type: DataTypes.STRING},
    nameTwo:{ type: DataTypes.STRING},
    lastNameOne:{ type: DataTypes.STRING},
    lastNameTwo:{ type: DataTypes.STRING},
    dateOfBirth:{ type: DataTypes.DATE},
    gender:{type: DataTypes.STRING},
    address:{type: DataTypes.STRING},
    telephone:{type: DataTypes.STRING},
})

export default patient
