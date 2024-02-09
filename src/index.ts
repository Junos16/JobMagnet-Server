import express from 'express';

const app = express();
app.get('/', (_, res) => {
    res.send("hello");
})
app.listen(4000, () => {
    console.log('server started on localhost:4000')
}).on('error', (err) => {
    console.log(err.message)
});