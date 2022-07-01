import express from "express";
import { postData } from "../controller/uesr";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.post("/", postData);

export default router;