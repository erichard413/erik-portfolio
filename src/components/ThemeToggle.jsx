import { useState, useEffect } from "react";
import { useTheme } from "../hooks/useThemeContext";
import "../stylesheets/ThemeToggle.css";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(t => (t == "dark" ? "light" : "dark"));
  };
  return (
    <div className="ThemeToggle" onClick={handleClick}>
      <div className={`ThemeToggle-Circle ${theme}`}></div>
    </div>
  );
}
