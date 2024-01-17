import React from "react";
import { forwardRef } from "react";

const WohinButton = forwardRef(({}, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col px-6 py-3 hover:bg-slate-300 hover:bg-opacity-30 hover:rounded-full w-[100%]"
    >
      <p className="text-xs">Wohin</p>
      <input
        type="text"
        placeholder="Reiseziele suchen"
        className="focus:outline-none bg-transparent"
        onClick={() => console.log("toggleMAp")}
      />
    </div>
  );
});

export default WohinButton;
