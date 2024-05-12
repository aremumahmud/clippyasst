const express = require('express');
const path = require('path');
const appRouter = require('./routes/app.route')
const cors = require('cors')


const app = express();
app.use(cors())


app.use(express.static(path.join(__dirname, "./dist")))



app.use(express.json())
app.use(express.urlencoded())


app.use(appRouter)

module.exports = app