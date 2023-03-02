import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Siswa = db.define('siswa', {
    name: DataTypes.STRING,
    emaill: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Siswa;

(async () => {
    await db.sync();
})();