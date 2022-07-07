import { db } from "./db";

class PostService {
    async findMany() {
        const queryResult = await db.post.findMany({
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
    async findUnique(postid: number) {
        const queryResult = await db.post.findUnique({
            where: {
                postid,
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
    async findMany_tag1(tag1: string) {
        console.log(tag1);
        const queryResult = await db.post.findMany({
            where: {
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

export const postservice = new PostService();