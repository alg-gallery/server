import env from "dotenv"

env.config();

export const config = {
    hash: {
        rounds: process.env.HASH_NUM
    },
    jwt: {
        accessToken: process.env.ACCESS_TOKEN,
        refreshToken: process.env.REFRESH_TOKEN
    }
}