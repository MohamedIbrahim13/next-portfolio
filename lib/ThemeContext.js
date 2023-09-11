"use client";
import { createContext, useState } from "react";

export const Theme = createContext();

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDark] = useState(true);

  function changeTheme() {
    setDark(prevState => {
      return !prevState;
    });
  }
  return (
    <Theme.Provider value={{ darkTheme, changeTheme }}>
      {children}
    </Theme.Provider>
  );
};

export default ThemeProvider;
