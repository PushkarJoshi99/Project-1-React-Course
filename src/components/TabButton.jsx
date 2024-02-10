export default function TabButton({ children, onClick, isSelected }) {
	let classN = undefined;
	if(isSelected) {
		classN = 'active';
	}
	return (
		<li>
			<button className={classN} onClick={onClick}>
				{children}
			</button>
		</li>
	);
}
