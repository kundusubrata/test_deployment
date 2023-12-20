const http = require("http");
const fs = require("fs");
const dotenv = require("dotenv");

dotenv.config({
    path: "./config.env",
});

const port = process.env.PORT || 3000;

// const home = fs.readFileSync("./home.html","utf-8");


const server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url==="/"){
        return res.end("<h1>Hello World</h1>");
    }
    else{
        return res.end("<h1>404 Page not found</h1>");
    }
});

server.listen(port,()=>{
    console.log(`Server is working.`);
});