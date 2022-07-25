import styled from 'styled-components'

export const Container = styled.div`
	position: relative;
	height: 2px;
	outline: none;
`
export const SliderTrack = styled.div<{
	percentOne: number
	percentTwo: number
}>`
	height: 100%;
	margin: auto;
	top: 0;
	bottom: 0;
	background: ${(props) =>
		`linear-gradient(to right, var(--warm-grey-100) ${props.percentOne}% , var(--dark-blue-100) ${props.percentOne}% , var(--dark-blue-100) ${props.percentTwo}%, var(--warm-grey-100) ${props.percentTwo}%)`};
`

export const SliderInput = styled.input.attrs({
	type: 'range',
})`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	-webkit-appearance: none;
	pointer-events: none;
	background: none;
	outline: none;
	::-webkit-slider-thumb {
		pointer-events: auto;
		-webkit-appearance: none;
		width: 57px;
		height: 34px;
		cursor: pointer;
	}
`
export const PriceWrapper = styled.div<{
	left: number
	selected: boolean
}>`
	position: absolute;
	z-index: ${(props) => (props.selected ? 2 : 1)};
	display: flex;
	justify-content: center;
	align-items: center;
	top: -16px;
	bottom: 0;
	width: 57px;
	height: 34px;
	border: 1px solid var(--dark-blue-100);
	border-radius: var(--border-radius-xs);
	background: var(--white);
	pointer-events: none;
	left: ${(props) => `${props.left}%`};
	transform: ${(props) => `translate(-${props.left}%, 0)`};
	::before {
		transform: ${(props) => `translate(-${props.left}%, 0)`};
	}
`

export const InputWrapper = styled.div``
