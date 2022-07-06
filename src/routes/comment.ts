import express from "express";
import { addReply, removeReply, selectReplyList } from "../controller/comment";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.get("/:postid", selectReplyList);
router.post("/", verifyToken, addReply);
router.delete("/", verifyToken, removeReply);

export default router;
