import { signOut } from "next-auth/react";

import styles from "@/styles/components/Nav.module.scss";

function NavBar({ user }: { user: string }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.user}>Logged in {user}</div>
      <div className={styles.logout} onClick={() => signOut()}>
        Logout
      </div>
    </nav>
  );
}

export default NavBar;
