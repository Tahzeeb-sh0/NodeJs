const fs = require('fs')
// console.log(fs)

//Sync
fs.writeFileSync("./text.txt"," hello! ");

// //Async
// fs.writeFile("./text.txt","hello there",(error)=>error);


const text = fs.readFileSync("./text.txt" ,"utf-8")
console.log(text);

fs.readFile("./text.txt","utf-8",(err,result)=>{
    if (!err) {
        console.log(result)
    }else{
        console.log(err)
    }
    
})

const date = fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString())
console.log(date);

fs.cpSync("./text.txt","./cp.txt")

fs.unlinkSync("./cp.txt")

console.log(fs.statSync("./text.txt").isFile())

fs.mkdirSync("Document")