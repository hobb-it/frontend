import React, { useState } from "react";
import {
  useGoogleLogin,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import LoginButton from "./LoginButton";

interface Props {
  flow: string;
}

function LoginForm({ flow }: Props) {
  const [error, setError] = useState("");
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const backendUrl = "http://localhost:8080";

  const codeLogin = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      let auth = credentialResponse.code;
      // console.log(`Auth code: ${auth}`);

      exchangeAuthCode(auth).then((data) => {
        window.localStorage.setItem("access_token", data.access_token);
        window.localStorage.setItem("id_token", data.id_token);
        window.localStorage.setItem("refresh_token", data.refresh_token);
        window.localStorage.setItem("email", data.email);
        window.localStorage.setItem("username", data.username);
        window.localStorage.setItem("name", data.name);
        window.localStorage.setItem("surname", data.surname);
        window.location.href = "http://localhost:3000/dashboard";
      });
    },
    flow: "auth-code",
    scope:
      "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
    ux_mode: "popup",
  });

  const exchangeAuthCode = async (authCode: String) => {
    try {
      const url = `${backendUrl}/oauth2/exchange-code?code=${authCode}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Requested-With": "XmlHttpRequest",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Network response was not ok`);
      }
      return await response.json();
    } catch (error: any) {
      setError(error.message);
      return [];
    }
  };

  const implicitLogin = (credentialResponse: CredentialResponse) => {
    let token = credentialResponse.credential || "";
    window.localStorage.setItem("id_token", token);
    window.location.href = "http://localhost:3000/dashboard";
  };

  return (
    <div className="row justify-content-center">
      <div className="col-auto">
        {flow === "auth-code" && (
          <LoginButton
            onClick={() => codeLogin()}
            text={"Sign in with Google 🚀"}
          ></LoginButton>
        )}
        {flow === "implicit" && (
          <GoogleLogin onSuccess={implicitLogin}></GoogleLogin>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
