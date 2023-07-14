const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
  //   const loginData = await Gallery.findAll(
    res.render("homepage");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
    try {
      res.render("login", {});
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
