import React from "react";
import "./App.css";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraph";

const TotalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
const defaultState = {
  selectedParagraph: "",
  timeStarted: false,
  timerRemaining: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;

  fetchNewParagraphFallback = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];

    const selectedParagraphArray = data.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });

    // Update the testInfo in state
    this.setState({
      ...defaultState,
      selectedParagraph: data,
      testInfo,
    });
  };

  startTimer = () => {
    this.setState({ timeStarted: true });
    const timer = setInterval(() => {
      if (this.state.timerRemaining > 0) {
        //change wpm
        const timeSpent = TotalTime - this.state.timerRemaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * TotalTime : 0;
        this.setState({
          timerRemaining: this.state.timerRemaining - 1,
          wpm: parseInt(wpm),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => {
    this.fetchNewParagraph();
  };

  handleUserInput = (inputValue) => {
    //test Algorthim
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;
    const previousCharacters = this.state.characters;
    const testInfo = [...this.state.testInfo];

    // If character count decreases
    if (characters < previousCharacters) {
      // Calculate how many characters were deleted
      const deletedCount = previousCharacters - characters;

      // Iterate over the deleted characters and set their status to "notAttempted"
      for (let i = 0; i < deletedCount; i++) {
        // Start from the last deleted character
        const currentIndex = previousCharacters - i - 1;
        if (currentIndex >= 0) {
          testInfo[currentIndex].status = "notAttempted";
        }
      }

      this.setState({
        testInfo,
        characters,
        words,
      });

      return;
    }

    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });

      return;
    }

    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }

    //make a copy
    // const testInfo = [...this.state.testInfo];
    if (index < this.state.selectedParagraph.length - 1) {
      testInfo[index + 1].status = "notAttempted";
    }

    //check for correct typed letter
    const isCorrect = inputValue[index] === testInfo[index].testLetter;

    //update testInfo
    testInfo[index].status = isCorrect ? "correct" : "incorrect";

    this.setState({
      testInfo,
      characters,
      words,
    });

    if (!this.state.timeStarted) {
      this.startTimer();
    }
  };

  fetchNewParagraph() {
    fetch(serviceUrl)
      .then((response) => response.text())
      .then((data) => {
        // this.setState({ selectedParagraph: data });
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: "notAttempted",
          };
        });
        this.setState({ ...defaultState, testInfo, selectedParagraph: data });
      });
  }

  componentDidMount() {
    this.fetchNewParagraphFallback();
  }

  render() {
    return (
      <div className="app">
        {/* Nav section */}
        <Nav />

        {/* Landing page */}
        <LandingPage />

        {/* Challenge section */}
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timerRemaining={this.state.timerRemaining}
          timeStarted={this.state.timeStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />
      </div>
    );
  }
}

export default App;
