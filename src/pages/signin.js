import React from "react";
import SignIn from "../components/Signin";
import ScrollToTop from "../components/Signin/ScrollToTop";

const SigninPage = () => {
  return (
    <div>
      <ScrollToTop />
      <SignIn />
    </div>
  );
};

export default SigninPage;
