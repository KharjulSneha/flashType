import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  return (
    <div className="try-again-container">
      <h1>Test Results</h1>
      <div className="result-container">
        <p>
          <b>Characters: </b>
          {characters}
        </p>
        <p>
          <b>Words: </b>
          {words}
        </p>
        <p>
          <b>Speed: </b>
          {wpm} wpm
        </p>
      </div>

      <div>
        <button
          onClick={() => startAgain()}
          className="end-buttons  start-again-btn"
        >
          Re-try
        </button>
        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/share/sharer.php?u=checkit",
              "facebook-share-dialog",
              "widht:800, height:600"
            );
          }}
          className="end-buttons share-btn"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
