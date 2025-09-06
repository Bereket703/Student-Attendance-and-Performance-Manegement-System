import express from 'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import connectToDatabase from './db/db.js'
import dotenv from "dotenv";
import courseRouter from './routes/course.js'
import teacherRouter from './routes/teacher.js'




connectToDatabase();
dotenv.config();
const app = express();


app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter)
app.use('/api/course', courseRouter)
app.use('/api/teacher', teacherRouter)

app.listen(4000,()=>{
    console.log(`server is running.....on port ${process.env.PORT}`)
})