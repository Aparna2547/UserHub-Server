import User from "../models/userModel.js";
import validateUser from "../utils/utils.js";
import Department from "../models/utilsModel.js";



//showing Users
const showUsers = async (req,res) =>{
  try {
    console.log('show users');
    const allUsers = await User.find({})
    console.log(allUsers)
    res.status(200).json(allUsers)
  } catch (error) {
    console.log(error);
  }
}

//get all departments
const showDepartments = async (req,res)=>{
  try {
    const allDepartments = await Department.find({})
    res.status(200).json(allDepartments)
  } catch (error) {
    console.log(error);
  }
}




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
    const existingUser = await User.findOne({ email:req.body.email });
    if (existingUser) {
      res.status(400).json({ status: false, message: "user already exist" });
    } else {

        //adding new department
        await Department.updateMany({},{$addToSet:{department:req.body.department}},{upsert:true})
        

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

export { addUser ,showUsers,showDepartments};
