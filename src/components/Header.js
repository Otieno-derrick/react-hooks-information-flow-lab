import React from "react";

function Header({ changeThemeMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {changeThemeMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;