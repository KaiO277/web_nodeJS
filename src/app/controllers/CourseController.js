const Course = require('../models/Course');
const { mutipleMongooseToObject, mongooseToObject } = require('../../util/mongoose');
// app.use(express.urlencoded({ extended: true })); 

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
        const course = new Course(req.body);
        

        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {

            });

        
    }
}

module.exports = new CourseController;