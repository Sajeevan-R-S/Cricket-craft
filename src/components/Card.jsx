import React, { useContext, useState } from 'react';
import ItemContext from '../context/ItemContext';

const Card = ({ cardData }) => {
  const { selectedParts, togglePartSelection } = useContext(ItemContext);

  const isSelected = selectedParts.includes(cardData);

  const handleCardClick = () => {
    togglePartSelection(cardData);
  };

  return (
    <section
      className={`card-container ${isSelected ? 'clicked' : ''}`}
      onClick={handleCardClick}
    >
      <img src={cardData.image} alt={name} className="part-image" />
      <div>{cardData.name}</div>
    </section>
  );
};

export default Card;
