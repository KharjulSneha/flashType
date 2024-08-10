import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailCards from "../ChallengeDetailCards/ChallengeDetailCards";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timerRemaining,
  timeStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* detail section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeDetailCards cardName="Words" cardValue={words} />

        {/* characters typed */}
        <ChallengeDetailCards cardName="Characters" cardValue={characters} />

        {/* speed */}
        <ChallengeDetailCards cardName="Speed" cardValue={wpm} />
      </div>

      {/* the real test challenge */}
      <div className="typewriter-container">
        <TypingChallenge
          timeStarted={timeStarted}
          timerRemaining={timerRemaining}
          selectedParagraph={selectedParagraph}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
