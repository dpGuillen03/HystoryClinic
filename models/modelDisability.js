import db from "../database/db.js";
import { DataTypes } from "sequelize";

const disa = db.define('disabilitys',{
    description:{ type: DataTypes.STRING},
})

export default disa
