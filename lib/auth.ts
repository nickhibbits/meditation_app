const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  bcrypt.hash(password, 12);
}
