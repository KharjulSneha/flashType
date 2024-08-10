import React from "react";
import "./ChallengeSection.css";
import TestContainer from "../TestContainer/TestContainer";

const ChallengeSection = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timerRemaining,
  timeStarted,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  return (
    <div className="challenge-section-container">
      <h1 className="challenge-section-header">Take a speed test now!</h1>
      <TestContainer
        selectedParagraph={selectedParagraph}
        timeStarted={timeStarted}
        timerRemaining={timerRemaining}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
