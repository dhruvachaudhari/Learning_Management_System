import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import User from './User.js';  // Assuming a User model exists
import TrainingProgram from './TrainingProgram.js';

const UserProgress = sequelize.define('UserProgress', {
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
    completed_modules: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    total_modules: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'user_progress',
    timestamps: false,
});

UserProgress.belongsTo(User, { foreignKey: 'user_id' });
UserProgress.belongsTo(TrainingProgram, { foreignKey: 'program_id' });

export default UserProgress;
