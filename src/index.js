const path = require('path')
const express = require('express')
// import express from 'express'
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// import handlebars from 'express-handlebars' // exphbs
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())
// HTTP Logger
// app.use(morgan('combined'))

// Template engine
// handlebars.create({
//     defaultLayout: 'main',
//     extname: '.hbs'
// })
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
// app.set('views', './resources/views')
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init
route(app)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // console.log(`Example app listening at http://localhost:${port}`);
})
