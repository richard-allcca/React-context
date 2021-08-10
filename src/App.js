import "./App.css";

import MyPage from "./components/content/MyPage";
import MyPageContext from "./components/context-component/MyPageContext";

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
      <MyPageContext />
      <hr />
      <MyPage />
    </div>
  );
}

export default App;
