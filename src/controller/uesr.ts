import { Request, Response } from "express";
import { userService } from "../model/user";

export async function postData(req: Request, res: Response) {
    try {
        const { body } = req;
        const data = await userService.postOne(body);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}