import React, { useRef } from "react";
import Toggle from "../Toggle";
import WohinButton from "./WohinButton";
import WohinMap from "./WohinMap";

const Wohin = ({ onChange, searchData }) => {
  const buttonRef = useRef(null);

  return (
    <Toggle>
      <Toggle.Button>
        <WohinButton
          ref={buttonRef}
          onChange={onChange}
          searchData={searchData}
        />
      </Toggle.Button>
      <Toggle.On>
        <WohinMap buttonRef={buttonRef} />
      </Toggle.On>
    </Toggle>
  );
};

export default Wohin;
