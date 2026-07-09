const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");

router.get("/", mainController.index);

const travelController = require("../controllers/travel");

router.get("/travel", travelController.list);

module.exports = router;
