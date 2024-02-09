import express from 'express';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
    const app = express();

    app.get('/', (_, res) => {
        res.send("hello");
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver],
            validate: false
        })
    });

    app.listen(4000, () => {
        console.log('server started on localhost:4000')
    });
}

main().catch((err) => {
    console.error(err);
});

