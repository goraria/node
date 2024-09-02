const newsRouter = require('./news')
const siteRouter = require('./site')

let route = (app) => {
    /** request, response
     * request: infomation of request
     * response: infomation of response
     */
    app.get('/', (req, res) => {
        // res.send('Gorth Inc.')
        res.render('home');
    })

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // });

    //http://localhost:3000/search?q=ceo&ref=gorth&founder=japtor
    app.get('/search', (req, res) => {
        // console.log(req.query.q)
        res.render('search');
    });

    app.post('/search', (req, res) => {
        // res.send(req.body.input);
        console.log(req.body.input);
    });

    app.use('/news', newsRouter)
    app.use('/', siteRouter)
}

module.exports = route