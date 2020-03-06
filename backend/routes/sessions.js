const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  return res.json('nothing here yet');
});

router.route('/new').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email })
  .then(users => {
    const foundUser = users.length ? users[0] : {};
    if (foundUser.password === password) {
      return res.json(foundUser);
    } else {
      return res.json('Invalid Login')
    }
  })
  .catch(error => res.status(400).json(`${error}`));
});

module.exports = router;
