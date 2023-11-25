import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CardBig from "../component/CardBig";
import CatFunFact from "../component/CatFunFact";
import "./Gallery.css";

const BreedDetails = () => {
  const { breedid } = useParams();
  const [breedInfo, setBreedInfo] = useState(null);
  const [catImages, setCatImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [catFunFact, setCatFunFact] = useState("");
  const [selectedBreed, setSelectedBreed] = useState(""); 

  useEffect(() => {
    const fetchBreedInfo = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/breeds/${breedid}`
        );
        const data = await response.json();
        setBreedInfo(data);
        setSelectedBreed(data.id); 
      } catch (error) {
        console.error("Error fetching breed details:", error);
      }
    };

    const fetchCatImages = async () => {
      try {
        const response = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${breedid}&limit=10`
        );
        const data = await response.json();
        setCatImages(data);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };

    fetchBreedInfo();
    fetchCatImages();
  }, [breedid]);

  const showCatFunFact = async () => {
    try {
      const response = await fetch("https://cat-facts12.p.rapidapi.com/Fact", {
        method: "GET",
        headers: {
          'X-RapidAPI-Host': 'cat-facts12.p.rapidapi.com',
          "X-RapidAPI-Key": "593a9c5d11msh21b7f3d237350bep1aeaa3jsn4fb4d407a147",
        },
      });
      const data = await response.json();
      setCatFunFact(data.text);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching cat fun fact:", error);
    }
  };

  const hideCatFunFact = () => {
    setCatFunFact("");
    setShowModal(false);
  };


  return (
    <div>
        <div className="background"></div>
        <div className="breed-container">
        {selectedBreed && (
          <div>
            <Link to={`/breedinfo/${selectedBreed}`}>
              <h2>{breedInfo.name}</h2>
            </Link>
          </div>
        )}

        <div className="cat-gallery">
          {catImages.map((cat) => (
            <CardBig key={cat.id} img={cat.url} showCatFunFact={showCatFunFact} />
          ))}
        </div>
      </div>

      {showModal && (
        <CatFunFact catFunFact={catFunFact} closeModal={hideCatFunFact} />
      )}
    </div>
  );
};

export default BreedDetails;
