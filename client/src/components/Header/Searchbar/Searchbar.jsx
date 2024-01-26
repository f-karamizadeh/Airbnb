import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import Toggle from "../Toggle";
import Wohin from "./Wohin";
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchData, setSearchData] = useState({ ort: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const [key, value] = Object.entries(searchData)[0];
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };
  return (
    <div
      id="header-bottom"
      className="w-full h-auto lg:flex justify-center items-center mt-4 font-Poppins text-sm hidden"
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-6/12 h-16 rounded-full border-gray-400 border-solid border flex flex-row items-center"
      >
        <Wohin onChange={onChange} searchData={searchData} />
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[19%]">
          <p className="text-xs">Check In</p>
          <input
            type="text"
            placeholder="Datum hinzufügen"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[19%]">
          <p className="text-xs">Check Out</p>
          <input
            type="text"
            placeholder="Datum hinzufügen"
            className="focus:outline-none bg-transparent"
          />
        </div>
        <div className="inline-block h-12 w-0.5 bg-gray-100 opacity-100"></div>

        <div className="flex flex-row items-center px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[38%] relative">
          <div className="flex flex-col">
            <p className="text-xs">Gäste</p>
            <input
              type="text"
              placeholder="Gäste hinzufügen"
              className="focus:outline-none bg-transparent"
            />
          </div>
          <button
            className="right-2 absolute bg-teal-300 p-3 rounded-full
           hover:bg-teal-400 "
          >
            <Unicons.UilSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
