const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
}
