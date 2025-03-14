const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express();
PORT = 7000

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/user', (req, res) => {
    const html = `
    <ol>
    ${users.map(users=>`<li>${users['first-name']}</li>`).join('\n')}
    </ol>
    `
    res.send(html)
})
app.get('/user/:id', (req, res) => {

    const id = Number(req.params.id)
    const user =  users.find(user=> user.id === id)
    res.send(user)
})


app.listen(PORT,()=>console.log(`App is listening on this port: ${PORT}`))
