import moment from "moment";
import { CommentBody } from "../types/interfaces";
import { db } from "./db";

class CommentService {
  async findMany(postid: number) {
    const queryResult = await db.comment.findMany({
      where: {
        postid,
      },
      select: {
        commentid: true,
        postid: true,
        text: true,
        comment_date: true,
        users: {
          select: {
            userid: true,
            nickname: true,
          },
        },
      },
    });
    if (!queryResult) {
      throw new Error("Error!!!");
    }
    return queryResult;
  }
  async create(body: CommentBody) {
    try {
      let { postid, text, userid } = body;
      const commentDate: Date = moment(new Date()).toDate();
      const queryResult = await db.comment.create({
        data: {
          postid: Number(postid),
          text,
          comment_date: commentDate,
          userid,
        },
      });
      if (!queryResult) {
        throw new Error("Error!!");
      }
      return queryResult;
    } catch (err: any) {
      console.log(err);
      throw new Error("Error!!");
    }
  }
  async remove(commentid: number) {
    const queryResult = await db.comment.delete({
      where: {
        commentid,
      },
    });
    if (!queryResult) {
      throw new Error("Error!!!");
    }
    return queryResult;
  }
}

export const commentService = new CommentService();
