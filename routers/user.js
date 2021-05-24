const { Router } = require("express");
const router = new Router();
const { user } = require("../models");
const bcrypt = require('bcrypt');
router.post("/", async (req, res, next) => {
  try {
    const { email, password, fullName } = req.body;
    if (!email || !password || !fullName) {
      res.status(400).send("missing parameters");
    } else {
      const newUser = await user.create({
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
      });
      res.json(newUser);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/", async (request, res, next) => {
  try {
    const allUsers = await user.findAll();

    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
