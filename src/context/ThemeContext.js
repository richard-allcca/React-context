import { createContext, useState } from "react";

const ThemeContext = createContext(); //? 1° creation of context

const initialTheme = "light";

const ThemeProvider = ({ children }) => {
  //? 2° creation of provider
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme }; //? creation of data for props to context

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider }; //? componente que envuelve a los que usen el context
export default ThemeContext; //? context usado en los component para usar la data
