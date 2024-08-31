const path = require('path')
const express = require('express')
// import express from 'express'
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// import handlebars from 'express-handlebars' // exphbs
const app = express()
const port = 3000

// HTTP Logger
app.use(morgan('combined'))

// Template engine
// handlebars.create({
//     defaultLayout: 'main',
//     extname: '.hbs'
// })
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs');
app.set('views', './resources/views');

app.get('/', (req, res) => {
    // res.send('Gorth Inc.')
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Example app listening at http://localhost:${port}`);
})
