const Joi = require('joi');
const express = require('express');
const router = express.Router();
const logger = require('./middleware/logger');

router.get('/', (req, res) => {
    // console.log(res);
    res.render('index', {title: 'My Express App', message: 'Hello'});
});

module.exports = router;