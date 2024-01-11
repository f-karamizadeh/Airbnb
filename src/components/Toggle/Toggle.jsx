import { createContext, useState } from "react";

const ToggleContext = createContext(null);

function Toggle({ children }) {
  const [on, setOn] = useState(false);

  const toggle = () => {
    setOn((prevOn) => !prevOn);
  };

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      <div className="toggle-component">{children}</div>
    </ToggleContext.Provider>
  );
}

export default Toggle;

export { ToggleContext };
