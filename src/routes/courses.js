const express = require('express');
const route = express.Router();


const courseController = require('../app/controllers/CourseController');


route.get('/create', courseController.create);
route.put('/:id', courseController.update);
route.delete('/:id', courseController.destroy);
route.post('/store', courseController.store);
route.get('/:id/edit', courseController.edit);
route.get('/:slug', courseController.show);

module.exports = route;