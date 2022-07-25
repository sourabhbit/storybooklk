import styled, { css, keyframes } from 'styled-components'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { kindENUM } from './Button.types'
import { colors, fontSize, spacing, borderRadius } from './helper'

const getBGKind = (type: kindENUM, color: string, disabled: boolean) => {
	if (disabled && type != kindENUM.tertiary) {
		return color
	} else if (type === kindENUM.border) {
		return '--white'
	} else if (type === kindENUM.tertiary) {
		return '--transparent'
	} else return color
}

const getBorderKind = (type: kindENUM, color: string, disabled: boolean) => {
	if (disabled) {
		return `0px`
	} else if (type === kindENUM.background || type === kindENUM.tertiary) {
		return `1px solid var(--transparent)`
	} else return `1px solid var(${color})`
}

const getColor = (type: kindENUM, color: ThemeENUM, disabled: boolean) => {
	if (disabled) {
		return colors[color].disabledText
	}
	if (type === kindENUM.border || type === kindENUM.tertiary) {
		return colors[color].default
	}
	return colors[color].text
}

const getHoverColor = (type: kindENUM, color: ThemeENUM) => {
	if (type === kindENUM.border || type === kindENUM.tertiary) {
		return colors[color].default
	}
	return colors[color].default
}

const getHoverBorderKind = (type: kindENUM, color: ThemeENUM) => {
	if (type !== kindENUM.tertiary)
		return `1px solid var(${colors[color].default})`
	else return `1px solid var(--transparent)`
}

const getTextDecoration = (type: kindENUM) => {
	if (type === kindENUM.tertiary) {
		return 'underline'
	}
}

const getActiveColor = (color: ThemeENUM) => {
	return colors[color].pressedText
}
const getActiveBgColor = (color: ThemeENUM) => {
	return colors[color].pressedBgColor
}
export const ButtonWrapper = styled.button<{
	styleSize: ComponentSizeENUM
	styleKind: kindENUM
	styleColor: ThemeENUM
	isActive: boolean
	isHover: boolean
	disabled: boolean
	width: string
}>`
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	border-radius: var(${(props) => borderRadius[props.styleSize]});
	padding: var(${(props) => spacing[props.styleSize]});
	font-size: var(${(props) => fontSize[props.styleSize]});
	background-color: var(
		${(props) =>
			getBGKind(
				props.styleKind,
				props.isActive
					? colors[props.styleColor]?.hover
					: props.disabled
					? colors[props.styleColor]?.disabledBgColor
					: colors[props.styleColor]?.default,
				props.disabled
			)}
	);
	border: ${(props) =>
		getBorderKind(
			props.styleKind,
			colors[props.styleColor].default,
			props.disabled
		)};
	color: var(
		${(props) => getColor(props.styleKind, props.styleColor, props.disabled)}
	);
	text-decoration: ${(props) => getTextDecoration(props.styleKind)};
	width: ${(props) => (props.width ? props.width : null)}%;
	display: flex;
	justify-content: center;
	${(props) =>
		props.isHover &&
		css`
			&:hover {
				background-color: var(
					${getBGKind(
						props.styleKind,
						colors[props.styleColor]?.hover,
						props.disabled
					)}
				);
				border: ${getHoverBorderKind(props.styleKind, props.styleColor)};
				color: var(${getHoverColor(props.styleKind, props.styleColor)});
			}
			&:active {
				color: var(${getActiveColor(props.styleColor)});
				border: 1px solid var(--transparent);
				background-color: var(${getActiveBgColor(props.styleColor)});
			}
		`}
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

export const Loader = styled.div<{
	styleColor: ThemeENUM
	styleKind: kindENUM
	disabled: boolean
}>`
	border: 0.15em solid rgba(0, 0, 0, 0.3);
	border-top: 0.15em solid
		var(
			${(props) =>
				getColor(props.styleKind, props.styleColor, props.disabled)}
		);
	border-bottom: 0.15em solid
		var(
			${(props) =>
				getColor(props.styleKind, props.styleColor, props.disabled)}
		);
	border-radius: 50%;
	animation: ${spin} 1s linear infinite;
	-webkit-animation: ${spin} 1s linear infinite;
	display: flex;
	height: 1.2em;
	width: 1.2em;
`

export const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
`
export const IconWrapper = styled.span`
	margin: 5px;
`
