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
}

export const postservice = new PostService();