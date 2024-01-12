import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Toggle from "./Toggle";
import MenuButton from "./Menu/MenuButton";
import MenuEntries from "./Menu/MenuEntries";
import MenuWrapper from "./Menu/MenuWrapper";

const navigation = [
  { name: "Unterkünfte", href: "/", current: true },
  { name: "Entdeckungen", href: "#", current: false },
  { name: "Online-Entdeckungen", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const buttonRef = React.useRef(null);

  return (
    <div>
      <div
        id="header-top"
        className="w-full h-auto flex justify-between items-center pt-2"
      >
        <div id="logo" className="pl-12 w-[25%]">
          <a href="/">
            <img
              src="/src/assets/bootbnb-logo.svg"
              alt="bootbnb"
              className="w-48"
            />
          </a>
        </div>

        <div className="flex space-x-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current ? "text-black font-semibold" : "text-gray-500 ",
                "rounded-md px-3 py-2 text-md font-Poppins"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="justify-end pr-12 font-Poppins flex flex-row items-center w-[25%]">
          <p className="font-Poppins text-sm font-medium pr-2">
            Als Gastgeber:in loslegen
          </p>
          <Unicons.UilGlobe className="text-2xl" />
          <Toggle>
            <Toggle.Button>
              <MenuWrapper>
                <MenuButton ref={buttonRef} />
                <Toggle.On>
                  <MenuEntries buttonRef={buttonRef} />
                </Toggle.On>
              </MenuWrapper>
            </Toggle.Button>
          </Toggle>
        </div>
      </div>

      <div
        id="header-bottom"
        className="w-full h-auto flex justify-center items-center mt-4 font-Poppins text-sm"
      >
        <div className="w-6/12 h-16 rounded-full border-gray-400 border-solid border flex flex-row items-center">
          <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[34%]">
            <p className="text-xs">Wohin</p>
            <input
              type="text"
              placeholder="Reiseziele suchen"
              className="focus:outline-none bg-transparent"
            />
          </div>
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
    </div>
  );
}

export default Header;
