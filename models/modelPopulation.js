import db from "../database/db.js";
import { DataTypes } from "sequelize";

const popul = db.define('populations',{
    description:{ type: DataTypes.STRING},
})

export default popul
