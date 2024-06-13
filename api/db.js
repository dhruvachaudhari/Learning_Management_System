// config/db.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('lms', 'root', 'dhruva', {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;
