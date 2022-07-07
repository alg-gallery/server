import express from "express"
import { addPost, removePost, selectPost, selectPostList_latest, selectPostList_tag1 } from "../controller/post";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.get("/", selectPostList_latest);
router.get("/:postid", selectPost);
router.get("/sort/:tag1", selectPostList_tag1); // 언어별 querystring
router.get("/my", verifyToken, selectPostList_latest);
router.get("/my/:tag1", verifyToken, selectPostList_tag1); // 언어별 querystring
router.post("/", verifyToken, addPost);
router.delete("/:postid", verifyToken, removePost);

export default router;