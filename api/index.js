import express from "express"
import mysql from "mysql2"
import cors from "cors"
// import multer from "multer"
import trainningProgramRouter from "./routes/trainning_programs.js"
import sequelize from "./db.js"


const app = express()


app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
    console.log("Incoming request:", req.method, req.url);
    next();
});

app.get("/", (req, res) => {
    console.log("Api working fine")
    res.json("API working ")
})

export const Db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "dhruva",
        database: "lms"
    }
)

Db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the MySQL database");
});


const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");

        // await sequelize.sync({ force: false });  // Use force: true only for development (it will drop tables if they exist)
        // console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

initializeDatabase();

app.use("/api", trainningProgramRouter)

app.listen(3000, () => {
    console.log(`Server running on 3000 `);
}
)