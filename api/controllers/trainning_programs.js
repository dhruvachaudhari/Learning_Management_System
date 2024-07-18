import { Db } from "../index.js";
import TrainingProgram from '../models/TrainingProgram.js';
import LearningResource from '../models/LearningResource.js';
import Question from '../models/Question.js';
import User from "../models/User.js";
import UserProgress from "../models/UserProgress.js";
import UserQuizAttempt from "../models/UserQuizAttempt.js";

export const getCourses = async (req, res) => {



    try {
        const courses = await TrainingProgram.findAll();
        res.status(200).json(courses);
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Error fetching courses" });
    }
}

export const course = async (req, res) => {
    const trainingProgramId = req.params.courseid;


    try {
        const resources = await LearningResource.findAll({
            where: { trainning_id: trainingProgramId },

        });
        res.status(200).json(resources);
    } catch (err) {
        console.error("Error fetching learning resources:", err);
        res.status(500).json({ error: "Error fetching learning resources" });
    }

}

export const courseLessonsID = async (req, res) => {
    const trainingProgramId = req.params.courseid;


    try {
        const resources = await LearningResource.findAll({
            where: { trainning_id: trainingProgramId },
            attributes: ['id'],
        });
        res.status(200).json(resources);
    } catch (err) {
        console.error("Error fetching learning resources:", err);
        res.status(500).json({ error: "Error fetching learning resources" });
    }

}

export const lessons = async (req, res) => {


    const { courseid, moduleid } = req.params;

    try {
        const lesson = await LearningResource.findOne({
            where: {
                trainning_id: courseid,
                id: moduleid
            }
        });
        res.status(200).json(lesson);
        console.log(lesson)
    } catch (err) {
        console.error("Error fetching lesson:", err);
        res.status(500).json({ error: "Error fetching lesson" });
    }
}

export const questionare = async (req, res) => {

    const moduleidId = req.params.moduleid;

    try {
        const question = await Question.findAll({
            where: { resource_id: moduleidId }
        });
        if (question) {
            res.status(200).json(question)
            console.log(question)
        } else {
            res.status(200).json("Watch the complete lecture to complete this module")
        }
    } catch (err) {
        console.error("Error fetching question:", err);
        res.status(500).json({ error: "Error fetching question" });
    }

}

export const quizSubmit = async (req, res) => {




    const userID = 1; // Replace with actual user ID from session or token
    const { resourceId, programId, score, maxScore } = req.body;

    try {
        // Find or create UserQuizAttempt
        let userQuizAttempt = await UserQuizAttempt.findOne({
            where: {
                user_id: userID,
                program_id: programId,
                resource_id: resourceId,
            },
        });

        if (userQuizAttempt) {
            await userQuizAttempt.update({ score });
            console.log("UserQuizAttempt record updated:", userQuizAttempt.id);
        } else {
            userQuizAttempt = await UserQuizAttempt.create({
                user_id: userID,
                program_id: programId,
                resource_id: resourceId,
                score,
            });
            console.log("UserQuizAttempt record created:", userQuizAttempt.id);
        }

        // Only update UserProgress if the score is perfect
        if (score === maxScore) {
            let progress = await UserProgress.findOne({
                where: {
                    user_id: userID,
                    program_id: programId,
                },
            });

            if (progress) {
                let completedModules = JSON.parse(progress.completed_modules || '[]');

                if (!completedModules.includes(resourceId)) {
                    completedModules.push(resourceId);
                    progress.completed_modules = JSON.stringify(completedModules);
                }

                // Check if all modules are completed
                if (completedModules.length === progress.total_modules) {
                    progress.is_completed = true;
                }

                await progress.save();
                console.log("UserProgress updated:", progress.id);
            } else {
                const totalModules = await LearningResource.count({
                    where: { trainning_id: programId },
                });

                progress = await UserProgress.create({
                    user_id: userID,
                    program_id: programId,
                    completed_modules: JSON.stringify([resourceId]),
                    total_modules: totalModules,
                    is_completed: totalModules === 1,
                });
                console.log("UserProgress created:", progress.id);
            }
        }

        res.status(200).json({ message: 'Quiz submitted successfully' });
    } catch (err) {
        console.error('Error submitting quiz', err);
        res.status(500).json({ error: 'Error submitting quiz' });
    }
};



export const completedModules = async (req, res) => {
    const userID = 1;
    const { courseid } = req.params;

    try {
        const progress = await UserProgress.findOne({
            where: {
                user_id: userID,
                program_id: courseid,
            },
        });

        if (progress) {
            const completedModules = JSON.parse(progress.completed_modules || '[]');
            res.status(200).json({ completedModules });
        } else {
            res.status(200).json({ completedModules: [] });
        }
    } catch (error) {
        console.error('Error fetching completed modules', error);
        res.status(500).json({ error: 'Error fetching completed modules' });
    }
}

export const userprogress = async (req, res) => {
    const user_id = 1
    const { courseid } = req.params

    try {
        const progress = await UserProgress.findOne({
            where: {
                user_id: user_id,
                program_id: courseid,
            },
        });

        if (progress) {
            let completedModulesCount = [];

            if (typeof progress.completed_modules === 'string') {
                try {
                    const completedModules = JSON.parse(progress.completed_modules);
                    completedModulesCount = completedModules.length;
                } catch (error) {
                    console.error('Error parsing completed_modules JSON', error);
                }
            } else if (Array.isArray(progress.completed_modules)) {
                // If completed_modules is already an array
                completedModulesCount = progress.completed_modules.length;
            }

            let percentage = (completedModulesCount / progress.total_modules) * 100;
            percentage = parseInt(percentage)
            res.status(200).json({ percentage })
        } else {
            res.status(200).json(0);
        }
    } catch (error) {
        console.error('Error fetching percentage userprogress', error);
        res.status(500).json({ error: 'Error fetching percentage userprogress' });
    }
}