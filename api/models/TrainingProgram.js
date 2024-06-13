// models/TrainingProgram.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';


const TrainingProgram = sequelize.define('TrainingProgram', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'training_programs',
    timestamps: false,
});

export default TrainingProgram;
