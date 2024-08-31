const express = require('express')
// import express from 'express'
const morgan = require('morgan')
// import morgan from 'morgan'
const handlebars = require('express-handlebars')
// import handlebars from 'express-handlebars' // exphbs
const app = express()
const port = 3000

app.use(morgan('combined'))

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.send('Gorth Inc.')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})