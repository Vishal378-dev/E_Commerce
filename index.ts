import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import dashboardRouter from "./src/routes/dashboard.route";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

dotenv.config();

const app: Application = express();

//middlewares
app.use(helmet());
app.use(cors());

app.use("/api/dashboard", dashboardRouter);


app.get("/",async (req:Request,res:Response)=>{
  const allUsers = await prisma.user.findMany()
  console.log("allUsers - ",allUsers)
  res.send(allUsers)
})

app.get("/insert",async (req,res)=>{
  const user = await prisma.user.create({data:{name:"rahul",email:"rahul@mail.com"}})
  res.send(user)
})

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
