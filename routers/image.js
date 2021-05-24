const { Router } = require("express");
const router = new Router();
const { image } = require("../models");

router.post("/", async (req, res, next) => {
  try {
    const { title, url } = req.body;
    if (!title || !url) {
      res.status(400).send("missing parameters");
    } else {
      const newImage = await image.create({ title, url });
      res.json(newImage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/", async (request, res, next) => {
  try {
    const allImages = await image.findAll();

    res.send(allImages);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
// https://viralviralvideos.com/wp-content/uploads/GIF/2015/06/Yes-I-did-it-GIF_3.gif