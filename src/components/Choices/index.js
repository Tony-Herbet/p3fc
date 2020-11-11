// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './choices.scss';

// == Component
const Choices = ({
  choices,
  manageChoice,
  updateRoundCounter,
  gameEnded,
  startNewGame,
}) => (
  <section className="choices-container">
    { gameEnded === false && (
      choices.map((choice) => (
        <button
          type="button"
          className="button"
          key={choice.id}
          id={choice.name}
          onClick={() => {
            manageChoice(choice);
            updateRoundCounter();
          }}
        >
          {choice.name}
        </button>
      ))
    )}
    { gameEnded === true && (
      <button
        type="button"
        className="button"
        onClick={() => {
          startNewGame();
        }}
      >
        Nouvelle partie
      </button>
    )}
  </section>
);

// == PropTypes
Choices.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  manageChoice: PropTypes.func.isRequired,
  updateRoundCounter: PropTypes.func.isRequired,
  gameEnded: PropTypes.bool.isRequired,
  startNewGame: PropTypes.func.isRequired,
};

// == Export
export default Choices;
