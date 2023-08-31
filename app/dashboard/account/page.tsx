import { connnectToDb } from "@/lib/db";
import styles from "@/styles/pages/Account.module.scss";
import { getServerSession } from "next-auth";

async function Account() {
  const session = await getServerSession().then((res) => res);

  const getTime = async () => {
    "use server";

    const client = await connnectToDb();

    const db = client?.db();
    const usersCollection = db?.collection("users");

    const user = await usersCollection?.findOne({
      username: session?.user?.name,
    });

    console.log("✅ user", user);

    if (!user) {
      throw new Error("auth check wrong");
    }

    return user.time;
  };

  const time = await getTime().catch();

  return (
    <main className="container container_nav flex flex_column flex_center">
      <ul className={`flex flex_row ${styles.info}`}>
        <li className={`flex flex_column ${styles.info_item}`}>
          <div className={styles.label}>User</div>
          <div className={styles.value}>{session?.user?.name}</div>
        </li>
        <li className={`flex flex_column ${styles.info_item}`}>
          <div className={styles.label}>Time in session</div>
          <div className={styles.value}>{time} minutes</div>
          {/* <div className={styles.value}>200 minutes</div> */}
        </li>
      </ul>
    </main>
  );
}

export default Account;
