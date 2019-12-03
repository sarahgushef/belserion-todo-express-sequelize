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
  },
  userLogin: (req, res) => {
    userData = {
      user_email: req.body.user_email,
      user_password: req.body.user_password
    };

    User.findOne({ where: userData })
      .then(user => {
        console.log(user);

        const { user_name, user_email } = user.dataValues;
        res.status(200).send({
          message: 'user found',
          data: {
            user_name,
            user_email
          }
        });
      })
      .catch(error => res.send(error));
  }
};
