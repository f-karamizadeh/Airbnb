import React from "react";
import Toggle from "../Toggle";
import WohinButton from "./WohinButton";
import WohinMap from "./WohinMap";

const Wohin = () => {
  return (
    <div className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[34%]">
      <p className="text-xs">Wohin</p>
      <Toggle>
        <Toggle.Button>
          <WohinButton />
        </Toggle.Button>
        <Toggle.On>
          <WohinMap />
        </Toggle.On>
      </Toggle>
    </div>
  );
};

export default Wohin;
