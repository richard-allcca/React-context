import "./App.css";
import MainPage from "./components/content/MainPage";
import MainPageContext from "./components/context_component/MainPageContext";
import CrudApi from "./components/crud_components/CrudApi";
import { CrudProvider } from "./context/CrudContext";

function App() {
  return (
    <div className="App">
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentación
      </a>
      <hr />
      <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />
      <MainPageContext />
      <hr />
      <MainPage />
    </div>
  );
}

export default App;
