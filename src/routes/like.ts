import express from "express";
import { clickLike, selectLike } from "../controller/like";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.get("/:postid", selectLike);
router.post("/:postid", verifyToken, clickLike);

export default router;