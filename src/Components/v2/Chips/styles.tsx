import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const getBGColor = (colorType: ThemeENUM) => {
	if (colorType === ThemeENUM.primary) {
		return 'var(--dark-blue-100)'
	} else {
		return 'var(--white)'
	}
}

const getColor = (colorType: ThemeENUM, count: boolean) => {
	if (colorType === ThemeENUM.primary) {
		return count ? 'var(--see-green-25)' : 'var(--see-green-100)'
	} else {
		return count ? 'var(--dark-blue-50)' : 'var(--dark-blue-100)'
	}
}

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-12)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-30)'
	}
}

const getMargin = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--spacing-sm)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--spacing-md)'
	} else {
		return 'var(--spacing-lg)'
	}
}

const getHeight = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return '15px'
	} else if (size === ComponentSizeENUM.medium) {
		return '20px'
	} else {
		return '30px'
	}
}

const getWidth = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return '15px'
	} else if (size === ComponentSizeENUM.medium) {
		return '20px'
	} else {
		return '30px'
	}
}

export const ChipWrapper = styled.div<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--spacing-sm) var(--spacing-md);
	border-radius: var(--border-radius);
	background-color: ${(props) => getBGColor(props.styleColor)};
	color: ${(props) => getColor(props.styleColor, false)};
	font-size: ${(props) => getFontSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	max-width: fit-content;
`
export const CountWrapper = styled.span<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
}>`
	color: ${(props) => getColor(props.styleColor, true)};
	margin-left: ${(props) => getMargin(props.styleSize)};
`

export const ColorWrapper = styled.span<{
	styleSize: ComponentSizeENUM
}>`
	background: green;
	border-radius: 50%;
	width: ${(props) => getWidth(props.styleSize)};
	height: ${(props) => getHeight(props.styleSize)};
`

export const TextWrapper = styled.span<{
	styleSize: ComponentSizeENUM
}>`
	margin-left: ${(props) => getMargin(props.styleSize)};
`
