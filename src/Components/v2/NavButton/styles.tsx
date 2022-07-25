import styled from 'styled-components'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-12)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-30)'
	}
}

export const NavButtonWrapper = styled.div<{
	selected: boolean
}>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: var(--pd-10) var(--pd-20);
	border: 1px solid var(--dark-blue-100);
	box-sizing: border-box;
	border-radius: 207.782px;
	background-color: ${(props) =>
		props.selected ? 'var(--dark-blue-100)' : ''};

	margin: 0 var(--spacing-sm);
`

export const TextWrapper = styled.span<{
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
	selected: boolean
}>`
	font-style: normal;
	font-weight: var(--fw-semi-bold);
	font-size: ${(props) => getFontSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	line-height: 19px;
	text-align: center;
	letter-spacing: -0.02em;

	color: ${(props) =>
		props.selected ? 'var(--white)' : 'var(--dark-blue-100)'};

	margin: 0 var(--spacing-sm);
`
