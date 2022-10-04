import { AuthProvider } from "../../context/AuthContext";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";
// paginas de contenido
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MainPageContext = () => {
   return (
      <div className="my-page">
         <ThemeProvider>
            <LanguageProvider>
               <AuthProvider>
                  <HeaderContext />
                  <MainContext />
                  <FooterContext />
               </AuthProvider>
            </LanguageProvider>
         </ThemeProvider>
      </div>
   );
};

export default MainPageContext;

// Notas:
//? Aqui! solo se manda a llamar a los providers
// No olvides eliminar el paso de propiedades si usas context en cada componente
