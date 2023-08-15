"use client";

import React, { useRef } from "react";
import classes from "@/styles/components/LoginForm.module.scss";
import Button from "@/components/Button";

function LoginForm({ checkAuth }: { checkAuth: any }) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log("Login 🎃");

    if (passwordRef.current && usernameRef.current) {
      const password = passwordRef.current.value;
      const username = usernameRef.current.value;

      checkAuth({ password, username });
      passwordRef.current.value = "";
      usernameRef.current.value = "";
    }
  };

  return (
    <div className={classes.form_wrapper}>
      <form className={classes.login_form} onSubmit={(e) => handleLogin(e)}>
        <div className={classes.input_wrapper}>
          <label htmlFor="" className={classes.form_label}>
            Username
          </label>
          <input type="text" ref={usernameRef} className={classes.form_input} />
        </div>
        <div className={classes.input_wrapper}>
          <label htmlFor="" className={classes.form_label}>
            Password
          </label>
          <input
            type="password"
            ref={passwordRef}
            className={classes.form_input}
          />
        </div>
        <div className="flex">
          <Button
            text={"Login"}
            onClick={null}
            url={""}
            justifyContent="flex-start"
          />
          <Button
            text={"Create Account"}
            onClick={null}
            url={""}
            justifyContent="flex-end"
          />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
