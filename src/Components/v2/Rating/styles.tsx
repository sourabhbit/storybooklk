import styled from 'styled-components'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-26)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-32)'
	} else {
		return 'var(--fs-40)'
	}
}
export const RatingContainer = styled.div`
	position: relative;
	text-align: center;
`
export const RatingImg = styled.img<{ styleSize: ComponentSizeENUM }>`
	height: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? '75px'
			: props.styleSize === ComponentSizeENUM.medium
			? '125px'
			: props.styleSize === ComponentSizeENUM.large
			? '175px'
			: ''};

	width: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? '75px'
			: props.styleSize === ComponentSizeENUM.medium
			? '125px'
			: props.styleSize === ComponentSizeENUM.large
			? '175px'
			: ''};
`

export const RatingText = styled.div<{
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	/* font-weight: var(--fw-bold); */
	font-family: ${(props) => props.styleFont};
	color: var(--dark-blue-100);
	font-style: normal;
	font-size: ${(props) => getFontSize(props.styleSize)};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
