import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CardBig from "../component/CardBig";
import CatFunFact from "../component/CatFunFact";
import "./Gallery.css";

const Gallery = () => {
  const [catImages, setCatImages] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const navigate = useNavigate();

  const fetchCatImages = async (breed) => {
    try {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10`
      );
      const data = await response.json();
      setCatImages(data);
    } catch (error) {
      console.error("Error fetching cat images:", error);
    }
  };

  const fetchCatBreeds = async () => {
    try {
      const response = await fetch("https://api.thecatapi.com/v1/breeds");
      const data = await response.json();
      setBreeds(data);
    } catch (error) {
      console.error("Error fetching cat breeds:", error);
    }
  };

  const handleBreedChange = (e) => {
    const newBreedId = e.target.value;
    setSelectedBreed(newBreedId);
    if (newBreedId) {
      navigate(`/breed/${newBreedId}`);
    }
  };

  const showCatFunFact = async () => {
    try {
      const response = await fetch('https://cat-facts12.p.rapidapi.com/Fact', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'cat-facts12.p.rapidapi.com',
          'X-RapidAPI-Key': '593a9c5d11msh21b7f3d237350bep1aeaa3jsn4fb4d407a147',
        },
      });
      const data = await response.json();
      CatFunFact({ catFunFact: data.text });
    } catch (error) {
      console.error("Error fetching cat fun fact:", error);
    }
  };

  useEffect(() => {
    fetchCatImages(selectedBreed);
    fetchCatBreeds();
  }, [selectedBreed]);

  return (
    <div>
      <div className="background"></div>
      <div className="breed-container">
        <div className="breedButtons">
          <label>Pilih Ras:</label>
          <select value={selectedBreed} onChange={handleBreedChange}>
            <option value="pilih-ras">Pilih Ras</option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
        </div>

        {selectedBreed && (
          <div>
            <Link to={`/breedinfo/${selectedBreed}`}>
              <h2>{breeds.find((b) => b.id === selectedBreed)?.name}</h2>
            </Link>
          </div>
        )}

        <div className="cat-gallery">
          {catImages.map((cat) => (
            <Fragment key={cat.id}>
              <CardBig img={cat.url} showCatFunFact={showCatFunFact} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
