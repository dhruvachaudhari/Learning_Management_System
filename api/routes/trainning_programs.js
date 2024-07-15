import express from "express"
import { getCourses, course, lessons, questionare, quizSubmit, completedModules, userprogress, courseLessonsID, quizReattempt } from "../controllers/trainning_programs.js"


const router = express.Router()

router.get("/courses", getCourses)
router.get("/course/:courseid", course)
router.get("/course/:courseid/modules", courseLessonsID)
router.get("/course/:courseid/progress", userprogress)
router.get("/course/:courseid/:moduleid", lessons)
router.get("/course/:courseid/:moduleid/ques", questionare)
router.post("/course/:courseid/:moduleid/ques/quiz", quizSubmit)
// router.get("/course/:courseid/:moduleid/ques/quiz", quizReattempt)
router.get("/course/:courseid/:moduleid/completed-modules", completedModules)


export default router