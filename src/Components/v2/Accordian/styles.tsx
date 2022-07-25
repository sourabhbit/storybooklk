import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-12)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-30)'
	}
}

export const AccordianContainer = styled.div<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: flex;
	flex-direction: column;
	font-size: ${(props) => getFontSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	height: 100px;
`

export const AccordianHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: none;
	outline: none;
	text-align: center;
	cursor: pointer;
`

export const AccordianText = styled.span<{
	// styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	// styleFont: TypographyENUM
}>`
	font-size: ${(props) => getFontSize(props.styleSize)};
`

export const AccordianIcon = styled.span`
	width: 36px;
	height: 24px;
	border: 1px solid var(--dark-blue-100);
	border-radius: 207.782px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const OptionWrapper = styled.span`
	display: flex;
	flex-direction: column;
	padding-top: var(--pd-20);
`

export const Option = styled.span<{
	styleSize: ComponentSizeENUM
	styleColor: ThemeENUM
}>`
	height: 40px;
	font-size: ${(props) => getFontSize(props.styleSize)};
`
