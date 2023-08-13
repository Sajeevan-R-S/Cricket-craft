import { useContext, useState } from 'react';
import Card from '../components/Card';
import data from '../data/items';
import ItemContext from '../context/ItemContext';
import { useNavigate } from 'react-router-dom';

const PartSelection = () => {
  const { selectedParts, togglePartSelection } = useContext(ItemContext);
  const navigate = useNavigate();

  console.log('parts from context: ', selectedParts);

  const handleNextClick = () => {
    if (selectedParts.length > 0) {
      navigate('/assemble');
    } else alert('Please select atleast on item');
  };

  return (
    <section className="selection-container">
      <div className="card-container-scroll">
        {data.map((item) => (
          <Card key={item.id} cardData={item} />
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        {selectedParts.length + ' items selected'}
      </div>
      <button style={{ alignSelf: 'center' }} onClick={handleNextClick}>
        Next
      </button>
    </section>
  );
};

export default PartSelection;
