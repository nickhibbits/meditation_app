export async function handleCheckAuth({
  username,
  password,
}: {
  username: string | null;
  password: string | null;
}) {
  "use server";
  return { username, password };
}
