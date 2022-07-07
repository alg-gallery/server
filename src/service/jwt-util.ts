import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { config } from "../../config"
import { Payload } from "../types/interfaces";

export const ACCESS_TOKEN_KEY: Secret = config.jwt.accessToken;
export const REFRESH_TOKEN_KEY: Secret = config.jwt.refreshToken;

class JwtUtil {
    token(payload: Payload) {
        const accessToken = jwt.sign(payload, ACCESS_TOKEN_KEY, {
            algorithm: "HS256",
            expiresIn: "1h",
        });
        const refreshToken = jwt.sign(payload, REFRESH_TOKEN_KEY, {
            algorithm: "HS256",
            expiresIn: "14d",
        });

        return { accessToken, refreshToken };
    }

    verify(token: string) {
        try {
            const decoded: any = jwt.verify(token, REFRESH_TOKEN_KEY);
            return {
                ok: true,
                payload: {
                    userid: decoded.id,
                    nickname: decoded.nickname,
                }
            };
        } catch (err: any) {
            return {
                ok: false,
                message: err.message(),
            }
        }
    }
}

export const jwtUtil = new JwtUtil();