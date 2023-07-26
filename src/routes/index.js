const newsRoute = require('./news');
const siteRoute = require('./site');

function route(app){

    app.use('/news', newsRoute);

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   });

    app.use('/', siteRoute);

    
      
    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route; 