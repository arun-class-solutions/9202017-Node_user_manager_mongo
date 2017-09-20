const User = require("../../../models/user");

module.exports = (req, res) => {
  User
  .find({})
  .then((users) => {
    res.status(200).json(users);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
}
