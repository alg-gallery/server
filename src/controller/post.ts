import { Request, Response } from "express";
import { mypostservice } from "../model/mypost";
import { postservice } from "../model/post";

export async function selectPostList(req: Request, res: Response) {
    try {
        const userid = req.body.userid as string;
        let data;
        if (!userid) {
            data = await postservice.findMany();
        } else {
            data = await mypostservice.findMany(userid);
        }
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function addPost(req: Request, res: Response) {
    try {
        const { body } = req;
        console.log(body);
        const data = await mypostservice.create(body);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function removePost(req: Request, res: Response) {
    try {
        const postid = parseInt(req.query.postid as string);
        const data = await mypostservice.remove(postid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}