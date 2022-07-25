import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { kindENUM } from './Capsule.types'
import { fontSize, borderRadius } from './helper'

export const Text = styled.span`
	padding: var(--pd-15);
`

export const ButtonWrapper = styled.button<{
	styleSize: ComponentSizeENUM
	styleKind: kindENUM
	styleColor: ThemeENUM
}>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	border-radius: var(${(props) => borderRadius[props.styleSize]});
	padding: 0;
	border: 0px;
	font-size: var(${(props) => fontSize[props.styleSize]});
	overflow: hidden;
`

export const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
`
export const IconWrapper = styled.span`
	height: 120px;
	width: 100%;
	display: flex;
`
