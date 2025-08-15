import { createSchool, getSchools } from "@/controllers/schools";
import express from "express";

const schoolRouter = express.Router();

schoolRouter.post("/schools", createSchool);
schoolRouter.get("/schools", getSchools);

export default schoolRouter;