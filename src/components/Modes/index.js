// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './modes.scss';

// == Component
const Modes = ({
  modes,
  handleModeSelected,
  modeSelected,
}) => (
  <section className="modes-container">
    <p>
      Vous pouvez choisir parmi le nombre incroyable de quatre modes de jeu.
    </p>
    <div className="mode-selected">
      Mode séléctionné : {modeSelected}
    </div>
    <div className="modes-list">
      {modes.map((mode) => (
        <div key={mode.id} className="mode" id={mode.name}>
          <button
            type="button"
            className="modes-button"
            id={mode.name}
            onClick={() => {
              handleModeSelected(mode);
            }}
          >
            {mode.name}
          </button>
          <div className="mode-infos">
            {mode.name === 'Infini' && (
              ' Aucune limite de points.'
            )}
            {mode.name !== 'Infini' && (
              ` Le joueur dois gagner ${mode.scores.player} fois
              et l'ordinateur dois gagner ${mode.scores.computer} fois.`
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// == PropTypes
Modes.propTypes = {
  modes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      scores: PropTypes.shape({
        player: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
        computer: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  handleModeSelected: PropTypes.func.isRequired,
  modeSelected: PropTypes.string.isRequired,
};

// == Export
export default Modes;
