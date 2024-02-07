export default function TabButton({ children, onClickEvent }) {
	return (
		<li>
			<button onClick={onClickEvent}>{children}</button>
		</li>
	);
}
