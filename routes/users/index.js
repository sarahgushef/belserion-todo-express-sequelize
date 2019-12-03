const router = require('express').Router();

router.post('/register', require('./controller').userRegistration);
router.post('/login', require('./controller').userLogin);

module.exports = router;
