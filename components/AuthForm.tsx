"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import Button from "@/components/Button";

import classes from "@/styles/components/AuthForm.module.scss";

function AuthForm({ formType }: { formType: "signin" | "signup" }) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
        confirmPassword: confirmPasswordRef?.current?.value,
      }),
    }).then((res) => res.json());

    // console.log("🏓 res", res);

    if (res.status !== 200) {
      alert(res.message);
      return;
    }

    if (res.status === 200 && formType === "signup") {
      router.push("/auth/signin");
    }
  };

  const handleSignin = async () => {
    // console.log("🎃 handleSignin");

    if (usernameRef.current && passwordRef.current) {
      await signIn("credentials", {
        redirect: false,
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      }).then((res) => {
        // console.log("res", res);
        if (res?.ok) {
          router.push("/");
        } else {
          console.log("ERROR");
        }
      });
    }
  };

  return (
    <div className={classes.form_wrapper}>
      <form className={classes.login_form}>
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
        {formType === "signup" ? (
          <div className={classes.input_wrapper}>
            <label htmlFor="" className={classes.form_label}>
              Confirm Password
            </label>
            <input
              type="password"
              ref={confirmPasswordRef}
              className={classes.form_input}
            />
          </div>
        ) : null}

        <div className={`flex ${classes.button_wrapper}`}>
          <Button
            text={formType === "signin" ? "Login" : "Create"}
            url={""}
            onClick={formType === "signin" ? handleSignin : handleSignup}
            justifyContent="flex-start"
            type="submit"
          />
          {formType !== "signup" ? (
            <Button
              text={"Create Account"}
              onClick={null}
              url={"/auth/signup"}
              justifyContent="flex-end"
              type="button"
            />
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
