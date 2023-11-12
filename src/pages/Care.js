import React from "react";
import { Link } from "react-router-dom";
import { GiOpenedFoodCan, GiShield, GiCalculator } from "react-icons/gi";
import "./Care.css";

export default function Care() {
  return (
    <div>
      <div className="background"></div>
      <div className="care-container">
        <h2 className="care-title">Cat Care Information</h2>
        <p className="care-description">Here you can find information about taking care of your cat.</p>

        <div className="care-link">
          <Link to="/caretips" className="caretips-link">
            <GiShield size={32} className="food-icon" />
            <span className="food-text">Basic Care Tips</span>
          </Link>
        </div>
        <div className="care-link">
          <Link to="/safefood" className="safefood-link">
            <GiOpenedFoodCan size={32} className="food-icon" />
            <span className="food-text">Safe Food List</span>
          </Link>
        </div>
        <div className="care-link">
          <Link to="/food" className="food-link">
            <GiCalculator size={32} className="food-icon" />
            <span className="food-text">Food Calculator</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
