import HobbyCard from "../components/HobbyCard";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import DashboardSearchbar from "../components/DashboardSearchbar";
import { isUserLoggedIn } from "../utils/session";

function DashboardPage() {
  const [hobbyCards, setHobbyCards] = useState([""]);
  const [error, setError] = useState(null);
  // const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const backendUrl = "http://localhost:8080";

  const getHobbyCards = async () => {
    try {
      const response = await fetch(`${backendUrl}/api/hobbycard/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("id_token")}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const _hobbyCards = await response.json();
      return _hobbyCards;
    } catch (error: any) {
      setError(error.message);
      return [];
    }
  };

  useEffect(() => {
    getHobbyCards().then((data) => {
      setHobbyCards(data);
    });
  }, []);

  if (!isUserLoggedIn()) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <h1 className="col-auto">Dashboard</h1>
      </div>
      <div className="row justify-content-center">
        <p className="col-auto">
          Qui puoi visualizzare le proposte di insegnamento degli altri utenti.
        </p>
      </div>
      <div className="container">
        {
          <DashboardSearchbar
            setHobbyCards={setHobbyCards}
            setError={setError}
          />
        }
        <div id="hobbyCardContainer">
          {error && <p>Error: {error}</p>}
          {hobbyCards.map((hobbyCard: any, index) => (
            <div key={index} className="container">
              <HobbyCard hobbyCard={hobbyCard} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
