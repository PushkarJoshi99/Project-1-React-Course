import TabButton from "../TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data"

export default function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}
	let tabContent = <p>Please select a topic</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}
	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				<TabButton
					isSelected={selectedTopic === "components"}
					onClick={() => handleSelect("components")}
				>
					Components
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "jsx"}
					onClick={() => handleSelect("jsx")}
				>
					jsx
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "props"}
					onClick={() => handleSelect("props")}
				>
					props
				</TabButton>
				<TabButton
					isSelected={selectedTopic === "state"}
					onClick={() => handleSelect("state")}
				>
					state
				</TabButton>
			</menu>
			{tabContent}
		</section>
	);
}
