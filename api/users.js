import express from "express";
const router = express.Router();

router.use(express.json())

import { createUser, getUserByUsernameAndPassword, getUserById } from "#db/queries/users";
import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";
import { createToken } from "#utils/jwt";

router
.route("/register")
.post(requireBody([
  "firstName", 
  "lastName", 
  "email", 
  "username", 
  "password"
]), 
async (req, res) => {
  const { 
    firstName, 
    lastName, 
    email, 
    username, 
    password, 
    bio, 
    profileImageUrl,
  } = req.body;
  const user = await createUser(
    firstName, 
    lastName, 
    email, 
    username, 
    password, 
    bio, 
    profileImageUrl
  );
  
  const token = createToken({ id: user.id });
  res.status(201).json(token);
});

router
.route("/login")
.post(requireBody(["username", "password"]), async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsernameAndPassword(username, password);
  if (!user) return res.status(401).send("Invalid username or password.");
  
  const token = createToken({ id: user.id });
  res.json(token);
});

router
.route("/me")
.get(requireUser, async (req, res, next) => {
  try {
    console.log(req.user);
    const user = await getUserById(req.user.id);
    res.json({ id: user.id, first_name: user.first_name });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
);

export default router;