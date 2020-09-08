const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/backend'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const articleRouter = require('./routers/articles')
app.use('/articles',articleRouter)

app.listen(4201, () => {
    console.log('Server started')
})