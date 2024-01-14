import React from "react";

const WohinButton = () => {
  return (
    <input
      type="text"
      placeholder="Reiseziele suchen"
      className="focus:outline-none bg-transparent"
      onClick={() => console.log("toggleMAp")}
    />
  );
};

export default WohinButton;
