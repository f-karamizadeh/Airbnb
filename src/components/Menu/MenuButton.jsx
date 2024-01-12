import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { forwardRef } from "react";

const MenuButton = forwardRef(({}, ref) => {
  return (
    <button
      ref={ref}
      className="ml-2 rounded-full w-24 h-12 border-gray-400 border-solid border flex flex-row justify-around items-center px-2 hover:shadow-lg transition-shadow duration-200"
    >
      <Unicons.UilBars size={20} />
      <Unicons.UilUserCircle size={32} />
    </button>
  );
});

export default MenuButton;
