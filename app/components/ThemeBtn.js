"use client";

import { Theme } from "@/lib/ThemeContext";
import { useContext } from "react";

const ThemeBtn = () => {
  const { darkTheme, changeTheme } = useContext(Theme);

  const handleClick = e => {
    changeTheme();
    document.body.classList.toggle("light-mode", darkTheme);
  };

  return (
    <div className="theme-btn" onClick={handleClick}>
      <i className="fas fa-adjust"></i>
    </div>
  );
};

export default ThemeBtn;
