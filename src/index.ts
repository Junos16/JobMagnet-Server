import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!")})
    .catch((err) => {
        console.error("Error during Data SOice Initialization", err);
    })

const main = async () => {
    const app = express() as any;

    app.get('/', (_: any, res: { send: (arg0: string) => void; }) => {
        res.send("hello");
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    });

    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    });
}

main().catch((err) => {
    console.error(err);
});

