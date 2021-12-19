import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext"; //?context

const HeaderContext = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <header className={theme}>
      <h2>{text.headerTitle}</h2>
      <h3>{text.headerSubtitle}</h3>
      <select name="lenguaje" onChange={handleLanguage}>
        <option>Idioma</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="light">{text.headerLight}</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />
      <label htmlFor="dark">{text.headerDark}</label>
      <button onClick={handleAuth}>
        {auth ? text.buttonLogin : text.buttonLogout}
      </button>
    </header>
  );
};

export default HeaderContext;

// Notas:
// useContext: reemplaza "useState" para consumir los providers 
// ThemeContext: valor inicial de los "useContext" 
