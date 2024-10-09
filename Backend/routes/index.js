const express = require('express');

const contactsRouter = require('./contacts.js');

const router = express.Router();

router.use(contactsRouter);

module.exports = router;
