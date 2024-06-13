// models/LearningResource.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import TrainingProgram from '../models/TrainingProgram.js';
const LearningResource = sequelize.define('LearningResource', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    vid_link: {
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
    trainning_id: {
        type: DataTypes.INTEGER,
        references: {
            model: TrainingProgram,
            key: 'id',
        },
    },
}, {
    tableName: 'learning_resources',
    timestamps: false,
});

LearningResource.belongsTo(TrainingProgram, { foreignKey: 'trainning_id' });
TrainingProgram.hasMany(LearningResource, { foreignKey: 'trainning_id' });
// LearningResource.hasMany(Question, { foreignKey: 'resource_id' });

export default LearningResource;
