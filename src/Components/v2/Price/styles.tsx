import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-18)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-26)'
	} else {
		return 'var(--fs-30)'
	}
}
export const Container = styled.span<{
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
	styleTheme: ThemeENUM
}>`
	color: ${(props) =>
		props.styleTheme === ThemeENUM.primary
			? 'var(--dark-blue-100)'
			: 'var(--white)'};
	font-weight: var(--fw-regular);
	font-family: ${(props) => props.styleFont};
	font-size: ${(props) => getFontSize(props.styleSize)};
`
export const PricingSpan = styled.span`
	position: relative;
	margin: 0 var(--spacing-sm) 0 0;
`
export const StrikeThroughSpan = styled.span<{
	isSpecialPrice: boolean
	color: string
}>`
	position: absolute;
	left: 0;
	right: 0;
	top: 45%;
	bottom: 55%;
	border-top: ${(props) =>
		props.isSpecialPrice ? '2px solid var(--dark-blue-100)' : 'none'};
	border-bottom: ${(props) =>
		props.isSpecialPrice ? `4px solid ${props.color}` : 'none'};
	visibility: ${(props) => (props.isSpecialPrice ? 'visible' : 'hidden')};
`
