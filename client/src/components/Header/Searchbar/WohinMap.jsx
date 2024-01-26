import React from "react";
import MapFlexibel2 from "../../../assets/MapFlexibel2.webp";
import MapSuedostasien from "../../../assets/MapSuedostasien.webp";
import MapSpanien from "../../../assets/MapSpanien.webp";
import MapUSA from "../../../assets/MapUSA.webp";
import MapNiederlande from "../../../assets/MapNiederlande.webp";
import MapAfrika from "../../../assets/MapAfrika.webp";
import { useContext, useEffect, useRef } from "react";
import { ToggleContext } from "../Toggle/Toggle";

const WohinMap = ({ buttonRef }) => {
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

  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="absolute w-[30rem] left-80 bg-white z-50 m-9 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-sm rounded-xl  font-light p-3"
    >
      <p className="p-3 font-semibold">Nach Regionen suchen</p>
      <ul className="flex gap-4">
        <li>
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapFlexibel2}
          />
          <p className="p-3 ">Ich bin flexibel</p>
        </li>
        <li>
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapSuedostasien}
            alt=""
          />
          <p className="p-3">Südostasien</p>
        </li>
        <li>
          {" "}
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapSpanien}
            alt=""
          />
          <p className="p-3">Spanien</p>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapUSA}
            alt=""
          />
          <p className="p-3">USA</p>
        </li>
        <li>
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapNiederlande}
            alt=""
          />
          <p className="p-3">Niederlande</p>
        </li>
        <li>
          <img
            className="border hover:border-gray-600 rounded-lg "
            src={MapAfrika}
            alt=""
          />
          <p className="p-3">Afrika</p>
        </li>
      </ul>
    </div>
  );
};

export default WohinMap;
