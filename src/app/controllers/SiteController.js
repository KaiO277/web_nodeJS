const Course = require('../models/Course');

class SiteController{

     //GET /ns
     async index(req, res){
            try {
              const courses = await Course.find({}).exec();
              res.json(courses);
              console.log(res.json(courses));
            } catch (err) {
              res.status(400).json({ error: 'message' });
            }
    }

    //GET /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;