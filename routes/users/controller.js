const { User } = require('../../models');

module.exports = {
  userRegistration: (req, res) => {
    userData = {
      user_name: req.body.user_name,
      user_email: req.body.user_email,
      user_password: req.body.user_password
    };

    User.create(userData).then(user => {
      // console.log(user);
      res.send('Registration success');
    });
  }
};
