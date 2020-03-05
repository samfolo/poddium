const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  return res.json('nothing here yet');
});

router.route('/new').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.find({ email: email })
  .then(users => {
    const foundUser = users[0];
    if (foundUser.password === password) {
      return res.json(foundUser);
    } else {
      throw new Error('Invalid Password')
    }
  })
  .catch(error => res.status(400).json(`${error}`));
});

module.exports = router;
