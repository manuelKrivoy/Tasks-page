import {config} from "dotenv";

config();

export const password = process.env.password;

export const PORT = process.env.PORT || 3000; //si no está la variable process.env.port utiliza por defecto el 3000.