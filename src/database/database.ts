import path from "path";
import dotenv from "dotenv";

import { DataSource } from "typeorm";

dotenv.config({
	path: path.resolve(__dirname, "../../.env")
});

export const appDataSource = new DataSource({
	type: process.env.DB_TYPE as "mysql",
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	logging: !!process.env.DB_LOGGING as boolean
});