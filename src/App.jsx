import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandomInt() {
	return Math.floor(Math.random() * (reactDescriptions.length + 1));
}

function Header() {
	const description = reactDescriptions[getRandomInt()];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
function CoreConcept(props) {
	return (
		<li>
			<img src={props.image} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}
function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						<CoreConcept
							title="Components"
							description="The core UI building block"
							image={componentsImg}
						/>
						<CoreConcept />
						<CoreConcept />
						<CoreConcept />
					</ul>
				</section>
				<h2>Core Concpts</h2>
			</main>
		</div>
	);
}

export default App;
