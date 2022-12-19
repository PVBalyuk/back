import * as dotenv from 'dotenv';
dotenv.config();


export const SECRET_KEY_CONFIG = {
    secretKeyAccessToken: process.env.SECRET_KEY_ACCESS,
    secretKeyRefreshToken: process.env.SECRET_KET_REFRESH,
    expiresInAccess: '24h',
    expiresInRefresh: '72h',
}