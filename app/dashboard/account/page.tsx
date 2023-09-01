import { connnectToDb } from "@/lib/db";
import styles from "@/styles/pages/Account.module.scss";
import { getServerSession } from "next-auth";

const getTime = async (user: any) => {
  // "use server";

  const client = await connnectToDb();

  const db = client?.db();
  const usersCollection = db?.collection("users");

  const _user = await usersCollection?.findOne({
    username: user,
  });

  console.log("✅ user", user);

  if (!_user) {
    throw new Error("auth check wrong");
  }

  return _user.time;
};

async function Account() {
  const session = await getServerSession().then((res) => res);

  const time = await getTime(session?.user?.name).catch();

  return (
    <main className="container container_nav flex flex_column flex_center">
      <ul className={`flex flex_row ${styles.info}`}>
        <li className={`flex flex_column ${styles.info_item}`}>
          <div className={styles.label}>User</div>
          <div className={styles.value}>{session?.user?.name}</div>
        </li>
        <li className={`flex flex_column ${styles.info_item}`}>
          <div className={styles.label}>Time in session</div>
          <div className={styles.value}>{!time ? 0 : time} minutes</div>
          {/* <div className={styles.value}>200 minutes</div> */}
        </li>
      </ul>
    </main>
  );
}

export default Account;
