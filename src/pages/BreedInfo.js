import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BreedInfo.css';

const BreedInfo = () => {
  const { breedId } = useParams();
  const [breedInfo, setBreedInfo] = useState(null);

  useEffect(() => {

    const fetchBreedInfo = async () => {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/${breedId}`);
        const data = await response.json();
        setBreedInfo(data);
      } catch (error) {
        console.error("Error fetching breed info:", error);
      }
    };

    fetchBreedInfo();
  }, [breedId]);

  return (
    <div className="breed-info-container">
        <div className="background"></div>
      {breedInfo && (
        <div>
          <h2>{breedInfo.name}</h2>
          {breedInfo.image && (
            <img src={breedInfo.image.url} alt={breedInfo.name} className="breed-image" />
          )}
          <p className="breed-description">{breedInfo.description}</p>
          <p className="breed-origin">{breedInfo.origin}</p>
          <p className="breed-temperament">{breedInfo.temperament}</p>
          <p className="breed-life-span">{breedInfo.life_span}</p>
        </div>
      )}
    </div>
  );
};

export default BreedInfo;
