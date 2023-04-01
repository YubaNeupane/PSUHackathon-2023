import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../../models/user.js";
import passwordResetTokenModal from "../../models/passwordResetToken.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    let isUsername = false;

    //check to see if user input a email
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      isUsername = true;
    }

    //check to see if the user exists in the database
    let databaseUser = null;
    if (isUsername) {
      databaseUser = await UserModal.findOne({ userName: email });
      if (!databaseUser)
        return res
          .status(400)
          .json({ error: "Can not find a user with that username" });
    } else {
      databaseUser = await UserModal.findOne({ email: email });
      if (!databaseUser)
        return res
          .status(400)
          .json({ error: "Can not find a user with that email" });
    }

    //check to see if the password is correct
    const isPasswordCorrect = await bcrypt.compare(
      password,
      databaseUser.password
    );
    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    //create the token
    const token = jwt.sign(
      {
        email: databaseUser.email,
        id: databaseUser._id,
        userName: databaseUser.userName,
      },
      process.env.JWT_SECRET_KEY
    );
    return res.status(200).json({ result: databaseUser, token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { firstName, lastName, email, userName, password, confirmPassword } =
    req.body;

  try {
    //invalid email
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      return res.status(400).json({ error: "Invalid email fomat" });

    //check to see if the password match the confirm password
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords do not match" });

    //checks for the length of the password
    if (password.length < 8)
      return res.status(400).json({ error: "Too short of a password" });

    //check if user already exists
    let user = await UserModal.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ error: "User already exists with that email" });
    user = await UserModal.findOne({ userName });
    if (user)
      return res
        .status(400)
        .json({ error: "User already exists with that username" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModal.create({
      name: `${firstName} ${lastName}`,
      userName: userName,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id, userName: userName },
      process.env.JWT_SECRET_KEY
    );
    return res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getSignedInUser = async (req, res) => {
  try {
    //get the user from the database using the id
    const user = await UserModal.findById(req.body.id);

    //send the current user client
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    //get the user from the database using the parm passed in in the url
    const user = await UserModal.findById(req.params.id);

    //send the user user client
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const passwordResetLinkSender = async (req, res) => {
  const { email } = req.body;
  try {
    //invalid email
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      return res.status(400).json({ error: "Invalid email formate" });

    const user = await UserModal.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ error: "User with given email doesn't exist" });

    let token = await passwordResetTokenModal.findOne({
      userId: user._id,
    });
    if (!token) {
      token = await passwordResetTokenModal.create({
        userId: user._id,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY),
      });
    }

    const link = process.env.RESET_LINK_BASE_URL + `${user._id}/${token.token}`;
    const didSend = await sendEmail(email, "Password reset", link, user.name);
    if (didSend) {
      return res.status(200).json({
        message: "Password reset link sent to your email account",
      });
    } else {
      return res.status(400).json({
        message: "Something went wrong. Reset email link was not sent.",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const passwordResetter = async (req, res) => {
  try {
    const user = await UserModal.findById(req.params.userId);
    if (!user)
      return res.status(400).json({ error: "Invalid link or expired token" });

    const token = await passwordResetTokenModal.findOne({
      userId: user._id.toString(),
      token: req.params.token,
    });
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Passwords do not match" });

    if (password.length < 8)
      return res.status(400).json({ error: "Too short of a password" });

    if (!token)
      return res.status(400).json({ error: "Invalid link or expired" });
    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    await user.save();
    await token.delete();

    return res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const uodateCurrentUser = async (req, res) => {
  try {
    const user = await UserModal.findById(req.body.id);

    const updatedUser = await user.update();

    return res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};
