const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {cors: {origin: "*"}})

app.set('view engin', 'ejs')

app.get