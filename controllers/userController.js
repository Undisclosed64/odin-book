const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.createUser = function (req, res) {
  let user = new User({
    firstname: req.body.firstname,
    surname: req.body.surname,
    email: req.body.email,
    password: req.body.password,
  });

  //secure the password
  bcrypt.hash(user.password, 10, (err, securedPassword) => {
    if (err) {
      res.json(err);
    }
    //define user with hashed password
    user = new User({
      firstname: req.body.firstname,
      surname: req.body.surname,
      email: req.body.email,
      password: securedPassword,
      _id: user._id,
    });

    //save the user
    user.save((err, createdUser) => {
      if (err) {
        res.status(500).json(err);
      }
      res.status(201).json({ createdUser });
    });
  });
};
