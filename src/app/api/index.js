const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if (req.url == "/users"){
        fs.readFile(
            `${_dirname}/users/db.json`,
            "utf-8",
            (err, data) => {
                console.log(data);
                res.end(data);
            });
            
    }
});

  server.listen(8000, "127.0.0.1" , () => {
    console.log("listening to the port no 8000");
    });
