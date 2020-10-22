import React from "react";
import "./button.scss";
const CostumButton = ({ children, isGoogleSignIn, ...props }) => (
  <button
    {...props}
    className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`}
  >
    {children}
  </button>
);
export default CostumButton;
