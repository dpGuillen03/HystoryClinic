import db from "../database/db.js";
import { DataTypes } from "sequelize";

const zonal = db.define('zones',{
    description:{ type: DataTypes.STRING},
})

export default zonal
