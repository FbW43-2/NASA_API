const express = require('express');
const router = express.Router();

const { getAPODImage } = require('../controllers/imagesController');

router.get('/APOD', getAPODImage)

module.exports = router;