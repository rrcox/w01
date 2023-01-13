const express = require('express');
const dotenv = require("dotenv");
const db = require('./model/connect');

const app = express();
dotenv.config();
const port = process.env.PORT || 3001;

app.use('/', require('./routes'))

const start = async () =>{
    const connected = await db.connect();    
    app.listen(port, () => {
        if (connected) {
            console.log(`Running on port ${port}`);
        } else {
            console.log(`error - not connected`);
        }
    })
}
start();

