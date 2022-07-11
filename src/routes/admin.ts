import express from "express";
import { removeComment, removeLike, removePost, removeUser, selectUserList } from "../controller/admin";
import verifyToken from "../middlewares/admin";

const router = express.Router();

router.delete("/post/:userid", verifyToken, removePost);
router.delete("/comment/:userid", verifyToken, removeComment);
router.delete("/like/:userid", verifyToken, removeLike);
router.delete("/user/:userid", verifyToken, removeUser);
router.get("/user", verifyToken, selectUserList) // 유저목록

export default router;