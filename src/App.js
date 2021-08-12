import "./App.css";

import MyPage from "./components/content/MyPage";
import MyPageContext from "./components/context_component/MyPageContext";
import CrudApi from "./components/crud_helpers/CrudApi";
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
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
