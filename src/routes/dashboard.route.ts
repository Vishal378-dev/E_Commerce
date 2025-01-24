
import { authAPI } from "../api/dashboard.api";

import express from "express";
const dashboardRouter = express.Router();

dashboardRouter.post('/signup',  authAPI.userRegister);

export default dashboardRouter
