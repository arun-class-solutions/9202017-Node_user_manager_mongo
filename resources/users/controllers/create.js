const User = require("../../../models/user");

module.exports = (req, res) => {
  const newUser = new User(req.body.user);

  newUser
  .save()
  .then((newUserRecord) => {
    res
    .status(201)
    .json(newUserRecord);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
}
