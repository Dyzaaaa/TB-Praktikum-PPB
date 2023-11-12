import React, { useState } from "react";
import "./Food.css"; // Import CSS for styling

export default function Food() {
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0);
  const [activityLevel, setActivityLevel] = useState("average");
  const [foodType, setFoodType] = useState("dry");
  const [foodAmount, setFoodAmount] = useState(null);

  const calculateFood = () => {
    let factor = 0;

    if (activityLevel === "low") {
      factor = 0.8;
    } else if (activityLevel === "average") {
      factor = 1;
    } else if (activityLevel === "active") {
      factor = 1.2;
    }

    let result = 0;

    if (foodType === "dry") {
      result = (weight * 30 + age * 5) * factor;
    } else if (foodType === "wet") {
      result = (weight * 25 + age * 4) * factor;
    }

    setFoodAmount(result.toFixed(2));
  };

  return (
    <div>
    <div className="background"></div>
    <div className="food-container">
      <h2 className="food-title">Food Calculator</h2>
      <p className="food-description">Calculate the recommended food amount for your cat.</p>

      <div className="food-input">
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className="food-input">
        <label>Age (months):</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="food-input">
        <label>Activity Level:</label>
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="average">Average</option>
          <option value="active">Active</option>
        </select>
      </div>

      <div className="food-input">
        <label>Food Type:</label>
        <select
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        >
          <option value="dry">Dry Food</option>
          <option value="wet">Wet Food</option>
        </select>
      </div>

      <button className="food-button" onClick={calculateFood}>Calculate</button>

      {foodAmount !== null && (
        <div className="food-result">
          <h3>Recommended Food Amount:</h3>
          <p>{foodAmount} grams per day</p>
        </div>
      )}
    </div>
    </div>
  );
}
