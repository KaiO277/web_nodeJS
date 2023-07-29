const express = require('express');
const route = express.Router();


const courseController = require('../app/controllers/CourseController');

route.post('/store', courseController.store);
route.get('/create', courseController.create);

route.get('/:slug', courseController.show);

module.exports = route;