import db from "../database/db.js";
import { DataTypes } from "sequelize";

const documentType = db.define('documenttypes',{
    description:{ type: DataTypes.STRING},
})

export default documentType
