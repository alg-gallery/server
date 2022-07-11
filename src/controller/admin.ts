import { Request, Response } from "express";
import { adminservice } from "../model/admin";

export async function removePost(req: Request, res: Response) {
    try {
        const userid = req.params.userid;
        const data = await adminservice.removePost(userid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function removeComment(req: Request, res: Response) {
    try {
        const userid = req.params.userid;
        const data = await adminservice.removeComment(userid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function removeLike(req: Request, res: Response) {
    try {
        const userid = req.params.userid;
        const data = await adminservice.removeLike(userid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function removeUser(req: Request, res: Response) {
    try {
        const userid = req.params.userid;
        const data = await adminservice.removeUser(userid);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function selectUserList(req: Request, res: Response) {
    try {
        const data = await adminservice.findMany();
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}