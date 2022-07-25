import styled from 'styled-components'
import { tokens } from '../../../Styles/tokens'
import { sizesENUM } from './SwitchButton.types'

export const SwitchButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.2vw;
	line-height: 1.4;
	letter-spacing: 1.5px;
`

export const SwitchWrapper = styled.div`
	padding-right: var(--pd-20);
	padding-left: var(--pd-20);
`

export const CmnToggleInputWrapper = styled.input`
	position: absolute;
	visibility: hidden;
	padding: 2px;
`

export const LeftSpanWrapper = styled.span<{
	checked: boolean
	styleSize: sizesENUM
}>`
	color: ${(props) =>
		!props.checked ? 'var(--blashish-gray)' : 'var(--black)'};
	font-size: ${(props) => tokens.fontSize[props.styleSize]};
`

export const RightSpanWrapper = styled.span<{
	checked: boolean
	styleSize: sizesENUM
}>`
	color: ${(props) =>
		!props.checked ? 'var(--black)' : 'var(--blashish-gray)'};
	font-size: ${(props) => tokens.fontSize[props.styleSize]};
`

export const CmnToggleLabelWrapper = styled.label<{
	checked: boolean
}>`
	display: block;
	position: relative;
	cursor: pointer;
	outline: none;
	user-select: none;
	padding: 2px;
	width: 70px;
	height: 25px;
	background-color: #dddddd;
	border-radius: 60px;
	&:before {
		display: block;
		position: absolute;
		top: 1px;
		left: 1px;
		bottom: 1px;
		content: '';
		right: 1px;
		background-color: ${(props) =>
			!props.checked ? 'var(--blashish-gray)' : 'var(--whitish-gray)'};
		border-radius: 60px;
		transition: background 0.4s;
		&:checked {
			background-color: var(--blashish-gray);
		}
	}
	&:after {
		display: block;
		position: absolute;
		top: 1px;
		left: ${(props) => (!props.checked ? '1px' : 'inherit')};
		right: ${(props) => (props.checked ? '1px' : 'inherit')};
		bottom: 1px;
		content: '';
		width: 24px;
		background-color: var(--white);
		border-radius: 100%;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
		transition: margin 0.4s;
		&:checked {
			margin-left: 44px;
		}
	}
`
