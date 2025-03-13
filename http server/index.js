const http = require('http');
const fs = require('fs');


const myserver = http.createServer((req,res)=>{   
    console.log(req.url)
    const log = `${Date.now()}: ${req.url} new req received\n`
    fs.appendFile("text.txt", log,(err,data)=>{
       

        switch (req.url) {
            case '/':
                res.end("home");
                break;

            case '/contact':
                res.end("my details");
                break;
        
            default:
                res.end("404 not found");
                break;
        }
    })
    
})

myserver.listen(3000,()=>console.log("Server is listening"))