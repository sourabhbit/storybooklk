import styled from 'styled-components'
import { fontSize } from './helper'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'

const getBorderKind = (error: boolean) => {
	if (error) {
		return `1px solid var(--terracotta-100)`
	} else return `0px`
}

const getColor = (error: boolean) => {
	if (error) {
		return '--terracotta-100'
	}
	return '--dark-blue-100'
}

const getBGColor = (colorType: ThemeENUM) => {
	if (colorType === ThemeENUM.primary) {
		return 'var(--see-green-100)'
	} else {
		return 'var(--white)'
	}
}

export const InputWrapper = styled.input<{
	styleSize: ComponentSizeENUM
	styleColor: ThemeENUM
	error: boolean
}>`
	font-size: var(${(props) => fontSize[props.styleSize]});
	color: var(${(props) => getColor(props.error)});
	font-weight: var(--fw-light);
	width: 100%;
	border: 0px;
	font-family: var(--font-sans);
	background-color: ${(props) => getBGColor(props.styleColor)};
	&::placeholder {
		color: var(--placeholder);
	}
	&:focus {
		outline: none;
	}
`

export const FlexWrapper = styled.div<{
	styleSize: ComponentSizeENUM
	styleColor: ThemeENUM
	width: string
	error: boolean
}>`
	display: flex;
	align-items: center;
	width: ${(props) => props.width}%;
	padding: var(${(props) => fontSize[props.styleSize]});
	border: ${(props) => getBorderKind(props.error)};
	border-radius: var(--border-radius-xs);
	justify-content: space-between;
	background-color: ${(props) => getBGColor(props.styleColor)};
`
export const LeftIconWrapper = styled.div`
	margin-right: var(--spacing-lg);
`
