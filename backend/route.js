const express = require('express');
const { postmethod, getmethod } = require('./Taskmodule/Control');
const router = express.Router();

router.post("/api/count", postmethod);
router.get("/api/get", getmethod);

module.exports = router;
