import express, { Express, Request, Response, Application, urlencoded } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import dashboardRouter from "./src/routes/dashboard.route";
import { PrismaClient } from '@prisma/client'

dotenv.config();

const prisma = new PrismaClient()
const app: Application = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(helmet());
app.use(cors());

// Routes
app.use("/api/dashboard", dashboardRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
