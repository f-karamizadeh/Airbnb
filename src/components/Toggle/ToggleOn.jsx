import { ToggleContext } from "./Toggle";
import { useContext } from "react";

function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  console.log(on);

  return <>{on && <div>{children}</div>}</>;
}

export default ToggleOn;
