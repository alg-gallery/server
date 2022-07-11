import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { config } from '../../config'

export const ACCESS_TOKEN_KEY: Secret = config.jwt.accessToken;

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
    // to verify Token
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error();
        }

        jwt.verify(token, ACCESS_TOKEN_KEY, (err: any, decoded: any) => {
            if (err) {
                res.status(401).send('Refresh your token');
            } else {
                const userid = decoded.userid;
                if (userid != "admin") {
                    res.status(401).send('Who Are You?');
                } else {
                    req.body.userid = userid;
                    next();
                }
            }
        });
    } catch (err: any) {
        res.status(401).send('Please authenticate');
    }
}