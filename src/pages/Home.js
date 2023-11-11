import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="body">
    <div className="home">
  <div className="background"></div>
  <div className="title">
  <h1>Welcome to Cat World!</h1>
  <p>Explore the fascinating world of cats and discover helpful information for cat owners.</p>
  </div>
  <div className="gif-container">
      <div className="moving-gif">
        <img src="https://64.media.tumblr.com/207a2341df673ca4514637f67924506a/tumblr_o4tiytNTVK1u2yfqbo1_400.gif" alt="Moving GIF" />
        </div>
        <div className="moving-gif2">
        <img src="https://64.media.tumblr.com/9399e5e1fa6f95c895a501b8226121bd/tumblr_nr4f0wy65q1updbngo1_250.gif" alt="Moving GIF" />
        </div>
      </div>
      <div className="featured-content">
        <div className="featured-item">
          <h2>Popular Breeds</h2>
          <p>Discover some of the most popular cat breeds and their unique characteristics.</p>
          <a href="/gallery">Explore Breeds</a>
        </div>
        </div>
        <div className="featured-content">
        <div className="featured-item">
          <h2>Cat Care Tips</h2>
          <p>Learn essential tips for taking care of your feline friend, from nutrition to grooming.</p>
          <a href="/care">Read Care Guide</a>
        </div>
      </div>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Cat World is dedicated to providing valuable information and resources for cat enthusiasts.
          Our mission is to help you create a happy and healthy life for your beloved cats.
        </p>
      </section>
    </div>
    </div>
  );
};

export default Home;
