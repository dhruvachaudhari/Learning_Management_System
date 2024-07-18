import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import User from './User.js';  // Assuming a User model exists
import LearningResource from './LearningResource.js';
import TrainingProgram from './TrainingProgram.js';

const UserQuizAttempt = sequelize.define('UserQuizAttempt', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    program_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TrainingProgram,
            key: 'id',
        },
    },
    resource_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: LearningResource,
            key: 'id',
        },
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
       attempt_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_quiz_attempts',
    timestamps: false,
});

UserQuizAttempt.belongsTo(User, { foreignKey: 'user_id' });
UserQuizAttempt.belongsTo(LearningResource, { foreignKey: 'resource_id' });
UserQuizAttempt.belongsTo(TrainingProgram, { foreignKey: 'program_id' });

export default UserQuizAttempt;
