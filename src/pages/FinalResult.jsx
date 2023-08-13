import React, { useContext } from 'react';
import ItemContext from '../context/ItemContext';
import unassembledPlayer from '../../public/assets/unassembled.png';
import helmet from '../../public/assets/helmet.png';
import rightGlove from '../../public/assets/right-glove.png';
import leftGlove from '../../public/assets/left-glove.png';
import rightPad from '../../public/assets/right-pad.png';
import leftPad from '../../public/assets/left-pad.png';
import { useNavigate } from 'react-router-dom';

const FinalResult = () => {
  const { draggedItems, setDraggedItem } = useContext(ItemContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="image-container">
      <div style={{ position: 'relative', top: -200, left: -200 }}>
        <img
          src={unassembledPlayer}
          alt="player"
          style={{ position: 'absolute', top: 20 }}
        />
        {draggedItems.map((item) => {
          switch (item.imageName) {
            case 'rightGlove':
              return (
                <img
                  src={rightGlove}
                  alt="helmet"
                  style={{ position: 'absolute', top: 110, left: 82 }}
                />
              );
            case 'leftGlove':
              return (
                <img
                  src={leftGlove}
                  alt="helmet"
                  style={{ position: 'absolute', top: 120, left: -1 }}
                />
              );
            case 'leftPad':
              return (
                <img
                  src={leftPad}
                  alt="helmet"
                  style={{ position: 'absolute', top: 215, left: 10 }}
                />
              );
            case 'rightPad':
              return (
                <img
                  src={rightPad}
                  alt="helmet"
                  style={{ position: 'absolute', top: 198, left: 65 }}
                />
              );
            case 'helmet':
              return (
                <img
                  src={helmet}
                  alt="helmet"
                  style={{ position: 'absolute', top: -30, left: 40 }}
                />
              );
          }
        })}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h3>Congratulations! You just finished building your player</h3>
        <button onClick={handleClick}>Back to Home</button>
      </div>
    </div>
  );
};

export default FinalResult;
