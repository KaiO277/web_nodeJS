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
        // res.send('COURSES TE '+ req.params.slug);
    }

    //GET /create
    create(res, rep, next){
        res.render("CREATE COURSE");
    }
}

module.exports = new CourseController;