import AuthForm from "@/components/AuthForm";
// import { connnectToDb } from "@/lib/db"

async function SignIn() {
  // await connect();

  return (
    <main className="container flex flex_column flex_center">
      <AuthForm formType={"sign_in"} submitHandler={handleSubmit} />
    </main>
  );
}

async function handleSubmit() {
  "use server";
  console.log("🟥");

  // const message = new Promise(() =>
  //   setTimeout(() => {
  //     console.log("🟥");
  //   }, 500)
  // );

  // return await message.then((res) => res);
}

// async function connect() {
//   const client = await connnectToDb().then((res) =>
//     console.log("🟢 connect res", res)
//   );

//   return client;
// }

export default SignIn;
