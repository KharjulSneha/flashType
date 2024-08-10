import React from "react";
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";

const TestContainer = ({
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
    <div className="test-container">
      {timerRemaining > 0 ? (
        <div className="typing-challenge-cont">
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timeStarted={timeStarted}
            timerRemaining={timerRemaining}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
