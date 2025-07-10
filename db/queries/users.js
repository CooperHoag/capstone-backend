import db from "#db/client";
import bcrypt from "bcrypt";

// filepath: /Users/hoagie/Desktop/coursework/CapStone/capstone-backend/db/queries/users.js
export async function createUser(firstName, lastName, email, username, password, bio, profileImageUrl) {
  if (!password) {
    throw new Error("Password is required to create a user.");
  }
  const sql = `
  INSERT INTO users
    (first_name, last_name, email, username, password, bio, profile_image_url)
  VALUES
    ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *
  `;
  const hashedPassword = await bcrypt.hash(password, 10);
  const {
    rows: [user],
  } = await db.query(sql, [firstName, lastName, email, username, hashedPassword, bio, profileImageUrl]);
  return user;
}

export async function getUserByUsernameAndPassword(username, password) {
  const sql = `
  SELECT *
  FROM users
  WHERE username = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [username]);
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return user;
}

export async function getUserById(id) {
  const sql = `
  SELECT *
  FROM users
  WHERE id = $1
  `;
  const {
    rows: [user],
  } = await db.query(sql, [id]);
  return user;
}
