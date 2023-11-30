import React from "react";
import "./CatFunFact.css";

const CatFunFact = ({ catFunFact, closeModal }) => {
  console.log("catFunFact:", catFunFact);
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
