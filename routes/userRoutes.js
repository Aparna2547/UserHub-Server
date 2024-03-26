import express from "express";
import {
  addUser,
  showUsers,
  showDepartments,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", showUsers);
router.post("/addUser", addUser);
router.get("/departments", showDepartments);

export default router;
