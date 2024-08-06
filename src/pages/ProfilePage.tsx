import React, { useState, useEffect } from "react";
import HobbyCardList from "../components/HobbyCardList";

interface HobbyCard {
  categoryName: string;
  description: string;
  username: string;
  title: string;
}

function ProfilePage() {
  const [hobbyCards, setHobbyCards] = useState<HobbyCard[]>([]);
  const [displayCards, setDisplayCards] = useState<HobbyCard[]>([]);
  const [error, setError] = useState("");
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const username = window.localStorage.getItem("username");

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
      <span className="fs-5 text-muted">
        Qua puoi trovare tutte le tue Hobby Card
      </span>
      <div id="hobbyCardContainer" className="row">
        <HobbyCardList
          hobbyCards={hobbyCards}
          displayCards={displayCards}
          error={error}
          onFilterChange={handleFilterChange}
          buttonText={'Modifica Hobby Card'}
          buttonLink={'modify/'}
          hideFields={true}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
