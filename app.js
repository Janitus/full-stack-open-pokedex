const express = require('express')
const app = express()

// get the port from env variable

app.use(express.static('dist'))