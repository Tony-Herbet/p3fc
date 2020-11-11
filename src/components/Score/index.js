// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './score.scss';

// == Component
const Score = ({
  playerChoice,
  computerChoice,
  roundResultText,
  roundResult,
  round,
  playerScore,
  computerScore,
  playerScoreNeeded,
  computerScoreNeeded,
  modeSelected,
  gameEnded,
  gameResultText,
  gameResult,
}) => (
  <section className="score-container">
    <div className="infos-container">
      <div className="name">
        Ordinateur
      </div>
      <div className="computer-score">
        {computerScore} { modeSelected !== 'Infini' && (
          `/ ${computerScoreNeeded}`
        )}
      </div>
    </div>
    <div className="computer-choice game-choice">
      {computerChoice}
    </div>
    <div className="result">
      { gameEnded === false && (
        <div className="round-infos">
          { round === 0 && (
            'Choisissez un signe pour commencer à jouer.'
          )}
          { round !== 0 && (
            <>
              <div className="round">Round {round}</div>
              <div className={roundResult}>{roundResultText}</div>
            </>
          )}
        </div>
      )}
      { gameEnded === true && (
      <div className={gameResult}>
        {gameResultText}
      </div>
      )}
    </div>
    <div className="player-choice game-choice">
      {playerChoice}
    </div>
    <div className="infos-container">
      <div className="name">
        Joueur
      </div>
      <div className="player-score">
        {playerScore} { modeSelected !== 'Infini' && (
          `/ ${playerScoreNeeded}`
        )}
      </div>
    </div>
  </section>
);

// == PropTypes
Score.propTypes = {
  playerChoice: PropTypes.string.isRequired,
  computerChoice: PropTypes.string.isRequired,
  roundResultText: PropTypes.string.isRequired,
  roundResult: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  playerScore: PropTypes.number.isRequired,
  computerScore: PropTypes.number.isRequired,
  playerScoreNeeded: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  computerScoreNeeded: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  modeSelected: PropTypes.string.isRequired,
  gameEnded: PropTypes.bool.isRequired,
  gameResultText: PropTypes.string.isRequired,
  gameResult: PropTypes.string.isRequired,
};

// == Export
export default Score;
