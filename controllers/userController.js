import User from "../models/userModel.js";
import validateUser from "../utils/utils.js";

//adding user
const addUser = async (req, res) => {
  try {
    console.log("controller");
    const user = req.body;

    //validating user details
    const validationResult = validateUser(user);

    if (!validationResult.valid) {
      return res.status(400).json({ errors: validationResult.errors });
    }

    //checking if the user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ status: false, message: "user already exist" });
    } else {
      const newUser = new User(user);

      await newUser.save();
      res
        .status(201)
        .json({ status: true, message: "User added successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Error creating user" });
  }
};

export { addUser };
