import { Request, Response } from "express";
import { mypostservice } from "../model/mypost";
import { postservice } from "../model/post";

export async function selectPostList_latest(req: Request, res: Response) {
    try {
        const userid = req.body.userid;
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

export async function selectPostList_tag1(req: Request, res: Response) {
    try {
        const userid = req.body.userid as string;
        const tag1 = req.params.tag1 as string;
        console.log(userid, tag1);
        console.log("hi");
        let data;
        if (!userid) {
            data = await postservice.findMany_tag1(tag1);
        } else {
            data = await mypostservice.findMany_tag1(userid, tag1);
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
        const postid = parseInt(req.params.postid as string);
        const userid = req.body.postid;
        const data = await mypostservice.remove(postid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function selectPost(req: Request, res: Response) {
    try {
        const postid = parseInt(req.params.postid as string);
        const data = await postservice.findUnique(postid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}