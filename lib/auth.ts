const bcrypt = require("bcrypt"); //does require work?

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 12);

  return hashedPassword;
}

// API CALLS
export async function createUser(username: string, password: string) {
  return fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((res) => res.json());
}
