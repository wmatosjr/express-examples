const Joi = require('joi');
const express = require('express');
const router = express.Router();
const logger = require('./middleware/logger');

const territories = [
    {id: 1, name: 'Territory 1', publisher: 1, group: 1},
    {id: 2, name: 'Territory 2', publisher: 2, group: 2},
    {id: 3, name: 'Territory 3', publisher: 3, group: 2}
];

router.get('/', (req, res) =>{
    res.send(territories);
});

router.post('/', (req, res)=>{
    const {error} = validateTerritory(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const territory = {
        id: territories.length + 1,
        name: req.body.name
    };

    territories.push(territory);
    res.send(territory);
});

router.put('/:id', (req, res) =>{
    const territory = territories.find(t=> t.id === parseInt(req.params.id));
    if (!territory) return res.status(404).send('The territory with given id not found!');

    course.name = req.body.name;
    res.send(territory);
});

router.delete('/:id', (req, res) => {
    const territory = territories.find(t=> t.id === parseInt(req.params.id));
    if (!territory){return res.status(404).send('The territory with the given id not found.')};

    res.send(territory);
});

function validateTerritory(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
}

module.exports = router;