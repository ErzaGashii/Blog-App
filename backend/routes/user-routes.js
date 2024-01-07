const express = require("express");
const model = require('../model/User');
const { getAllUser,signup } = require("../controllers/user-controller");


const router = express.Router();

router.get("/", getAllUser);
router.post("/signup", signup);

// Instead of export default router;
module.exports = router;
