import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Toggle from "../Toggle";
import Wohin from "./Wohin";

const Searchbar = () => {
  return (
    <div
      id="header-bottom"
      className="w-full h-auto flex justify-center items-center mt-4 font-Poppins text-sm"
    >
      <div className="w-6/12 h-16 rounded-full border-gray-400 border-solid border flex flex-row items-center">
        <Wohin />
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[20%]">
          <p className="text-xs">Check In</p>
          <input
            type="text"
            placeholder="Datum hinzufügen"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[20%]">
          <p className="text-xs">Check Out</p>
          <input
            type="text"
            placeholder="Datum hinzufügen"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-row items-center px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[34%] relative">
          <div className="flex flex-col">
            <p className="text-xs">Gäste</p>
            <input
              type="text"
              placeholder="Gäste hinzufügen"
              className="focus:outline-none bg-transparent"
            />
          </div>
          <span className="right-5 absolute">
            <Unicons.UilSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
