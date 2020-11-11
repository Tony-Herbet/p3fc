// == Import npm
import React from 'react';

// == Import
import Header from 'src/components/Header';
import Choices from 'src/components/Choices';
import Score from 'src/components/Score';
import Modes from 'src/components/Modes';
import Rules from 'src/components/Rules';
import Footer from 'src/components/Footer';
import choicesList from '../../data/choices';
import modesList from '../../data/modes';
import './styles.scss';

// == Component
class App extends React.Component {
  // With plugin "plugin-proposal-class-properties"
  // No constructor needed to define state
  state = {
    playerChoice: '',
    computerChoice: '',
    roundResultText: '',
    roundResult: '',
    roundCounter: 0,
    playerScore: 0,
    computerScore: 0,
    modeSelected: 'Infini',
    playerScoreNeeded: '',
    computerScoreNeeded: '',
    gameEnded: false,
    gameResultText: '',
    gameResult: '',
    openModes: false,
    openRules: false,
  };

  componentDidUpdate() {
    this.checkMatchResult();
  }

  // Function to count the number of round
  updateRoundCounter = () => {
    const { roundCounter } = this.state;
    const newRoundCounter = roundCounter + 1;
    this.setRoundCounter(newRoundCounter);
  };

  // Function to open/close the modes display
  toggleModes = () => {
    const { openModes } = this.state;
    this.setState({
      openModes: !openModes,
    });
  }

  // Function to open/close the rules display
  toggleRules = () => {
    const { openRules } = this.state;
    this.setState({
      openRules: !openRules,
    });
  }

  // Function to handle the player and computer choices
  handleChoice = (playerChoice) => {
    // Random beetween 1 and 5 included
    const computerRandom = Math.floor((Math.random() * (5 - 1 + 1)) + 1);

    // Find the corresponding entry
    const findEntry = choicesList.find((choice) => choice.id === computerRandom);

    // Check the corresponding Name
    const computerChoice = findEntry.name;

    // Callback to save the computer choice
    this.setComputerChoice(computerChoice);

    // Callback to save the player's choice
    this.setPlayerChoice(playerChoice.name);

    // Callback to find the round result
    this.getRoundResultText(playerChoice.name, computerChoice, playerChoice.beats);
  };

  // Function to handle the mode selected
  handleModeSelected = (modeSelected) => {
    this.setModeSelected(modeSelected.name);
    this.setPlayerScoreNeeded(modeSelected.scores.player);
    this.setComputerScoreNeeded(modeSelected.scores.computer);
    this.startNewGame();
  };

  // Function to compare choices and find the round result
  getRoundResultText = (playerChoice, computerChoice, winningPossibilities) => {
    const tie = 'Égalité';
    const playerWon = 'Victoire';
    const playerLost = 'Défaite';

    // Condition if it's a tie we just change the round result
    if (playerChoice === computerChoice) {
      this.setRoundResultText(tie);
      this.setRoundResult('tie');
    } // Condition when the player won, we set the new round result and new score
    else if (winningPossibilities.includes(computerChoice)) {
      this.setRoundResultText(playerWon);
      this.setRoundResult('won');
      this.setPlayerScore();
    } // Condition when the computer won, we set the new round result and new score
    else {
      this.setRoundResultText(playerLost);
      this.setRoundResult('lost');
      this.setComputerScore();
    }
  };

  // Function to check the match result
  checkMatchResult = () => {
    const {
      playerScore,
      playerScoreNeeded,
      computerScore,
      computerScoreNeeded,
      modeSelected,
    } = this.state;
    if ((modeSelected !== 'Infini') && (playerScore === playerScoreNeeded)) {
      this.setGameResultText('Vous avez gagné :)');
      this.setGameResult('won');
      this.setGameEnded();
    }
    if ((modeSelected !== 'Infini') && (computerScore === computerScoreNeeded)) {
      this.setGameResultText('Vous avez perdu :(');
      this.setGameResult('lost');
      this.setGameEnded();
    }
  };

