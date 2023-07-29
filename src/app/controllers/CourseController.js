const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');

class CourseController{

    //GET /slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {course: mongooseToObject(course), title: course.name});
            })
            .catch(next);
    }

    //GET /create
    create(req, res, next){
        res.render('courses/create');
    }

    //POST /store
    store(req, res, next){
        res.json(req.body);
    }
}

module.exports = new CourseController;