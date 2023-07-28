const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CourseController{


    //GET /search
    show(req, res){
        res.render('COURSES TE');
    }
}

module.exports = new CourseController;