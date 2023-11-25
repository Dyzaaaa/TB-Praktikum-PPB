import React, { useState, useEffect } from 'react';
import './CardBig.css';

export default function CardBig(props) {
  const [showCatFunFact, setShowCatFunFact] = useState(false);
  const [catFunFact, setCatFunFact] = useState('');

  const toggleCatFunFact = () => {
    setShowCatFunFact(!showCatFunFact);
  };

  useEffect(() => {
    if (showCatFunFact) {
      const fetchCatFact = async () => {
        try {
          const response = await fetch('https://cat-facts12.p.rapidapi.com/Fact', {
            method: 'GET',
            headers: {
              'X-RapidAPI-Host': 'cat-facts12.p.rapidapi.com',
              'X-RapidAPI-Key': '593a9c5d11msh21b7f3d237350bep1aeaa3jsn4fb4d407a147',
            },
          });
  
          const data = await response.json();
          setCatFunFact(data.Fact);
        } catch (error) {
          console.error('Error fetching cat fact:', error);
        }
      };
  
      fetchCatFact();
    }
  }, [showCatFunFact]);
  

  return (
    <div className="containerBig">
      <img src={props.img} alt="" className="posterBig" onClick={toggleCatFunFact} />

      {showCatFunFact && (
        <div className="catFunFactModal" onClick={toggleCatFunFact}>
          <div className="catFunFactContent" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={toggleCatFunFact}>&times;</span>
            <h2>Fun Fact</h2>
            <p>{catFunFact}</p>
          </div>
        </div>
      )}
    </div>
  );
}
