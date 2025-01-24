import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import dashboardRouter from "./src/routes/dashboard.route";


dotenv.config();

const app: Application = express();

//middlewares
app.use(helmet());
app.use(cors());

app.use("/api/dashboard", dashboardRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
