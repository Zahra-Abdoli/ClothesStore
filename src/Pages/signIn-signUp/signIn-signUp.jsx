import React from "react";
import "./signIn-signUp.scss";
import { SignIn } from "../../Components/Sing-in/sign-in";
import SignUp from "../../Components/sign-up/sign-up";
const SignInAndSignUP = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);
export default SignInAndSignUP;
