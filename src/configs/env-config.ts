import { config } from "dotenv";

config();

export const POSTGRES_HOST: string = process.env.POSTGRES_HOST as string;
export const POSTGRES_PORT: number = parseInt(process.env.POSTGRES_PORT as string);
export const POSTGRES_DATABASE: string = process.env.POSTGRES_DATABASE as string;
export const POSTGRES_USERNAME: string = process.env.POSTGRES_USERNAME as string;
export const POSTGRES_PASSWORD: string = process.env.POSTGRES_PASSWORD as string;
export const ACCESS_TOKEN_EXPIRES_IN: string = process.env.ACCESS_TOKEN_EXPIRES_IN as string;
export const PORT: string = process.env.PORT as string;
