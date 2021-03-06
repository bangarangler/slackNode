const HttpError = require("../models/http-error");
const User = require("../models/users");

const SlackBot = require("slackbots");

const sayHi = async (req, res, next) => {
  // let users;
  try {
    const bot = new SlackBot({
      token: `${process.env.BOT_TOKEN}`,
      name: "pluaris_bot",
    });

    bot.on("start", () => {
      const params = {
        icon_emoji: ":robot_face:",
      };

      bot.postMessageToChannel(
        "random",
        "Get inspired while working with @inspirenuggets",
        params
      );
    });
    // users = await User.find({}, "-password");
    // next();
    console.log("try block");
  } catch (err) {
    const error = new HttpError("Can not get users", 500);
    return next(error);
  }

  return res.json({ message: "Hello Slack", status: 200 });
};

// const signup = async (req, res, next) => { const errors = false;
//   // if (!errors.isEmpty()) {
//   if (false) {
//     return next(
//       new HttpError("Invalid inputs passed, please check your data.", 422)
//     );
//   }
//   const { name, email, password } = req.body;
//
//   let existingUser;
//   try {
//     existingUser = await User.findOne({ email: email });
//   } catch (err) {
//     console.log("err", err);
//     const error = new HttpError("Signing up failed", 500);
//     return next(error);
//   }
//
//   if (existingUser) {
//     const error = new HttpError("User already exists", 422);
//     return next(error);
//   }
//
//   let hashedPassword;
//   try {
//     hashedPassword = await bcrypt.hash(password, 12);
//   } catch (err) {
//     const error = new HttpError("Could not create user", 500);
//     return next(error);
//   }
//
//   const createdUser = new User({
//     name,
//     email,
//     password: hashedPassword,
//   });
//
//   try {
//     await createdUser.save();
//   } catch (err) {
//     const error = new HttpError("Creating user failed", 500);
//     return next(error);
//   }
//
//   let token;
//   try {
//     token = jwt.sign(
//       { userId: createdUser.id, email: createdUser.email },
//       process.env.JWT_KEY,
//       { expiresIn: "24h" }
//     );
//   } catch (err) {
//     const error = new HttpError("Signing up failed", 500);
//     return next(error);
//   }
//
//   res
//     .status(201)
//     .json({ userId: createdUser.id, email: createdUser.email, token: token });
// };
//
// const login = async (req, res, next) => {
//   const { email, password } = req.body;
//
//   try {
//     existingUser = await User.findOne({ email: email });
//   } catch (err) {
//     const error = new HttpError("login failed", 500);
//     return next(error);
//   }
//
//   if (!existingUser) {
//     const error = new HttpError("Invalid creds", 403);
//     return next(error);
//   }
//
//   let isValidPassword = false;
//   try {
//     isValidPassword = await bcrypt.compare(password, existingUser.password);
//   } catch (err) {
//     const error = new HttpError("could not log you in", 500);
//     return next(error);
//   }
//
//   if (!isValidPassword) {
//     const error = new HttpError("Invalid credentials", 403);
//     return next(error);
//   }
//
//   let token;
//   try {
//     token = jwt.sign(
//       { userId: existingUser.id, email: existingUser.email },
//       process.env.JWT_KEY,
//       { expiresIn: "1h" }
//     );
//   } catch (err) {
//     const error = new HttpError("Login failed", 500);
//     return next(error);
//   }
//
//   res.json({
//     userId: existingUser.id,
//     email: existingUser.email,
//     token: token,
//   });
// };

exports.sayHi = sayHi;
// exports.signup = signup;
// exports.login = login;
