import { Request, Response } from "express";
import { auth } from "../service/auth";
import { mylikeservice } from "../model/like";

export async function selectLike(req: Request, res: Response) {
    try {
        const postid = parseInt(req.params.postid as string);
        let data;
        if (auth.isAuth(req)) {
            const userid: string = auth.userid(req)!;
            data = await mylikeservice.count_auth(userid, postid);
        } else {
            data = await mylikeservice.count_nonAuth(postid);
        }
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJson ? err.toJSON() : null);
    }
}

export async function clickLike(req: Request, res: Response) {
    try {
        const userid = req.body.userid;
        const postid = parseInt(req.params.postid as string);
        const data = await mylikeservice.update(userid, postid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}