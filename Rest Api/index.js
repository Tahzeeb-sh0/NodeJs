const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
const fs = require('fs');
PORT = 7000;


app.use(express.urlencoded({extended:false}))

app.use((req,res,next)=>{
  console.log("hello from middleware")
    next()
})

app.route('/api/users')
.get((req, res) => {
    // const html = `

    // <ol>
    // ${users.map(users=>`<li>${users['first-name']}</li>`).join('\n')}
    // </ol>
    // `

    res.setHeader("x-name","tahzeeb")
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
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        if (err) throw err;
        console.log('Data written to file');
        res.json({status:'success'})
    })
   
})



app.listen(PORT,()=>console.log(`App is listening on this port: ${PORT}`))
