import { React } from "react";

function MenuEntries() {
  return (
    <div className="absolute w-[18rem] z-10 top-full p-9 shadow-xl rounded-xl right-1 font-light">
      <ul>
        <li className="p-1 font-semibold">Registrieren</li>
        <li className="p-1">Einloggen</li>
      </ul>
      <ul>
        <li className="p-1">Geschenkkarten</li>
        <li className="p-1">Als Gastgeber:in loslegen</li>
        <li className="p-1">Hilfe-Center</li>
      </ul>
    </div>
  );
}

export default MenuEntries;
