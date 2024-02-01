import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import Toggle from "./Toggle";
import MenuButton from "./Menu/MenuButton";
import MenuEntries from "./Menu/MenuEntries";
import MenuWrapper from "./Menu/MenuWrapper";
import Searchbar from "./Searchbar/Searchbar";
import Logo from "../../assets/bootbnb-logo.svg";

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
        className=" w-96 lg:w-full h-auto flex justify-between items-center pt-2"
      >
        <div id="logo" className="pl-12 w-[50%] lg:w-[25%] ">
          <a href="/">
            <img src={Logo} alt="bootbnb" className="w-48" />
          </a>
        </div>

        <div className="lg:flex lg:flex-row hidden lg:space-x-4">
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

        <div className="justify-end pr-2 lg:pr-12 font-Poppins flex flex-row items-center w-[25%]">
          <p className="font-Poppins text-sm font-medium pr-2 hidden lg:block">
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
      <Searchbar />
    </div>
  );
}

export default Header;
