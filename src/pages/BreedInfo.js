// BreedInfo.js
import { FaGlobe, FaGrin, FaClock, FaInfo} from 'react-icons/fa';
import "./BreedInfo.css"; 

const BreedInfo = ({ breedInfo }) => {


  return (
<div className="breed-info">
    <div className="background"></div>
        <h2>{breedInfo.name}</h2>
        <p>
          <FaInfo /> <strong>Description:</strong> {breedInfo.description}
        </p>
        <p>
          <FaGlobe /> <strong>Origin:</strong> {breedInfo.origin}
        </p>
        <p>
          <FaGrin /> <strong>Temperament:</strong> {breedInfo.temperament}
        </p>
        <p>
          <FaClock /> <strong>Life Span:</strong> {breedInfo.life_span}
        </p>
      </div>

  );
};

export default BreedInfo;
