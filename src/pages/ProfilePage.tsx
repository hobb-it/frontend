import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import HobbyCardComponent from "../components/HobbyCard";

interface HobbyCard {
  categoryName: string;
  description: string;
  username: string;
}

const ProfilePage = () => {
  const [hobbyCards, setHobbyCards] = useState<HobbyCard[]>([]); // All HobbyCard
  const [displayCards, setDisplayCards] = useState<HobbyCard[]>([]); // Hobby card showed
  const [error, setError] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const username = window.localStorage.getItem("username");
  const name = window.localStorage.getItem("name");

  useEffect(() => {
    const fetchHobbies = async () => {
      setError("");
      try {
        const response = await fetch(
          `${backendUrl}/api/hobbycard/all?username=${username}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${window.localStorage.getItem(
                "id_token"
              )}`,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const _hobbyCards = (await response.json()) as HobbyCard[];
        setHobbyCards(_hobbyCards);
        setDisplayCards(_hobbyCards);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchHobbies();
  }, []);

  const handleFilterChange = (filter: string) => {
    const filterLowerCase = filter.toLowerCase();

    const filteredCards = hobbyCards.filter(
      (card) =>
        card.categoryName.toLowerCase().includes(filterLowerCase) ||
        card.description.toLowerCase().includes(filterLowerCase)
    );

    setDisplayCards(filteredCards);
  };

  return (
    <div className="bg-light pt-1 pb-5 px-5 text-center shadow">
      <h1 className="display-4">Il Mio Profilo</h1>
      <p className="fs-5 text-muted">
        Qua puoi trovare tutte le tue Hobby Card
      </p>
      <SearchBar onChangeFilter={handleFilterChange} />
      <div id="hobbyCardContainer" className="row mt-4">
        {error && (
          <div className="alert alert-danger" role="alert">
            Error: {error}
          </div>
        )}
        {displayCards.length > 0 ? (
          displayCards.map((hobbyCard, index) => (
            <HobbyCardComponent key={index} hobbyCard={hobbyCard} />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center w-100">
            <p className="text-muted fs-4">No hobby cards found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
