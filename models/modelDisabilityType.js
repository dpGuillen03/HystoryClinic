import db from "../database/db.js";
import { DataTypes } from "sequelize";

const disabilityTP = db.define('disabilitytypes',{
    description:{ type: DataTypes.STRING},
})

export default disabilityTP