  // Function to start a new game
  startNewGame = () => {
    this.setState({
      playerChoice: '',
      computerChoice: '',
      roundResultText: '',
      roundResult: '',
      roundCounter: 0,
      playerScore: 0,
      computerScore: 0,
      gameEnded: false,
      gameResultText: '',
      gameResult: '',
    });
  };

  /*
  * ================ Setters ================
  */

  // Function to save the game mode selected
  setModeSelected = (newValue) => {
    this.setState({
      modeSelected: newValue,
    });
  };

  // Function to save the player score needed to win
  setPlayerScoreNeeded = (newValue) => {
    this.setState({
      playerScoreNeeded: newValue,
    });
  };

  // Function to save the computer score needed to win
  setComputerScoreNeeded = (newValue) => {
    this.setState({
      computerScoreNeeded: newValue,
    });
  };

  // Function to increment and save the player score
  setPlayerScore = () => {
    const { playerScore } = this.state;
    const newScore = playerScore + 1;
    this.setState({
      playerScore: newScore,
    });
  };

  // Function to increment and save the computer score
  setComputerScore = () => {
    const { computerScore } = this.state;
    const newScore = computerScore + 1;
    this.setState({
      computerScore: newScore,
    });
  };

  // Function to save the player choice in the state
  setPlayerChoice = (newValue) => {
    // console.log(`player ${newValue}`);
    this.setState({
      playerChoice: newValue,
    });
  };

  // Function to save the computer choice in the state
  setComputerChoice = (newValue) => {
    // console.log(`computer ${newValue}`);
    this.setState({
      computerChoice: newValue,
    });
  };

  // Function to save the round result text to display
  setRoundResultText = (newValue) => {
    this.setState({
      roundResultText: newValue,
    });
  };

  // Function to save the round result
  setRoundResult = (newValue) => {
    this.setState({
      roundResult: newValue,
    });
  };

  // Function to save the new round counter
  setRoundCounter = (newRoundCounter) => {
    this.setState({
      roundCounter: newRoundCounter,
    });
  };

  // Function when a game end
  setGameEnded = () => {
    this.setState({
      gameEnded: true,
      playerScore: 0,
      computerScore: 0,
    });
  };

  // Function to save the game result text to display
  setGameResultText = (newValue) => {
    this.setState({
      gameResultText: newValue,
    });
  };

  // Function to save the game result
  setGameResult = (newValue) => {
    this.setState({
      gameResult: newValue,
    });
  };

  render() {
    const {
      playerChoice,
      computerChoice,
      roundResultText,
      roundResult,
      roundCounter,
      playerScore,
      computerScore,
      modeSelected,
      playerScoreNeeded,
      computerScoreNeeded,
      gameEnded,
      gameResultText,
      gameResult,
      openModes,
      openRules,
    } = this.state;

    return (
      <div className="app">
        <Header
          toggleModes={this.toggleModes}
          toggleRules={this.toggleRules}
          openModes={openModes}
          openRules={openRules}
        />
        <main className="main">
          <Score
            playerChoice={playerChoice}
            computerChoice={computerChoice}
            roundResultText={roundResultText}
            roundResult={roundResult}
            round={roundCounter}
            playerScore={playerScore}
            computerScore={computerScore}
            playerScoreNeeded={playerScoreNeeded}
            computerScoreNeeded={computerScoreNeeded}
            modeSelected={modeSelected}
            gameEnded={gameEnded}
            gameResultText={gameResultText}
            gameResult={gameResult}
          />
          <Choices
            choices={choicesList}
            manageChoice={this.handleChoice}
            updateRoundCounter={this.updateRoundCounter}
            gameEnded={gameEnded}
            startNewGame={this.startNewGame}
          />
          {openModes === true && (
            <Modes
              modes={modesList}
              modeSelected={modeSelected}
              handleModeSelected={this.handleModeSelected}
            />
          )}
          {openRules === true && (
            <Rules />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

// == Export
export default App;
