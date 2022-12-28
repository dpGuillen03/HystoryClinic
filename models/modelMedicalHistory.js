import db from "../database/db.js";

import { DataTypes } from "sequelize";


const medicalHistory = db.define('histories',{
    consultationDate:{ type: DataTypes.STRING},
    document:{ type: DataTypes.STRING},
    reasonForMedicalConsultation: { type: DataTypes.STRING},
    currentIllness: { type: DataTypes.STRING},
    sexuallyTransmittedDiseases: { type: DataTypes.STRING},
    planning: { type: DataTypes.STRING},
    habits: { type: DataTypes.STRING},
    respiratorySymptoms: { type: DataTypes.BOOLEAN},
    clinicalBackground: { type: DataTypes.ABSTRACT},
    reviewBySystems: { type: DataTypes.ABSTRACT},
    physicalExam: { type: DataTypes.ABSTRACT},
    conductToFollow: { type: DataTypes.STRING},
    diagnosis: { type: DataTypes.ABSTRACT},
    differentialFocus: { type: DataTypes.ABSTRACT},
 
   

})

export default medicalHistory