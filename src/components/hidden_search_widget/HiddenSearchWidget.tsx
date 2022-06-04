import { useEffect, useState } from 'react';
import { SearchContainer } from './HiddenSearchWidget.style';

export default function HiddenSearchWidget() {
	const [isActive, setIsActive] = useState<boolean>(false);
	let inputRef: any = null;

	const handleActive = (e: any) => {
		//当点击时，进行取反
		setIsActive(!isActive);
	};

	useEffect(() => {
		//当isActive发生变化时
		if (isActive) {
			inputRef.focus();
		}
	}, [isActive]);
	return (
		<SearchContainer>
			<div className="search_box">
				<input
					type="text"
					placeholder="Search..."
					className={`search ${isActive ? 'active' : ''}`}
					ref={el => {
						inputRef = el;
					}}
				/>
				<button
					className="icon_button"
					onClick={e => {
						handleActive(e);
					}}
				>
					<i className="icon"></i>
				</button>
			</div>
		</SearchContainer>
	);
}
