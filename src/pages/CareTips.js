import React from "react";
import { GiWaterDrop, GiLifeInTheBalance, GiHairStrands, GiBananaPeeled } from "react-icons/gi";
import { MdOutlineCleaningServices } from "react-icons/md";
import "./Care.css";

export default function CareTips() {
  return (
    <div className="care-content">
        <div className="background"></div>
      <h3>Basic Cat Care Tips</h3>
      <ul>
        <li><GiWaterDrop size={24} className="care-icon" /> Provide fresh water daily.</li>
        <li><GiLifeInTheBalance size={24} className="care-icon" /> Feed your cat a balanced diet.</li>
        <li><MdOutlineCleaningServices size={24} className="care-icon" /> Ensure a clean litter box.</li>
        <li><GiHairStrands size={24} className="care-icon" /> Groom your cat regularly.</li>
        <li><GiBananaPeeled size={24} className="care-icon" /> Keep your cat's environment safe and stimulating.</li>
      </ul>
    </div>
  );
}
