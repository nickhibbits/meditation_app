"use client";

import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import styles from "@/styles/components/Nav.module.scss";

function NavBar({ user }: { user: any }) {
  const handleSignOut = () => {
    signOut();
    redirect("/");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.user}>{user}</div>
      <div className={styles.logout} onClick={() => handleSignOut()}>
        logout
      </div>
    </nav>
  );
}

export default NavBar;
