// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Component
const Header = ({
  toggleModes,
  toggleRules,
  openRules,
  openModes,
}) => (
  <header className="header">
    <button
      type="button"
      className="button-header button-rules"
      onClick={() => {
        toggleRules();
        // Condition to close the other menu if it was open to only have one menu open
        if (openModes === true) {
          toggleModes();
        }
      }}
    >
      { (openRules === true && (<span className="open">▶</span>)) || '▶'} Règles
    </button>
    <h1 className="header-title">P3FC</h1>
    <button
      type="button"
      className="button-header button-modes"
      onClick={() => {
        toggleModes();
        // Condition to close the other menu if it was open to only have one menu open
        if (openRules === true) {
          toggleRules();
        }
      }}
    >
      { (openModes === true && (<span className="open">▶</span>)) || '▶'} Modes
    </button>
  </header>
);

// == PropTypes
Header.propTypes = {
  toggleModes: PropTypes.func.isRequired,
  toggleRules: PropTypes.func.isRequired,
  openRules: PropTypes.bool.isRequired,
  openModes: PropTypes.bool.isRequired,
};

// == Export
export default Header;
