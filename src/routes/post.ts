import express from "express"
import { addPost, removePost, selectPostList } from "../controller/post";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.get("/my", verifyToken, selectPostList);
router.get("/", selectPostList);
router.post("/", verifyToken, addPost);
router.delete("/", verifyToken, removePost);

export default router;