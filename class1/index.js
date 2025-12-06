// import http from 'http';

// const server = http.createServer((req, res) => {
//     console.log(req.method)
//     if (req.url === "/users") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ name: "thub" }))
//     }
//     else {
//         res.writeHead(200, { "content-type": "text/plain" });
//         res.end("Hello this is from backend");
//     }

// });

// server.listen(7007, () => {
//     console.log(`server running at port ${7007}`)
// });

import express from "express";

const app = express();

app.get('/',(req, res) => {
    res.send("hello this is fron Backend.");
})

app.listen(7007, () => {
    console.log("server running at 7007")
})