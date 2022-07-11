import express from "express";
import { postData, refresh, removeUser, signin } from "../controller/uesr";
import verifyToken from "../middlewares/auth";

const router = express.Router();

router.post("/signup", postData);
router.post("/signin", signin);
router.post("/refresh", refresh);
router.delete("/:userid", verifyToken, removeUser) // 유저삭제

export default router;