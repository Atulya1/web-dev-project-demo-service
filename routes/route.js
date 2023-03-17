import express from "express";
import {addUser, getUsers, editUser, deleteUser, getUserById} from '../controller/user-controller.js'
const router = express.Router();

router.post('/add', addUser)
router.get('/', getUsers)
router.put('/:id', editUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
export default router;