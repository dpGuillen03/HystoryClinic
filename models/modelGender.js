import db from "../database/db.js";
import { DataTypes } from "sequelize";

const gender = db.define('genders',{
    description:{ type: DataTypes.STRING},
})

export default gender
