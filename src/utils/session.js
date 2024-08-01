const backendUrl = process.env.REACT_APP_BACKEND_URL
  ? process.env.REACT_APP_BACKEND_URL
  : "http://localhost:8080";

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

const refreshAccessToken = async () => {
  try {
    let refreshToken = window.localStorage.getItem("refresh_token");
    const url = `${backendUrl}/oauth2/refresh?token=${refreshToken}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "http://localhost:3000",
      },
    });
    console.log(response);
    if (!response.ok) {
      throw new Error(`Network response was not ok`);
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const setTimeoutForRefreshAccessToken = (seconds) => {
  setTimeout(() => {
    if (!isUserLoggedIn()) {
      return;
    }
    refreshAccessToken().then((newToken) => {
      if (newToken.length === 0) {
        return;
      }
      window.localStorage.setItem("access_token", newToken.access_token);
      console.log("Token refreshato");
      setTimeoutForRefreshAccessToken(+newToken.expires_in - 30);
    });
  }, seconds * 1000);
};

export { isUserLoggedIn, setTimeoutForRefreshAccessToken };
