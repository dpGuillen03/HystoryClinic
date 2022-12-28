import db from "../database/db.js";
import { DataTypes } from "sequelize";

const ethnical = db.define('ethnicalgroups',{
    description:{ type: DataTypes.STRING},
})

export default ethnical
