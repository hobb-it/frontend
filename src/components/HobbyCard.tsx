import React from "react";
import { Link } from "react-router-dom";
import "../styles/hobbyCard.css";

interface Props {
  hobbyCard: any;
  buttonText: string;
  buttonLink: string;
  hideFields?: boolean;
}

function HobbyCard({ hobbyCard, buttonText, buttonLink, hideFields }: Props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card shadow-lg hobby-card">
        <div className="card-body card-content">
          <h4 className="card-title text-left mb-3 border-bottom pb-2">
            {hobbyCard.title}
          </h4>

          <div className="row">
            {!hideFields && (
              <div className="col-12 col-md-6 container-fluid">
                <div className="row yellow-100">
                  <h5 className="col-12font-weight-bold text-left">Pro User</h5>
                  <span className="col-12 text-left">{hobbyCard.username}</span>
                </div>
              </div>
            )}

            <div className="col-12 col-md-6 container-fluid">
              <div className="row yellow-100">
                <h5 className="col-12 font-weight-bold text-left">Category</h5>
                <span className="col-12 text-left">
                  {hobbyCard.categoryName}
                </span>
              </div>
            </div>
          </div>
          <hr />

          <div className="row text-left">
            <h5 className="col-12 font-weight-bold text-left fs-5">
              Descrizione
            </h5>
            <span className="col-12 text-left">{hobbyCard.description}</span>
          </div>
          <hr />

          {/* {!hideFields && (
            <>
              <div className="row">
                <h5 className="col-12 font-weight-bold text-left">Contatti</h5>
                <span className="col-12 text-left">{hobbyCard.contacts}</span>
              </div>
              <hr />
            </>
          )} */}

          <div className="row">
            <div className="col-12 text-left">
              <Link to={buttonLink} className="btn btn-success">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HobbyCard;
