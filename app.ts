import express, { Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.use("/", (req: Request, res: Response) => {
  res.status(404).send("Anavailable route");
});

app.listen(8080, () => {
  console.log("Active!!");
});
