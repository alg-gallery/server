import { UserBody } from "../types/interfaces";
import { config } from "../../config";
import bcrypt from "bcrypt";
import { db } from "./db";

class UserService {
    async postOne(body: UserBody) {
        try {
            const { userid, password, nickname } = body;
            const hashnum: number = parseInt(config.hash.rounds!);
            const salt: string = await bcrypt.genSalt(hashnum);
            const hashed: string = await bcrypt.hash(password, salt);
            const queryResult = await db.users.create({
                data: {
                    userid,
                    password: hashed,
                    nickname
                }
            });

            if (!queryResult) {
                throw new Error("Error!!");
            }
            return { userid, nickname };
        } catch (err) {
            throw new Error("Error!!");
        }
    }

    async checkout(userid: string, password: string) {
        try {
            const queryResult: any = await db.users.findUnique({
                where: {
                    userid,
                },
                select: {
                    userid: true,
                    password: true,
                    nickname: true,
                },
            });
            const hashed = queryResult?.password;
            const result = await bcrypt.compare(password, hashed!);
            if (result) {
                const { userid, nickname } = queryResult;
                return { userid, nickname };
            } else {
                return;
            }
        } catch (err) {
            throw new Error("Error!!!");
        }
    }
}

export const userService = new UserService();