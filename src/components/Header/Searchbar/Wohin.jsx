import React, { useRef } from "react";
import Toggle from "../Toggle";
import WohinButton from "./WohinButton";
import WohinMap from "./WohinMap";

const Wohin = () => {

  const buttonRef = useRef(null)

  return (
    <Toggle>
      <Toggle.Button>
        <WohinButton ref={buttonRef} />
      </Toggle.Button>
      <Toggle.On>
        <WohinMap buttonRef={buttonRef}/>
      </Toggle.On>
    </Toggle>
  );
};

export default Wohin;
