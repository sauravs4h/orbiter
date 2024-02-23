const { Usermodel } = require("../models/User.model");

const signUp = async (req, res) => {
  const { firstName, lastName, userName, email, mobile_no, password } =
    req.body;

  try {
    let userAvailable = await Usermodel.findOne({ email });

    if (userAvailable) {
      res.status(401).json({ message: "user already available" });
    } else {
      bcrypt.hash(myPlaintextPassword, saltRounds, async function (err, hash) {
        if (err) {
          res.status(500).json({ message: err });
          return;
        }
        const payload = {
          firstName,
          lastName,
          userName,
          email,
          mobile_no,
          password,
        };

        const newUser = new Usermodel(payload);
        await newUser.save();

        res.status.json({ message: "signup successfull" });
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userAvailable = await Usermodel.findOne({ email });

    if (userAvailable) {
      const hashPassword = userAvailable.password;

      bcrypt.compare(password, hashPassword, function (err, result) {
        if (err) {
          res.status(500).json({ message: err });
        }
        if (result) {
          var token = jwt.sign({ foo: "bar" }, "shhhhh");
          res.status(200).json({ msg: "Login Successfull ", token: token });
        } else {
            res.status(401).json({msg:"Wrong craditionals"})
        }
      });
    } else {
      res.status(401).json({ message: "Please signup first" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { signUp, logIn };
