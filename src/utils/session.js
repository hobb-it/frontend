const isUserLoggedIn = () => {
  return (
    window.localStorage.getItem("id_token") &&
    window.localStorage.getItem("access_token") &&
    window.localStorage.getItem("refresh_token") &&
    window.localStorage.getItem("email") &&
    window.localStorage.getItem("username") &&
    window.localStorage.getItem("name") &&
    window.localStorage.getItem("surname")
  );
};

export default isUserLoggedIn;