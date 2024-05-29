const bcrypt = require("bcrypt");
const User = require("./models/user.js");
const mongoose = require("mongoose");

exports.signup = async (req, res) => {
  const { userId, password } = req.body;
  try {
    
     const existingUser = await User.findOne({ userId });
     if (existingUser) {
       return res.status(400).json({ error: 'User already exists' });
     }
 
     const hashedPassword = await bcrypt.hash(password, 10);
     const newUser = new User({
        userId,
        password: hashedPassword
      });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.login = async (req, res) => {
  const { userId, password } = req.body;
  try {

    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(401).json({ error: 'Invalid userId or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid userId or password' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
