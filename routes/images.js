const express = require('express');
const router = express.Router();

router.get('/APOD', (req, res, next) => {
    res.send("DEFAULT RESPONSE");
})

module.exports = router;