import React from "react";
import "./CatFunFact.css";

const CatFunFact = ({ catFunFact, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{catFunFact}</p>
      </div>
    </div>
  );
};

export default CatFunFact;
