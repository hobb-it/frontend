import React from "react";
import { useCookies } from "react-cookie";

interface Props {
  className?: string;
}

function LogoutButton({ className }: Props) {
  const deleteTokens = () => {
    window.localStorage.removeItem("id_token");
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("name");
    window.localStorage.removeItem("surname");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <button onClick={deleteTokens} className={className}>
      Logout
    </button>
  );
}

export default LogoutButton;
