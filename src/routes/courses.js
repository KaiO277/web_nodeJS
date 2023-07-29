const express = require('express');
const route = express.Router();

const courseController = require('../app/controllers/CourseController');

route.use('/create', courseController.create)
route.use('/:slug', courseController.show)

module.exports = route;