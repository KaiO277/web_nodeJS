class NewsController {

    //GET /news
    index(req, res){
        res.render('news');
    }

    //GET /search
    search(req, res){
        res.render('news');
    }

}

module.exports = new NewsController;