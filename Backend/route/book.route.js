// const express = require("express");
// const { getBook } = require("../controller/book.controller.js");
// const router = express.Router();

// router.get("/book-detail", getBook);
// export default router;
const express = require('express');
const { getBook } = require('../controller/book.controller.js');
const router = express.Router();

// Define the route
router.get("/book-detail", getBook);

// Export the router using CommonJS
module.exports = router;