import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
        <div className="background"></div>
      <div className="owner-profile">
        <h2>Cat's Owner</h2>
        <img
          src="https://i.postimg.cc/h4pFCKr1/IMG-8307.jpg" 
          alt="Owner"
          className="profile-image"
        />
        <p>
          Hi, I'm Namo. I love cats and enjoy taking care of my furry friends.
        </p>
      </div>

      <div className="cat-profile">
        <h2>Cat's Profile</h2>
        <img
          src="https://i.postimg.cc/c1TTqHP6/c51fe3ec-a191-4e03-8847-d14b985c127b-2.jpg" 
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
