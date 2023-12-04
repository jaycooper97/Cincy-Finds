const express = require('express');
const {
    getAttractions,
    getAttraction,
    createAttraction,
    deleteAttraction,
    updateAttraction
} = require('../controller/attractionsController');


const router = express.Router();

//all attractions
router.get('/', getAttractions);

//single attraction
router.get('/')