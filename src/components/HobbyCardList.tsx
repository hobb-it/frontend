import React from "react";
import HobbyCardComponent from "./HobbyCard"; // Assicurati che il percorso sia corretto
import SearchBar from "./SearchBar";

interface HobbyCard {
  categoryName: string;
  description: string;
  username: string;
}

interface HobbyCardListProps {
  hobbyCards: HobbyCard[];
  displayCards: HobbyCard[];
  error: string;
  onFilterChange: (filter: string) => void;
  buttonText: string;
  buttonLink: string;
  hideFields?: boolean;
}

const HobbyCardList: React.FC<HobbyCardListProps> = ({
  hobbyCards,
  displayCards,
  error,
  onFilterChange,
  buttonText,
  buttonLink,
  hideFields
}) => {
  return (
    <div>
      <SearchBar onChangeFilter={onFilterChange} />
      <div id="hobbyCardContainer" className="row mt-4">
        {error && (
          <div className="alert alert-danger" role="alert">
            Error: {error}
          </div>
        )}
        {displayCards.length > 0 ? (
          displayCards.map((hobbyCard, index) => (
            <HobbyCardComponent
              key={index}
              hobbyCard={hobbyCard}
              buttonText={buttonText}
              buttonLink={buttonLink}
              hideFields={hideFields}
            />
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

export default HobbyCardList;
