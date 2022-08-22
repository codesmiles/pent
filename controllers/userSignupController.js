const bcrypt = require("bcrypt");
const validator = require("validator");
const User = require("../models/user.model");


const errorDey = (err) => {
  if (err) {
    console.log(`error: ${err}`);
  }
};

module.exports.signUp = async (req, res) => {
  try {
    
    let { fullName, email, password} =
      await req.body;

    if (validator.isEmail(email) && validator.isStrongPassword(password)) {
    
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        res.json({
          message: `Email already exist`,
          statusCode: 400,
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);

        const newUser = new User({
          fullName,
          email,
          password,
        });

        newUser.save((err, data) => {
          errorDey(err);
          res.json({
            successful: true,
            data,
          });
        });
      }
    } else {
      if (!validator.isEmail(email)) {
        res.json({
          successful: false,
          message: `Email is not valid`,
        });
      }
      if (!validator.isStrongPassword(password)) {
        res.json({
          successful: false,
          message: `Password requires at least 8 characters, one number and one special character`,
        });
      }
    }
  } catch (err) {
    errorDey(err);
  }
};