import { Request, Response } from "express";
import { userService } from "../model/user";
import { jwtUtil } from "../service/jwt-util";

export async function postData(req: Request, res: Response) {
    try {
        const { body } = req;
        const data = await userService.postOne(body);
        res.status(200).json(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function signin(req: Request, res: Response) {
    try {
        const { userid, password } = req.body;
        const user = await userService.checkout(userid, password);
        if (!user) {
            res.status(401).json({ message: 'Incorrect userid or password' })
            return;
        }
        const token = jwtUtil.token(user);
        console.log(token);
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(404).send('Incorrect userid or password');
    }
}

export async function refresh(req: Request, res: Response) {
    try {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            res.sendStatus(401);
        }
        const data: any = jwtUtil.verify(refreshToken);
        if (data.ok) {
            const { accessToken } = jwtUtil.token(data.payload);
            res.status(200).json(accessToken);
        } else {
            res.sendStatus(401);
        }
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}

export async function removeUser(req: Request, res: Response) {
    try {
        const userid: string = req.params.userid
        const data = await userService.remove(userid);
        res.status(200).send(data);
    } catch (err: any) {
        res.status(500).send(err.toJSON ? err.toJSON() : null);
    }
}