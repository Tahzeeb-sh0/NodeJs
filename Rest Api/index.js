const express = require("express");
const fs = require("fs");
const {dbConnection} = require('./db/index.js')
const userRoute = require('./routes/user.route.js')

dbConnection("mongodb://127.0.0.1:27017/users")
const app = express();
PORT = 7000;

app.use(express.urlencoded({ extended: false }));

app.use('/api/user',userRoute)

app.listen(PORT, () => console.log(`App is listening on this port: ${PORT}`));


