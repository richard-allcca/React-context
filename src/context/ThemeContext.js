import { createContext, useState } from "react";

// Contexto
const ThemeContext = createContext(); 

const initialTheme = "light";

// Preveedor
const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const data = { theme, handleTheme }; 

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider }; //? componente que envuelve a los que usen el context
export default ThemeContext; //? context usado en los component para usar la data

// Notas:
// 1. createContext() - creation of context 
// 1.1 ThemeContext: para usar el provider
// 2. ThemeProvider({children}) - creation of provider
// 3. data - obj whith for the props to context

// Return
// 4. ThemeContext.Provider => contexto para usar el los components
// 5 children - contenido de los componentes donde se use el "provider"

// Export
// {ThemeProvider} - provider
// ThemeContext - context(usado como valor inicial en "useState")
