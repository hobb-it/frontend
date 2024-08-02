import React from "react";
import { Link } from "react-router-dom";

interface Props {
  hobbyCard: any;
  buttonText: string; // Aggiunta prop per il testo del bottone
  buttonLink: string; // Aggiunta prop per l'URL del bottone
}

function HobbyCard({ hobbyCard, buttonText, buttonLink }: Props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-left mb-3 border-bottom pb-2">{hobbyCard.categoryName}</h4>
          <div className="row yellow-100">
            <h5 className="col-12 font-weight-bold text-left">Username</h5>
            <span className="col-12 text-left">{hobbyCard.username}</span>
          </div>
          <hr />
          <div className="row text-left">
            <h5 className="col-12 font-weight-bold text-left fs-5">Descrizione</h5>
            <span className="col-12 text-left">{hobbyCard.description}</span>
          </div>
          <hr />
          <div className="row">
            <h5 className="col-12 font-weight-bold text-left">Contatti</h5>
            <span className="col-12 text-left">{hobbyCard.contacts}</span>
          </div>
          <hr />
          <div className="row">
            <div className="col-12 text-left">
              <Link to={buttonLink} className="btn btn-success">{buttonText}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;