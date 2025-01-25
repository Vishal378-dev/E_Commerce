
import { authAPI } from "../api/dashboard.api";

import express from "express";
const dashboardRouter = express.Router();

dashboardRouter.get('/signup',  authAPI.userRegister);

export default dashboardRouter
