"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import classes from "@/styles/components/AuthForm.module.scss";
import Button from "@/components/Button";

function AuthForm({
  fetchUrl,
  formType,
}: {
  fetchUrl: string;
  formType: "sign_in" | "sign_up";
}) {
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(fetchUrl, {
      method: "POST",
      body: JSON.stringify({
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      }),
    }).then((res) => res.json());

    console.log("🏓 res", res);

    if (res.status !== 200) {
      alert(res.message);
      return;
    }

    if (res.status === 200 && formType === "sign_up") {
      router.push("/auth/sign_in"); // consider redirect from server action
    }
  };

  return (
    <div className={classes.form_wrapper}>
      <form className={classes.login_form} onSubmit={(e) => handleSubmit(e)}>
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
        {formType === "sign_up" ? (
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
            text={formType === "sign_in" ? "Login" : "Create"}
            onClick={null}
            url={""}
            justifyContent="flex-start"
            type="submit"
          />
          {formType !== "sign_up" ? (
            <Button
              text={"Create Account"}
              onClick={() => router.push("/auth/sign_up")}
              url={""}
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
