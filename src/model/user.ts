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
            return queryResult;
        } catch (error) {
            throw new Error("Error!!");
        }
    }
}

export const userService = new UserService();