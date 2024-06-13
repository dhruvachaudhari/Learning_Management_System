// models/Question.js
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import TrainingProgram from '../models/TrainingProgram.js';
import LearningResource from '../models/LearningResource.js';


const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    resource_id: {
        type: DataTypes.INTEGER,
        references: {
            model: LearningResource,
            key: 'id',
        },
    },
    question_text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    options: {
        type: DataTypes.JSON,
        allowNull: false,
    },
}, {
    tableName: 'questions',
    timestamps: false,
});

Question.belongsTo(LearningResource, { foreignKey: 'resource_id' });
LearningResource.hasMany(Question, { foreignKey: 'resource_id' });



export default Question;
