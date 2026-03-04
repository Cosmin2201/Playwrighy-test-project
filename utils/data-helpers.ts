export async function getRandomNumber() {
  return Math.floor(Math.random() * 10000 + 1);
}
const crypto = require("crypto");

export async function getRandomString() {
  return crypto.randomBytes(20).toString("hex");
}
