import { createContact, getContacts } from "@/controllers/admin";
import express from "express";

const adminRouter = express.Router();

adminRouter.post("/contacts", createContact);
adminRouter.get("/contacts", getContacts);

export default adminRouter;