import styled from 'styled-components'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return '1'
	} else if (size === ComponentSizeENUM.medium) {
		return '1.5'
	} else {
		return '2'
	}
}

const getTextFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-12)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-30)'
	}
}

export const CheckboxConatiner = styled.div`
	display: flex;
	align-items: center;
`

export const CheckboxWrapper = styled.input<{
	styleSize: ComponentSizeENUM
}>`
	cursor: pointer;
	transform: scale(${(props) => getFontSize(props.styleSize)});
`
export const LabelWrapper = styled.span<{
	styleFont: TypographyENUM
	styleSize: ComponentSizeENUM
}>`
	margin-left: var(--spacing-md);
	font-family: ${(props) => props.styleFont};
	font-size: ${(props) => getTextFontSize(props.styleSize)};
`

export const CountWrapper = styled.span<{
	styleFont: TypographyENUM
	styleSize: ComponentSizeENUM
}>`
	font-family: ${(props) => props.styleFont};
	font-size: ${(props) => getTextFontSize(props.styleSize)};
`
