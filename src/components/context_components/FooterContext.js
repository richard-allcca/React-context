import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";

const FooterContext = () => {
  const { theme } = useContext(ThemeContext);
  const { text } = useContext(LanguageContext);
  return (
    <div>
      <footer className={theme}>
        <h4>{text.footerTitle}</h4>
      </footer>
    </div>
  );
};

export default FooterContext;

// Notas:
// useContext: reemplaza "useState" para consumir los providers
// ThemeContext: valor inicial de los "useContext"