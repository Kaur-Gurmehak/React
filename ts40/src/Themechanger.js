// Themechanger.js
import React from 'react';

function Themechanger({ isDarkMode, onThemeChange }) {
  return (
    <div className={isDarkMode ? 'active' : 'not-active'}>
      <h1>Theme Changer</h1>
      <button onClick={onThemeChange}>{isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}</button>
    </div>
  );
}

export default Themechanger;
