const express  = require('express');
const axios = require('axios');
const router = express.Router();
const card = require('./card.js');
const form = require('./format.js');
const emptyformat = form;
var format;
router.get('/', (req, res, next) => {
    format = emptyformat;
    res.json(format);
   
})
router.get('/start', (req, res, next) => {
    format = card.init(emptyformat);
    res.json(format);
   
})
router.put('/divide6', (req, res, next) => {
    format = req.body;
    res.json(card.handout(format, 6));

});
router.put('/divide8', (req, res, next) => {
    format = req.body;
    res.json(card.handout(format, 8));

});
router.put('/raise', (req, res, next) => {
    format = req.body;
    let player = parseInt(req.query.player);
    res.json(card.checkpower(format, player));
});
router.put('/acquire', (req, res, next) => {
    format = req.body;
    res.json(card.take(format));
});


//card.init(format);
//card.handout(format,6);
//console.log(card.handout(format,8));
module.exports = router;
