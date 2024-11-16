import express from "express";
import { createUser, getAllUsers } from "../controllers/userController";

const router = express.Router();

router.get("/", getAllUsers); // GET /api/users
router.post("/", createUser); // POST /api/users

export default router;
