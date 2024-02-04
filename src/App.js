import React from "react";

import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

const handleFacebookLogin = async (response) => {
  try {
    console.log("Response: ", response);
  } catch (error) {
    console.log("error: ", error);
  }
};

const FacebookAuthComponent = () => {
  return (
    <LoginSocialFacebook
      appId="Your App Id"
      onResolve={handleFacebookLogin}
      onReject={(error) => {
        console.log("Facebook login failed:", error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
};

export default FacebookAuthComponent;
