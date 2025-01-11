import dotenv from 'dotenv';
dotenv.config();

export const API_BASE_URL = process.env.API_BASE_URL;
export const BASE_URL = process.env.BASE_URL;

export const CLIENT_ID = process.env.CLIENT_ID as string;
export const CLIENT_SECRET = process.env.CLIENT_SECRET as string;
