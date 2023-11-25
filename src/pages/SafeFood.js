import React from 'react';
import './SafeFood.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 

const Safefood = () => {
  return (
    <div>
      <div className="background"></div>
    <div className="safefood-container">
      <h2 className="safefood-title">Foods Cats Can And Can't Eat</h2>

      <div className="food-list">
        <div className="safe-foods">
          <ul>
            <li><FaCheckCircle className="icon1" /> Meat</li>
            <li><FaCheckCircle className="icon1" /> Fish</li>
            <li><FaCheckCircle className="icon1" /> Veggies</li>
            <li><FaCheckCircle className="icon1" /> Eggs</li>
          </ul>
        </div>

        <div className="unsafe-foods">
          <ul>
            <li><FaTimesCircle className="icon1" /> Chocolate</li>
            <li><FaTimesCircle className="icon1" /> Onions and Garlic</li>
            <li><FaTimesCircle className="icon1" /> Caffeine</li>
            <li><FaTimesCircle className="icon1" /> Alcohol</li>
          </ul>
        </div>
      </div>

      <div className="health-tips">
        <p>
        Cat food should be specially formulated for cat's nutritional needs. Make sure
        always provide food that is appropriate for your cat's age and health condition.
        Give the right portions to prevent obesity, and always provide clean water.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Safefood;
