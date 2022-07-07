import moment from "moment";
import { PostBody } from "../types/interfaces";
import { db } from "./db";

class MyPostService {
    async findMany(userid: string) {
        const queryResult = await db.post.findMany({
            where: {
                userid,
            },
            orderBy: {
                post_date: 'desc',
            },
            select: {
                postid: true,
                users: {
                    select: {
                        userid: true,
                        nickname: true,
                    },
                },
                algCode: true,
                text: true,
                tag1: true,
                tag2: true,
                tag3: true,
                post_date: true,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
    async create(body: PostBody) {
        const { algCode, text, tag1, tag2, tag3, userid } = body;
        const postDate: Date = moment(new Date()).toDate();
        const queryResult = await db.post.create({
            data: {
                userid,
                algCode,
                text,
                tag1,
                tag2,
                tag3,
                post_date: postDate,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!");
        }
        return queryResult;
    }
    async remove(postid: number) {
        const queryResult = await db.post.delete({
            where: {
                postid,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
    async findMany_tag1(userid: string, tag1: string) {
        const queryResult = await db.post.findMany({
            where: {
                userid,
                tag1,
            },
            select: {
                postid: true,
                users: {
                    select: {
                        userid: true,
                        nickname: true,
                    },
                },
                algCode: true,
                text: true,
                tag1: true,
                tag2: true,
                tag3: true,
                post_date: true,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const mypostservice = new MyPostService();