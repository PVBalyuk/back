import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { SECRET_KEY_CONFIG} from '../configs/authConfig';
dotenv.config();

export const decodeAccessToken = async (accessToken) => {
    const decoded = await jwt.verify(accessToken, process.env.SECRET_KEY_ACCESS);

    return decoded; 
}

export const decodeRefreshToken = async (refreshToken) => {
    const decoded = await jwt.verify(refreshToken, process.env.SECRET_KET_REFRESH);

    return decoded;
}

export const generateTokens = (userEmail, userId) => {
    const accessToken = jwt.sign({userEmail, userId}, SECRET_KEY_CONFIG.secretKeyAccessToken, {
        expiresIn: '30m',
    });
    const refreshToken = jwt.sign({userEmail, userId}, SECRET_KEY_CONFIG.secretKeyRefreshToken, {
        expiresIn: '30d',
    })
    
    return { accessToken, refreshToken }
}