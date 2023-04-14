import "./App.css";
import MainPageContext from "./components/context_components/MainPageContext";
import CrudApi from "./components/crud_components/CrudApi";
import MainPage from "./components/normal-components/MainPage";
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
			<MainPage />
			<hr />
			<MainPageContext />
			<hr />
			<CrudProvider>
				<CrudApi />
			</CrudProvider>
		</div>
	);
}

export default App;
