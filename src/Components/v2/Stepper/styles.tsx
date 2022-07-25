import styled from 'styled-components'

export const StepsWrapper = styled.div`
	width: 100%;
`

export const ProgressBar = styled.ul`
	counter-reset: step;
	display: flex;
	flex-direction: row;
	padding: 0;
`
export const List = styled.li<{
	active: boolean
}>`
	list-style-type: none;
	width: 33.33%;
	text-align: center;

	&::before {
		content: 'F';
		width: 30px;
		height: 30px;
		line-height: 30px;
		border: ${(props) =>
			props.active ? '1px solid green' : '1px solid black'};
		display: block;
		text-align: center;
		margin: 0 auto 10px auto;
		border-radius: 50%;
		background-color: var(--white);
	}

	&::after {
		content: '';
		display: flex;
		width: 60%;
		height: 1px;
		margin-top: -70px;
		margin-left: -30%;
		background-color: ${(props) =>
			props.active ? `var(--vivid-green-100)` : `var(--tortoiseshell-100)`};
		z-index: -1;
	}

	&:first-child::after {
		content: none;
	}

	&:active {
		color: var(--vivid-green-100);
	}
`
