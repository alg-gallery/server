import express from "express";
import { postData, refresh, signin } from "../controller/uesr";

const router = express.Router();

router.post("/signup", postData);
router.post("/signin", signin);
router.post("/refresh", refresh);

export default router;