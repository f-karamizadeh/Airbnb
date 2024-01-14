import React from "react";
import MapFlexibel from "../../../assets/MapFlexibel.jpeg";
import MapSuedostasien from "../../../assets/MapSuedostasien.webp";
import MapSpanien from "../../../assets/MapSpanien.webp";
import MapUSA from "../../../assets/MapUSA.webp";
import MapNiederlande from "../../../assets/MapNiederlande.webp";
import MapAfrika from "../../../assets/MapAfrika.webp";

const WohinMap = () => {
  return (
    <div className="absolute w-[16rem] bg-white z-50 m-9 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] text-sm rounded-xl  font-light">
      <p className="p-3 font-semibold hover:bg-gray-100">
        Nach Regionen suchen
      </p>
      <ul className="flex">
        <li>
          <img src={MapFlexibel} />
          <p className="p-3 hover:bg-gray-100">Ich bin flexibel</p>
        </li>
        <li>
          <img src={MapSuedostasien} alt="" />
          <p className="p-3 hover:bg-gray-100">Südostasien</p>
        </li>
        <li>
          {" "}
          <img src={MapSpanien} alt="" />
          <p className="p-3 hover:bg-gray-100">Spanien</p>
        </li>
      </ul>
      <ul className="flex">
        <li>
          {" "}
          <img src={MapUSA} alt="" />
          <p className="p-3 hover:bg-gray-100">USA</p>
        </li>
        <li>
          <img src={MapNiederlande} alt="" />
          <p className="p-3 hover:bg-gray-100">Niederlande</p>
        </li>
        <li>
          <img src={MapAfrika} alt="" />
          <p className="p-3 hover:bg-gray-100">Afrika</p>
        </li>
      </ul>
    </div>
  );
};

export default WohinMap;
