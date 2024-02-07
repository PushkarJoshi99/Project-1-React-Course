import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
	function handleClick() {
		console.log("hello world")
	}
	return (
		<div>
			<Header />
			<main>
				<h2>Core Concpts</h2>
				<section id="core-concepts">
					<ul>
						<CoreConcept {...CORE_CONCEPTS[0]} />
						<CoreConcept {...CORE_CONCEPTS[1]} />
						<CoreConcept {...CORE_CONCEPTS[2]} />
						<CoreConcept {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onClickEvent = {handleClick}>Components</TabButton>
						<TabButton onClickEvent = {handleClick}>JSX</TabButton>
						<TabButton onClickEvent = {handleClick}>Props</TabButton>
						<TabButton onClickEvent = {handleClick}>State</TabButton>
					</menu>
				</section>
			</main>
		</div>
	);
}

export default App;
