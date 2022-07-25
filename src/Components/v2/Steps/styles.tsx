import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const getColor = (color: ThemeENUM) => {
	if (color === 'primary') return '--warm-grey-100'
	else return '--white'
}

const getSize = (size: ComponentSizeENUM) => {
	if (size === 'small') return 'var(--fs-16)'
	if (size === 'medium') return 'var(--fs-18)'
	else return 'var(--fs-26)'
}

export const StepWraaper = styled.span<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--pd-10);
	background: var(${(props) => getColor(props.styleColor)});
	font-size: ${(props) => getSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	text-transform: uppercase;
	border-radius: 20px 20px 0px 0px;
`

export const ButtonWrapper = styled.div`
	width: 59px;
	height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--white);
	border: 1px solid var(--white);
	box-sizing: border-box;
	border-radius: 207.782px;
	cursor: pointer;
`
