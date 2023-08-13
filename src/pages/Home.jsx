import React from 'react';

import assembledPlayer from '../../public/assets/assembled.png';
import unassembledPlayer from '../../public/assets/unassembled.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <div className="image-container">
        <img src={unassembledPlayer} alt="player image" />
        <button onClick={() => navigate('selection')}>Get Started</button>
        <img src={assembledPlayer} alt="player image" />
      </div>
      <h2 className="hero-text">
        Get ready to experience the thrill of the game like never before –
        customize, assemble, and watch your cricket legend come alive
      </h2>
    </section>
  );
};

export default Home;
