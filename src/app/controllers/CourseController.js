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

    //GET /courses/:id/edit
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                title: 'Cập nhật khoá học',
                course: mongooseToObject(course),
            }))
            .catch(next);   
    }

    //PUT /courses/:id  /update
    update(req, res, next){
        Course.updateOne({_id:req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
        // res.json(req.body);
    }

    //DELETE /courses/:id  /delete
    destroy(req, res, next){
        Course.deleteOne({_id:req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CourseController();