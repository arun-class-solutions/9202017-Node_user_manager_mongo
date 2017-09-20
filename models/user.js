const mongoose = require("mongoose");

if (process.env.NODE_ENV === "test") {
  mongoose.connect("mongodb://localhost/user_manager_test");
} else {
  mongoose.connect("mongodb://localhost/user_manager");
}

const User = mongoose.model("User", {
  firstname: String,
  lastname: String,
  username: String,
  email: String
});

module.exports = User;
