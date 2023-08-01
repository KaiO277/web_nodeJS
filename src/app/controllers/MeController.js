const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController{

    //GET /me//store/courses
    storedCourses(req, res, next){
        Course.find({})
            .then(courses => res.render('me/stored-courses',{
                title: 'Khoá học của tôi',
                courses : mutipleMongooseToObject(courses),
            }))
            .catch(next)
        
    }
}

module.exports = new MeController();