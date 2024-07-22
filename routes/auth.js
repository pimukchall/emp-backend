const express = require('express');
const router = express.Router();

const { login, refresh, logout, register, updatepassword } = require('../controller/auth.js');

router.post('/login', login);
router.get('/refresh', refresh);
router.delete('/logout', logout);
router.post('/register', register);
router.post('/updatepassword', updatepassword);

module.exports = router;

