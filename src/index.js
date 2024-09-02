const path = require('path')
const express = require('express')
// import express from 'express'
const morgan = require('morgan')
const handlebars = require('express-handlebars')
// import handlebars from 'express-handlebars' // exphbs
const app = express()
const port = 3000

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

/** request, response
 * request: infomation of request
 * response: infomation of response
 */
app.get('/', (req, res) => {
    // res.send('Gorth Inc.')
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
});
//http://localhost:3000/search?q=ceo&ref=gorth&founder=japtor
app.get('/search', (req, res) => {
    // console.log(req.query.q)
    res.render('search');
});

app.post('/search', (req, res) => {
    // res.send(req.body.input);
    console.log(req.body.input);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    // console.log(`Example app listening at http://localhost:${port}`);
})
