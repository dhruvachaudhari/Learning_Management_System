import express from "express"
import { getCourses, course, lessons, questionare, quizSubmit } from "../controllers/trainning_programs.js"


const router = express.Router()

router.get("/courses", getCourses)
router.get("/course/:courseid", course)
router.get("/course/:courseid/:moduleid", lessons)
router.get("/course/:courseid/:moduleid/ques", questionare)
router.post("/course/:courseid/:moduleid/ques/quiz", quizSubmit)


export default router