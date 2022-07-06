import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import commentRouter from "./src/routes/comment";
import userRouter from "./src/routes/user";
import postRouter from "./src/routes/post";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/comment", commentRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

app.use("/", (req: Request, res: Response) => {
  res.status(404).send("Anavailable route");
});

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, () => {
  console.log("Active!!");
});
