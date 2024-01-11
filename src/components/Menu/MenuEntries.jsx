import { React } from "react";

function MenuEntries() {
  return (
    <div className="absolute z-10 top-full">
      <ul>
        <li>Registrieren</li>
        <li>Einloggen</li>
      </ul>
      <ul>
        <li>Geschenkkarten</li>
        <li>Als Gastgeber:in einloggen</li>
        <li>Hilfe-Center</li>
      </ul>
    </div>
  );
}

export default MenuEntries;
