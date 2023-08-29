"use client";

import { signOut } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

import styles from "@/styles/components/Nav.module.scss";

function NavBar({ user }: { user: any }) {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    redirect("/");
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_options_wrapper}>
        <li
          className={styles.user}
          onClick={() => router.push("/dashboard/account")}
        >
          {user}
        </li>
        <li className={styles.logout} onClick={() => handleSignOut()}>
          logout
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
