import { useState } from 'react';

export default function App() {
  const images = [
    { src: "images/pic1.jpg", alt: "Closeup of a human eye" },
    { src: "images/pic2.jpg", alt: "Rock that like a wave" },
    { src: "images/pic3.jpg", alt: "Purple and white pansies" },
    { src: "images/pic4.jpg", alt: "Section of wall from a pharaoh's tomb" },
    { src: "images/pic5.jpg", alt: "Large moth on a leaf" },
  ];

  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isDarkened, setIsDarkened] = useState(false);

  const handleThumbnailClick = (index) => {
    setDisplayedIndex(index);
  };

  const handleDarkenToggle = () => {
    setIsDarkened(!isDarkened);
  };

  const overlayStyle = {
    backgroundColor: isDarkened ? 'rgba(0,0,0,0.5)':'rgba(0,0,0,0)',
  };

  const buttonLabel = isDarkened ? 'Lighten':'Darken';

  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className={`displayed-img ${isDarkened ? 'darkened' : ''}`}
          src={images[displayedIndex].src}
          alt={images[displayedIndex].alt}
        />
        <div className="overlay" style={overlayStyle}></div>
        <button className="dark" onClick={handleDarkenToggle}>
          {buttonLabel}
        </button>
      </div>
      <div className="thumb-bar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </>
  );
}
