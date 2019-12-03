const router = require('express').Router();

router.post('/register', require('./controller').userRegistration);

module.exports = router;
