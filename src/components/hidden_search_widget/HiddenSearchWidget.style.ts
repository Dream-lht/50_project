import styled from 'styled-components';

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(90deg, #7d5fff, #7158e2);
	.search_box {
		display: flex;
		.search {
			width: 0;
			height: 50px;
			outline: none;
			transition: all 0.3s ease;
		}

		.icon_button {
			width: 50px;
			height: 50px;
			border: 0;
			background-color: #fff;

			.icon {
				display: inline-block;
				width: 25px;
				height: 25px;
				background: url('src/assets/icon/search_icon.svg') no-repeat;
				background-size: 100% 100%;
			}
		}

		.active {
			width: 200px;
			height: 50px;
			padding: 15px;
		}
	}
`;

export { SearchContainer };
