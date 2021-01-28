const debug = require('debug')('app:startup');
const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

const territories = require('./routes/territories');
const home = require('./routes/home');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(helmet());
app.use('/api/territories', territories);
app.use('/', home);

if (app.get('env')==='development'){
    console.log('In Dev Mode.');
    app.use(morgan('tiny'));
    debug('Morgan enabled.');
}
app.use(logger);

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log('Listening on port 3000'));