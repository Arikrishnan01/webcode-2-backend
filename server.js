const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const dotenv = require('dotenv')
const db = require('./db');
const router = require('./routers')
const PORT = process.env.PORT || 8000

/**
 * CONFIGURATION FOR ENV VARIABLES
 */
// dotenv.config();
dotenv.config();

/**
 * INJECT DATABASE CODE
 */
require("./db");



// middleware
app.use(bodyparser.urlencoded({ extended: true, limit: "50mb" }))
app.use(bodyparser.json({ limit: "50mb" }))

app.use(express.json())

// heders
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

// api
app.use('/api', router)





// static resource
app.use('/upload', express.static(path.join(__dirname, '/../upload')))
app.use(express.static(path.join(__dirname, "/../frotend/build")))

app.get('*', (req, res) => {
    try
    {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.js`))
    }
    catch(e)
    {
        res.send('Oops! error occurred')
    }
})


// cors
app.use(cors())

// server listen
app.listen(PORT, () => {
    console.log(`Stackoverflow clone is running on PORT No- ${PORT}`)
})