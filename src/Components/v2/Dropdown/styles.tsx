import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const getSize = (size: ComponentSizeENUM) => {
	if (size === 'small') return 'var(--fs-12)'
	if (size === 'medium') return 'var(--fs-16)'
	else return 'var(--fs-18)'
}

const getBGColor = (colorType: ThemeENUM) => {
	if (colorType === ThemeENUM.primary) {
		return 'var(--white)'
	} else {
		return 'var(--dark-blue-100)'
	}
}

const getColor = (colorType: ThemeENUM, count: boolean) => {
	if (colorType === ThemeENUM.primary) {
		return count ? 'var(--dark-blue-50)' : 'var(--dark-blue-100)'
	} else {
		return count ? 'var(--see-green-25)' : 'var(--see-green-100)'
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

export const DropdownWrapper = styled.div<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: flex;
	flex-direction: column;
	color: ${(props) => getColor(props.styleColor, false)};
	font-size: ${(props) => getFontSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
`

export const SelectWrapper = styled.div<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	showOptions: boolean
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100px;
	height: 40px;
	background-color: ${(props) => getBGColor(props.styleColor)};
	border: none;
	outline: none;
	border-radius: ${(props) =>
		props.showOptions
			? `var(--border-radius-xs) var(--border-radius-xs) 0 0`
			: `var(--border-radius-xs)`};
	text-align: center;
	font-size: ${(props) => getSize(props.styleSize)};
	cursor: pointer;
`

export const OptionWrapper = styled.span<{
	styleSize: ComponentSizeENUM
	styleColor: ThemeENUM
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => getBGColor(props.styleColor)};
	width: 100px;
	height: 40px;
	border: none;
	text-align: center;
	font-size: ${(props) => getSize(props.styleSize)};
	cursor: pointer;
	&:last-child {
		border-radius: 0 0 var(--border-radius) var(--border-radius);
	}
`
