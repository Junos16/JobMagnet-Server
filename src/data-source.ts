import { DataSource } from "typeorm";
import { Post } from "./entities/Post";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    entities: [Post],
    migrations: [],
    migrationsTableName: "",
    synchronize: true, //consider creating migrations
    logging: true,
})