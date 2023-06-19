const bcrypt = require("bcrypt");
const {User} = require("../models/User");
const genAuthToken = require("../util/AuthToken");


/* REGISTER USER */

exports.register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation
    } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(password,salt);

    const newUser = new User ({
        firstName,
        lastName,
        email,
        password: passHash,
        picturePath,
        friends,
        location,
        occupation,
        viewedProfile: Math.floor(Math.random() * 10000),
        impressions: Math.florr(Math.random() * 10000)
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({error: err.message})
  }
};


exports.login = async (req,res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email:email});
    if(!user) return res.status(400).json({msg: "User does not exist."});
    const isMatched = await bcrypt.compare(password, user.password);
    if(!isMatched) return res.status(400).json({msg: "Invalid credentials."});
    const token = genAuthToken(user);
    delete user.password;
    res.status(200).json({token, user});
  }
  catch (err) {
    res.status(500).json({error: err.message})
  }
}