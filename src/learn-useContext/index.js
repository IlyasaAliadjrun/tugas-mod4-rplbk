import React, { useState, useContext } from "react";
import "./index.css";
const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};

// buat tugas mod 4
const temas = {
  sky:{
    id: 1,
    foreground: "#ffffff",
    background: "#0babe6"
  },
  forest:{
    id: 2,
    foreground: "#000000",
    background: "#0bcf04"
  }
}
const TemaContext = React.createContext(temas.sky);

//------------------------------------------------

const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const [theme, setTheme] = useState(themes.dark);
  
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div
        className="Main"
        style={{ background: theme.background, color: theme.foreground }}
      >
        <p className="Text">Theme by useContext</p>
        <p>KELOMPOK20</p>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}


export {TemaContext ,temas};
