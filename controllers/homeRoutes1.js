const router = require("express").Router();
const { Technique, Style, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
      const styleData = await Style.findAll({})
  const styles = styleData.map(style => style.get({plain: true }))
  console.log(req.session.logged_in);
      res.render("homepage", {
        styles,
        logged_in: req.session.logged_in
      });
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get("/login", async (req, res) => {
  console.log("hit login route")
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  } 

  res.render('login');
// try {
//       res.render("login");
//     } catch (err) {
//       res.status(500).json(err);
//     }
  
  });

router.get("/normal", async (req, res) => {
  res.render("normal")
})
router.get("/fakie", async (req, res) => {
  res.render("fakie")
})
router.get("/switch", async (req, res) => {
  res.render("switch")
})
router.get("/nollie", async (req, res) => {
  res.render("nollie")
})

module.exports = router;
