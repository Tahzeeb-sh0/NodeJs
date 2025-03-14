const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const fs = require('fs');
const { json } = require('stream/consumers');
PORT = 7000;


app.use(express.urlencoded({extended:false}))

app.route('/api/users')
.get((req, res) => {
    // const html = `
    // <ol>
    // ${users.map(users=>`<li>${users['first-name']}</li>`).join('\n')}
    // </ol>
    // `
    res.json(users)
})
.patch((req , res)=>{
    return res.json({status:'pending'})
})
.delete((req , res)=>{
    return res.json({status:'pending'})
})
.post((req , res)=>{

    const body = req.body;
    users.push({...body , id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{})
   
})



app.listen(PORT,()=>console.log(`App is listening on this port: ${PORT}`))
