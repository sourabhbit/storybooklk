import styled from 'styled-components'
import { fontSize } from './helper'
import { ComponentSizeENUM } from 'Types/general'

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

export const FieldWrapper = styled.input<{
	styleSize: ComponentSizeENUM
	disabled: boolean
	error: boolean
	width: string
}>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'auto')};
	border-radius: var(--border-radius-xs);
	padding: var(${(props) => fontSize[props.styleSize]});
	font-size: var(${(props) => fontSize[props.styleSize]});
	color: var(${(props) => getColor(props.error)});
	font-weight: var(--fw-light);
	border: ${(props) => getBorderKind(props.error)};
	font-family: var(--font-sans);
	width: ${(props) => props.width}%;
	&::placeholder {
		color: var(--placeholder);
	}
	&:focus {
		outline: none;
	}
`
