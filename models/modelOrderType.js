import db from "../database/db.js";
import { DataTypes } from "sequelize";

const orderType = db.define('ordertypes',{
    description:{ type: DataTypes.STRING},
})

export default orderType
