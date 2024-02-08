import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
	const [selectedTopic, setSelectedTopic] = useState('This is an initial state');

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
		console.log(selectedTopic);
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
						<TabButton onClick={() => handleSelect("components")}>
							Components
						</TabButton>
						<TabButton onClick={() => handleSelect("jsx")}>jsx</TabButton>
						<TabButton onClick={() => handleSelect("props")}>props</TabButton>
						<TabButton onClick={() => handleSelect("state")}>state</TabButton>
					</menu>
					{selectedTopic}
				</section>
			</main>
		</div>
	);
}

export default App;
