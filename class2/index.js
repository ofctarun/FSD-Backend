import express from "express"

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("api sucess");
})

app.get('/get-user', (req, res) => {
    res.send("api-get-user sucess");
})

app.post('/create-user', (req, res) => {
    console.log(req.body);
    res.send("User created");
});

app.listen(7007, () => {
    console.log("server running at 7007")
})