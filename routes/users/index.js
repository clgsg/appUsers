const router = require('express').Router();

const deleteAccount = require("./deleteAccount");
const login = require("./login");
const signup = require("./signup");
const updateUser = require("./updateUser");

router.get('/delete', deleteAccount);
router.get("/login", login);
router.get("/signup", signup);
router.get("/update", updateUser);

module.exports=router;