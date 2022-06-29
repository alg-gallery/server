import express from "express";
import { addReply, removeReply, selectReplyList } from "../controller/comment";

const router = express.Router();

router.get("/", selectReplyList);
router.post("/", addReply);
router.delete("/", removeReply);

export default router;
