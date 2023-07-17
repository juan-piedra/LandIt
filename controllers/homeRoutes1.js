const router = require("express").Router();
const { Technique, Style, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const styleData = await Style.findAll({})
const styles = styleData.map(style => style.get({plain: true }))
console.log(styles);
    res.render("homepage", {styles});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  } else {

  res.render('login');
// try {
//       res.render("login");
//     } catch (err) {
//       res.status(500).json(err);
//     }
  }
  });

module.exports = router;
