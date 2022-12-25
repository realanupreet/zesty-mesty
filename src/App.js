import "./styles.css";
import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1601887389937-0b02c26b602c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80",
  "https://images.unsplash.com/photo-1548811579-017cf2a4268b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1581010864434-6ff1a9a2867e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  "https://images.unsplash.com/photo-1559366677-eaeffd144238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=402&q=80"
];

const Loading = (props) => {
  return (
    <>
      <aside>
        <div className="loading-bar">
          <label htmlFor="images-loaded">
            loading all your favourite images
          </label>
          <progress
            id="images-loaded"
            max="10"
            value={props.calculatedwidth}
          ></progress>
        </div>
      </aside>
    </>
  );
};

const App = () => {
  const [currentImage, setCurrentImage] = useState(3);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleImageClick = () => {
    setCurrentImage((currentImage) => {
      if (currentImage < images.length - 1) {
        return (currentImage += 1);
      } else {
        return (currentImage = 0);
      }
    });
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by lorem ipsum
        </h2>
      </header>
      <figure>
        {numLoaded < images.length ?
        <Loading calculatedwidth={(numLoaded / images.length) * 100} /> : null
        }
        
        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL,index) => (
          <img
            src={imageURL}
            alt=""
            key={imageURL}
            onClick={handleImageClick}
            onLoad={handleImageLoad}
            style={{opacity: currentImage === index ? 1: 0 }}
          />
        ))}
      </figure>
    </section>
  );
};
export default App;
