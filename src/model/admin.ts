import { db } from "./db";

class AdminService {
    async removePost(userid: string) {
        const queryResult = await db.post.deleteMany({
            where: {
                userid,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }

    async removeComment(userid: string) {
        const queryResult = await db.comment.deleteMany({
            where: {
                userid,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }

    async removeLike(userid: string) {
        const queryResult = await db.likes.deleteMany({
            where: {
                userid,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }

    async removeUser(userid: string) {
        const queryResult = await db.users.delete({
            where: {
                userid,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }

    async findMany() {
        const queryResult = await db.users.findMany({
            select: {
                userid: true,
                nickname: true,
            },
        });
        if (!queryResult) {
            throw new Error("Error!!!");
        }
        return queryResult;
    }
}

export const adminservice = new AdminService();