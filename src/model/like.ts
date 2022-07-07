import { db } from "./db";

class MyLikeService {
    async count_auth(userid: string, postid: number) {
        const checkPost: number = await db.likes.count({
            where: {
                userid,
                postid,
            }
        })

        const countPost: number = await db.likes.count({
            where: {
                postid,
            },
        })

        const queryResult: any = {
            status: checkPost == 0 ? false : true,
            count: countPost,
        }

        return queryResult;
    }

    async count_nonAuth(postid: number) {
        const countPost: number = await db.likes.count({
            where: {
                postid,
            },
        })

        const queryResult: any = {
            status: false,
            count: countPost,
        }

        return queryResult;
    }

    async update(userid: string, postid: number) {
        const checkPost: number = await db.likes.count({
            where: {
                userid,
                postid,
            }
        })

        let queryResult;
        if (checkPost == 0) {
            queryResult = await db.likes.create({
                data: {
                    userid,
                    postid,
                },
            })
        } else {
            queryResult = await db.likes.delete({
                where: {
                    postid_userid: { postid, userid },
                },
            })
        }
        return queryResult;
    }
}

export const mylikeservice = new MyLikeService();