import { ThemeContext } from "@contexts/ThemeContext";
import { useContext } from "react";

import { ThemeItem } from "@contexts/ThemeContext";

export const Header = () => {
  const { theme } = useContext(ThemeContext); //consume ThemeContext

  return (
    <p className="display-3 text-center fst-italic" 
    style={{color: theme.fgColor}}>
      A simple useContext example
    </p>
  );
};
