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
            attributes: ['title'],
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

        res.status(200).json(question)
        console.log(question)
    } catch (err) {
        console.error("Error fetching question:", err);
        res.status(500).json({ error: "Error fetching question" });
    }

}

export const quizSubmit = async (req, res) => {


    const userID = 1;
    const { resourceId, programId, score, maxScore } = req.body;

    try {

        let userQuizAttempt = await UserQuizAttempt.findOne({
            where: {
                user_id: userID,
                program_id: programId,
                resource_id: resourceId
            }
        });


        if (userQuizAttempt) {

            await userQuizAttempt.update({ score });
            console.log("UserQuizAttempt record updated:", userQuizAttempt.id);
        } else {

            userQuizAttempt = await UserQuizAttempt.create({
                user_id: userID,
                program_id: programId,
                resource_id: resourceId,
                score
            });
            console.log("UserQuizAttempt record created:", userQuizAttempt.id);
        }

        if (score === maxScore) {

            let progress = await UserProgress.findOne({
                where: {
                    user_id: userID,
                    program_id: programId
                }
            });
            console.log("Prblem in finding userprogress")

            if (progress) {


                const alreadyCompleted = await UserQuizAttempt.findOne({
                    where: {
                        user_id: userID,
                        program_id: programId,
                        resource_id: resourceId,
                        score: maxScore
                    }
                });

                if (alreadyCompleted) {
                    progress.completed_modules += 1;
                }
                if (progress.total_modules === progress.completed_modules) {
                    progress.is_completed = true;
                }
                console.log("UserProgress updated:", progress.id);
                await progress.save();
            } else {
                // Create new user progress if it doesn't exist
                const totalModules = await LearningResource.count({
                    where: { trainning_id: programId }
                });

                UserProgress.create({
                    user_id: userID,
                    program_id: programId,
                    completed_modules: 1,
                    total_modules: totalModules,
                    is_completed: totalModules === 1
                });
                console.log("UserProgress created:", progress.id);
            }
        }

        // Respond with success message
        res.status(200).json({ message: 'Quiz submitted successfully' });
    } catch (err) {
        // Handle errors
        console.error('Error submitting quiz', err);
        res.status(500).json({ error: 'Error submitting quiz' });
    }
};