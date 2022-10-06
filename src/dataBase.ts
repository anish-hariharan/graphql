import { createConnection } from 'typeorm';
import {Users} from './entities/users'

export const connectDb = async () => {
    await createConnection({
        type: 'mysql',
        host: "localhost",
        port: 3306,
        username: "root",
        password: "373414",
        database: "graphq43",
        entities: [Users],
        ssl: false,
        synchronize: false, 
    });
}