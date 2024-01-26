import { React, useState, useEffect, useRef, useContext } from "react";
import { ToggleContext } from "../Toggle/Toggle";

function MenuEntries({ buttonRef }) {
  const menuRef = useRef(null);

  const { toggle } = useContext(ToggleContext);

  const handleClickOutside = (event) => {
    // Überprüfen, ob das geklickte Element der Toggle-Button ist
    if (buttonRef.current && buttonRef.current.contains(event.target)) {
      return; // Wenn ja, die Funktion einfach zurückgeben
    }
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      toggle((prev) => !prev);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div
        ref={menuRef}
        className="absolute w-[16rem] bg-white z-50 top-full m-9 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-sm rounded-xl -right-8 font-light"
      >
        <ul>
          <li className="p-3 font-semibold hover:bg-gray-100">Registrieren</li>
          <li className="p-3 border-b-2 hover:bg-gray-100">Einloggen</li>
        </ul>
        <ul>
          <li className="p-3 hover:bg-gray-100">Geschenkkarten</li>
          <li className="p-3 hover:bg-gray-100">Als Gastgeber:in loslegen</li>
          <li className="p-3 hover:bg-gray-100">Hilfe-Center</li>
        </ul>
      </div>
    </div>
  );
}

export default MenuEntries;
