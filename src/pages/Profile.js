import React from 'react';
import './Profile.css';


const Profile = () => {
  return (
    <div className="profile-container">
        <div className="background"></div>
      <div className="owner-profile">
        <h2>Cat's Owner</h2>
        <img
          src="https://raw.githubusercontent.com/Dyzaaaa/TB-Praktikum-PPB/main/public/namo.jpeg" 
          alt="Owner"
          className="profile-image"
        />
        <p>
          Hi, I'm Dyza Khoirun Nisa. I love cats and enjoy taking care of my furry friends.
        </p>
        <br/>
        <p>Find me at:</p>
        <a 
          href="https://www.instagram.com/dyzasssa"
          target="_blank"
          rel="noopener noreferrer"
        >
          dyzasssa
        </a>
        <p>dyzakhoirunnisa@students.undip.ac.id</p>
      </div>

      <div className="cat-profile">
        <h2>Cat's Profile</h2>
        <img
          src="https://raw.githubusercontent.com/Dyzaaaa/TB-Praktikum-PPB/main/public/wahyuni.jpg" 
          alt="Cat"
          className="profile-image"
        />
        <p>
          Meet Wahyuni, my adorable cat. Wahyuni loves to follow me everywhere.
        </p>
      </div>
    </div>
  );
};

export default Profile;
