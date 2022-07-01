import jwt, { Secret, JwtPayload } from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { config } from '../../config'

export const SECRET_KEY: Secret = config.jwt.accessToken!;

export interface CustomRequest extends Request {
    token: string | JwtPayload;
}

export default function verifyToken(req: Request, res: Response, next: NextFunction) {
    // to verify Token
    try {
        const token = req.header('Authorization')?.replace('Bearer', '');

        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        res.status(401).send('Please authenticate');
    }
}