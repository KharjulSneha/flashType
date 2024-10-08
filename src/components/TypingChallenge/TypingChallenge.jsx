import React from "react";
import "./TypingChallenge.css";
import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = ({
  selectedParagraph,
  timerRemaining,
  timeStarted,
  testInfo,
  onInputChange,
}) => {
  // console.log(testInfo);
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:
          {timerRemaining > 10 ? timerRemaining : `0${timerRemaining}`}
        </p>
        <p className="timer-info">
          {!timeStarted && "Start typing to start the test "}
        </p>
      </div>
      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">
            {/* {selectedParagraph} */}
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
