const jwt = require("jsonwebtoken");

const errorDey = (err) => {
    if (err) {
      console.log(`error: ${err}`);
    }
  };

const check = (req, res, next) => {


  if (req.headers.authorization) {
    if (req.headers.authorization.split(" ")[0] === "Bearer") {
      const token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        errorDey(err);
        if (payload) {
            req.user = payload; // payload is the user object EMPHASIS ON THE USER OBJECT
            next();
        }
        next();
      });
    }
  } else {
    res.json({
        successful: false,
        
    })
  }
};

module.exports = check;