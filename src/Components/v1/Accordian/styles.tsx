import styled from 'styled-components'
interface Props {
	expand: boolean
}

export const AccordionnWrapper = styled.div`
	border-top: 1px solid #d5d5d5 !important;
	border-radius: 0px;
	text-align: left;
	font-size: var(--fs-14);
	font-family: 'FuturaStd-Medium';
	font-weight: bold;
	letter-spacing: 1.3px;
	color: #5a5a5a;
	border: 0px solid var(--transparent);
	cursor: pointer;
	&:last-child {
		border-bottom: 1px solid #d5d5d5 !important;
	}
`

export const TitleBox = styled.div<Props>`
	cursor: pointer;
	padding: var(--pd-15) var(--pd-10) var(--pd-10) var(--pd-15);
	background-color: ${(props) =>
		props.expand === true ? `var(--turquoise-blue-dark)` : `var(--grey-100)`};
	border-radius: ${(props) =>
		props.expand === true ? `10px 10px 0px 0px` : `10px 10px 10px 10px`};
	display: flex;
	justify-content: space-between;
	height: auto;
	color: ${(props) =>
		props.expand === true ? `var(--text-color)` : `var(--text-color-black)`};
	font-weight: var(--fw-md);
	align-items: center;
`

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`
export const Title = styled.span`
	width: calc(100% - 20px);
	display: flex;
	align-items: center;
`

export const Content = styled.div`
	padding: 0px var(--pd-15) var(--pd-15) var(--pd-15);
	background: var(--grey-100);
	border-radius: 0px 0px var(--pd-10) var(--pd-10);
	transition: all 0.5s ease-in-out;
	/* transition: transform 300ms ease-out; */
	max-height: 250px;
	overflow: scroll;
	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border-radius: 0;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--whitish-gray);
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--black);
	}
`

export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`

export const Flex = styled.div`
	display: flex;
`

export const CheckBoxLabel = styled.span`
	padding-left: var(--pd-10);
	z-index: 99;
	opacity: 0.5;
	text-transform: uppercase !important;
	font-size: var(--fs-12);
	&:hover {
		opacity: 1;
		color: var(--black);
	}
`

export const UpArrow = styled.span`
	border: 5px solid var(--transparent);
	border-top: 5px solid #8b8b8b;
	margin-top: -10px;
	float: right;
`

export const DownArrow = styled.span`
	border: 5px solid var(--transparent);
	border-bottom: 5px solid #8b8b8b;
	margin-top: -10px;
	float: right;
`
export const Label = styled.label`
	cursor: pointer;
`
