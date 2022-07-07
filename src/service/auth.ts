import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import { Request } from 'express'
import { config } from '../../config'

export const ACCESS_TOKEN_KEY: Secret = config.jwt.accessToken;

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

class Auth {
    isAuth(req: Request) {
        try {
            const token = req.header('Authorization')?.replace('Bearer ', '');

            if (!token) {
                return false;
            } else {
                jwt.verify(token, ACCESS_TOKEN_KEY, (err: any, decoded: any) => {
                    if (err) {
                        return false;
                    } else {
                        return true;
                    }
                });
            }
        } catch (err: any) {
            throw new Error("error!!!");
        }
    }

    userid(req: Request) {
        try {
            const token: string = req.header('Authorization')?.replace('Bearer ', '')!;

            jwt.verify(token, ACCESS_TOKEN_KEY, (err: any, decoded: any) => {
                if (err) {
                    throw new Error("error!!!");
                } else {
                    return decoded.userid;
                }
            });
        } catch (err: any) {
            throw new Error("error!!!");
        }
    }
}

export const auth = new Auth();