const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(error => res.status(400).json(`Error: ${error}`))
});

router.route('/create').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ username, email, password });

  newUser.save()
  .then(users => res.json('User added'))
  .catch(error => res.status(400).json(`Error: ${error}`))
});

module.exports = router;
 