const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:3001/meteor', {useNewUrlParser: true, useUnifiedTopology: true })

// register the models
require('./models/RainfallOutlook')

require('./routes')(app)


app.listen(4000)