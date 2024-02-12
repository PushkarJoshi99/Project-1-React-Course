import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/Header/CoreConcepts.jsx";
import Examples from "./components/Header/Examples.jsx";


function App() {
	return (
		<>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
