import { Request, Response } from "express";
import { commentService } from "../model/comment";

export async function selectReplyList(req: Request, res: Response) {
  try {
    const postid = parseInt(req.query.postid as string);
    const data = await commentService.findMany(postid);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function addReply(req: Request, res: Response) {
  try {
    const { body } = req;
    console.log(body);
    const data = await commentService.create(body);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}

export async function removeReply(req: Request, res: Response) {
  try {
    const commentid = parseInt(req.query.commentid as string);
    const data = await commentService.remove(commentid);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).send(err.toJSON ? err.toJSON() : null);
  }
}
