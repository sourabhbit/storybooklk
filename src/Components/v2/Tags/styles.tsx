import styled from 'styled-components'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'

const getColor = (color: ThemeENUM) => {
	if (color === 'primary') return '--tortoiseshell-25'
	else return '--light-blue-50'
}

const getSize = (size: ComponentSizeENUM) => {
	if (size === 'small') return 'var(--fs-12)'
	if (size === 'medium') return 'var(--fs-16)'
	else return 'var(--fs-18)'
}

export const TagWraaper = styled.span<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: inline-block;
	padding: var(--pd-5) var(--pd-10);
	background: var(${(props) => getColor(props.styleColor)});
	font-size: ${(props) => getSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	border-radius: 2px;
	text-transform: uppercase;
`
