import express from "express"
import { getCourses, course, lessons } from "../controllers/trainning_programs.js"


const router = express.Router()

router.get("/courses", getCourses)
router.get("/course/:courseid", course)
router.get("/course/:courseid/:moduleid", lessons)



export default router