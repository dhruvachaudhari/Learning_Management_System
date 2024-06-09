import express from "express"
import mysql from "mysql2"
import cors from "cors"
// import multer from "multer"
import trainningProgramRouter from "./routes/trainning_programs.js"


const app = express()


app.use(express.json)
// app.use(cors())
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    console.log("Api working fine")
})

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "dhruva",
        database: "lms"
    }
)

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the MySQL database");
});


app.use("/api", trainningProgramRouter)

app.listen(5173, () => {
    console.log(`Server running on 3000 `);
}
)