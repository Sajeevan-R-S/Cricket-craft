import React, { useContext, useState } from 'react';
import ItemContext from '../context/ItemContext';
import unassembledPlayer from '../../public/assets/unassembled.png';
import helmet from '../../public/assets/helmet.png';
import rightGlove from '../../public/assets/right-glove.png';
import leftGlove from '../../public/assets/left-glove.png';
import rightPad from '../../public/assets/right-pad.png';
import leftPad from '../../public/assets/left-pad.png';

import { useNavigate } from 'react-router-dom';

const Assembly = () => {
  const [droppedImages, setDroppedImages] = useState([]);

  const navigate = useNavigate();
  const { selectedParts, togglePartSelection, setDraggedItem, draggedItems } =
    useContext(ItemContext);

  const handleDragStart = (event, imageName) => {
    event.dataTransfer.setData('text/plain', imageName);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, targetArea) => {
    event.preventDefault();
    const imageName = event.dataTransfer.getData('text/plain');

    // Define which images can be dropped in which areas
    const allowedImages = {
      'drop-area-1': ['leftPad'],
      'drop-area-2': ['rightPad'],
      'drop-area-3': ['leftGlove'],
      'drop-area-4': ['rightGlove'],
      'drop-area-5': ['helmet'],
    };

    if (
      allowedImages[targetArea] &&
      allowedImages[targetArea].includes(imageName)
    ) {
      setDroppedImages((prevImages) => [
        ...prevImages,
        { imageName, targetArea },
      ]);
      setDraggedItem({ imageName, targetArea });
    }
  };

  const handleClick = () => {
    if (draggedItems.length > 0) {
      navigate('/final');
    } else {
      alert('Please drag and drop atleast one part');
    }
  };

  console.log('Dragged Image Name: ', draggedItems);
  console.log('Dropped: ', droppedImages);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className="sidebar">
          <div style={{ opacity: 0.5, fontSize: 14, marginBottom: 20 }}>
            Drag and drop from here
          </div>
          {selectedParts.map((item) => {
            switch (item.name) {
              case 'Left Pad':
                return (
                  <div key={item.id}>
                    <img
                      src={leftPad}
                      alt="Left Pad"
                      draggable="true"
                      onDragStart={(event) => handleDragStart(event, 'leftPad')}
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                    <hr />
                  </div>
                );
              case 'Right Pad':
                return (
                  <div key={item.id}>
                    <img
                      src={rightPad}
                      alt="Right Pad"
                      draggable="true"
                      onDragStart={(event) =>
                        handleDragStart(event, 'rightPad')
                      }
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                    <hr />
                  </div>
                );
              case 'Left Glove':
                return (
                  <div key={item.id}>
                    <img
                      src={leftGlove}
                      alt="Left Glove"
                      draggable="true"
                      onDragStart={(event) =>
                        handleDragStart(event, 'leftGlove')
                      }
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                    <hr />
                  </div>
                );
              case 'Right Glove':
                return (
                  <div key={item.id}>
                    <img
                      src={rightGlove}
                      alt="Right Glove"
                      draggable="true"
                      onDragStart={(event) =>
                        handleDragStart(event, 'rightGlove')
                      }
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                    <hr />
                  </div>
                );
              case 'Helmet':
                return (
                  <div key={item.id}>
                    <img
                      src={helmet}
                      alt="Helmet"
                      draggable="true"
                      onDragStart={(event) => handleDragStart(event, 'helmet')}
                    />
                    <div style={{ textAlign: 'center' }}>{item.name}</div>
                    <hr />
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            alignSelf: 'center',
          }}
        >
          <div style={{ position: 'relative', top: -150 }}>
            <img
              src={unassembledPlayer}
              alt="player"
              style={{ position: 'absolute', zIndex: -1 }}
            />
            <div
              id="drop-area-1"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, 'drop-area-1')}
              style={{
                width: '50px',
                height: '150px',
                border: '1px solid black',
                zIndex: 1000,
                position: 'absolute',
                top: 195,
                left: 55,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {draggedItems
                .filter((image) => image.targetArea === 'drop-area-1')
                .map((image, index) => (
                  <img
                    key={index}
                    src={`../../public/assets/left-pad.png`}
                    alt={image.imageName}
                  />
                ))}
            </div>
            <div
              id="drop-area-1"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, 'drop-area-2')}
              style={{
                width: '50px',
                height: '150px',
                border: '1px solid black',
                zIndex: 1000,
                position: 'absolute',
                top: 175,
                left: 110,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {draggedItems
                .filter((image) => image.targetArea === 'drop-area-2')
                .map((image, index) => (
                  <img
                    key={index}
                    src={`../../public/assets/right-pad.png`}
                    alt={image.imageName}
                  />
                ))}
            </div>
            <div
              id="drop-area-1"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, 'drop-area-3')}
              style={{
                width: '50px',
                height: '70px',
                border: '1px solid black',
                zIndex: 1000,
                position: 'absolute',
                top: 140,
                left: 49,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {draggedItems
                .filter((image) => image.targetArea === 'drop-area-3')
                .map((image, index) => (
                  <img
                    key={index}
                    src={`../../public/assets/left-glove.png`}
                    alt={image.imageName}
                  />
                ))}
            </div>
            <div
              id="drop-area-1"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, 'drop-area-4')}
              style={{
                width: '50px',
                height: '70px',
                border: '1px solid black',
                zIndex: 1000,
                position: 'absolute',
                top: 125,
                left: 130,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {draggedItems
                .filter((image) => image.targetArea === 'drop-area-4')
                .map((image, index) => (
                  <img
                    key={index}
                    src={`../../public/assets/right-glove.png`}
                    alt={image.imageName}
                  />
                ))}
            </div>
            <div
              id="drop-area-1"
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, 'drop-area-5')}
              style={{
                width: '60px',
                height: '60px',
                border: '1px solid black',
                zIndex: 1000,
                position: 'absolute',
                top: -10,
                left: 82,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {draggedItems
                .filter((image) => image.targetArea === 'drop-area-5')
                .map((image, index) => (
                  <img
                    key={index}
                    src={`../../public/assets/helmet.png`}
                    alt={image.imageName}
                  />
                ))}
            </div>
          </div>
        </div>
        <button
          style={{
            position: 'relative',
            bottom: -300,
            left: 40,
          }}
          onClick={handleClick}
        >
          See Final Result
        </button>
      </div>
    </div>
  );
};

export default Assembly;
