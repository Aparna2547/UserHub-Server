import express from "express";
import {addUser} from "../controllers/userController.js"

const router = express.Router();

// router.get('/dashboard')
router.post('/addUser',addUser)


export default router