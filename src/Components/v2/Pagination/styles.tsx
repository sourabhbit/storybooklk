import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import {
	PositionENUM,
	PaginationTypesENUM,
	DimensionENUM,
} from './Pagination.types'

const colorPalette = {
	darkBlue100: 'var(--dark-blue-100)',
	inherit: 'var(--inherit)',
	white: 'var(--white)',
}
const fontPalette = {
	small: '--fs-12',
	medium: '--fs-16',
	large: '--fs-20',
}
const sizePalette = (size: ComponentSizeENUM) => {
	switch (size) {
		case ComponentSizeENUM.small:
			return {
				circleSize: '6px',
				lineMargin: {
					[PaginationTypesENUM.video]: '4px',
					[PaginationTypesENUM.storyMode]: '13px',
				},
				lineHeight: '2px',
				lineWidth: {
					normal: '50px',
					active: '130px',
				},
			}
			break
		case ComponentSizeENUM.medium:
			return {
				circleSize: '9px',
				lineMargin: {
					[PaginationTypesENUM.video]: '6px',
					[PaginationTypesENUM.storyMode]: '19.5px',
				},
				lineHeight: '3px',
				lineWidth: {
					normal: '75px',
					active: '195px',
				},
			}
			break
		case ComponentSizeENUM.large:
			return {
				circleSize: '12px',
				lineMargin: {
					[PaginationTypesENUM.video]: '8px',
					[PaginationTypesENUM.storyMode]: '26px',
				},
				lineHeight: '4px',
				lineWidth: {
					normal: '100px',
					active: '260px',
				},
			}
			break
		default:
			return {
				circleSize: '9px',
				lineMargin: {
					[PaginationTypesENUM.video]: '6px',
					[PaginationTypesENUM.storyMode]: '19.5px',
				},
				lineHeight: '3px',
				lineWidth: {
					normal: '75px',
					active: '195px',
				},
			}
			break
	}
}
const getBorderColor = (colorType: ThemeENUM) => {
	if (colorType === ThemeENUM.primary) {
		return colorPalette.darkBlue100
	} else {
		return colorPalette.white
	}
}

const getBGColor = (
	colorType: ThemeENUM,
	active: boolean,
	type: PaginationTypesENUM
) => {
	if (type === PaginationTypesENUM.image) {
		if (colorType === ThemeENUM.primary) {
			if (active) {
				return colorPalette.darkBlue100
			} else {
				return colorPalette.inherit
			}
		} else {
			if (active) {
				return colorPalette.white
			} else {
				return colorPalette.inherit
			}
		}
	} else {
		if (colorType === ThemeENUM.primary) {
			return colorPalette.darkBlue100
		} else {
			return colorPalette.white
		}
	}
}

const getPosition = (
	position: PositionENUM,
	expectedPosition: PositionENUM,
	size: ComponentSizeENUM
) => {
	if (
		position === PositionENUM.left &&
		expectedPosition === PositionENUM.left
	) {
		return `calc(-${sizePalette(size).circleSize} / 2)`
	} else if (
		position === PositionENUM.right &&
		expectedPosition === PositionENUM.right
	) {
		return `calc(-${sizePalette(size).circleSize} / 2)`
	} else {
		return 'auto'
	}
}

const getRightMargin = (
	lineType: PaginationTypesENUM,
	size: ComponentSizeENUM
) => {
	if (lineType === PaginationTypesENUM.video) {
		return sizePalette(size).lineMargin[lineType]
	} else {
		return sizePalette(size).lineMargin[PaginationTypesENUM.storyMode]
	}
}

const getLineDimensions = (
	lineType: PaginationTypesENUM,
	active: boolean,
	dimensionType: DimensionENUM,
	size: ComponentSizeENUM
) => {
	if (lineType === PaginationTypesENUM.video) {
		if (dimensionType === DimensionENUM.height) {
			if (active) return sizePalette(size).lineHeight
			else return `calc(${sizePalette(size).lineHeight} / 2)`
		} else {
			if (active) return sizePalette(size).lineWidth.active
			else return sizePalette(size).lineWidth.normal
		}
	} else {
		if (dimensionType === DimensionENUM.height)
			return sizePalette(size).lineHeight
		else return sizePalette(size).lineWidth.normal
	}
}

export const PaginationWrapper = styled.div<{
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	display: flex;
	justify-content: space-between;
	max-width: fit-content;
	background-color: inherit;
	align-items: flex-end;
	font-size: ${(props) => fontPalette[props.styleSize]};
	font-family: ${(props) => props.styleFont};
`
export const SemiCircleContainer = styled.div<{
	theme: ThemeENUM
	active: boolean
	size: ComponentSizeENUM
}>`
	display: flex;
	position: relative;
	width: calc(3 * ${(props) => sizePalette(props.size).circleSize});
	height: ${(props) => sizePalette(props.size).circleSize};
	background-color: ${(props) =>
		getBGColor(props.theme, props.active, PaginationTypesENUM.image)};
	overflow: hidden;
	transition: background-color 300ms ease-in-out;
	cursor: pointer;
`
export const PaginationCircle = styled.div<{
	position: PositionENUM
	theme: ThemeENUM
	active: boolean
	size: ComponentSizeENUM
}>`
	border-radius: 50%;
	border: calc(${(props) => sizePalette(props.size).circleSize} / 6) solid
		${(props) => getBorderColor(props.theme)};
	background-color: ${(props) =>
		getBGColor(props.theme, props.active, PaginationTypesENUM.image)};
	width: ${(props) => sizePalette(props.size).circleSize};
	height: ${(props) => sizePalette(props.size).circleSize};
	box-sizing: border-box;
	position: absolute;
	right: ${(props) =>
		getPosition(props.position, PositionENUM.right, props.size)};
	left: ${(props) =>
		getPosition(props.position, PositionENUM.left, props.size)};
	top: 0;
	z-index: 1;
	transition: background-color 300ms ease-in-out, border 100ms ease-in-out;
`
export const PaginationLine = styled.div<{
	theme: ThemeENUM
	lineType: PaginationTypesENUM
	active: boolean
	size: ComponentSizeENUM
}>`
	display: block;
	margin-right: ${(props) => getRightMargin(props.lineType, props.size)};
	height: ${(props) =>
		getLineDimensions(
			props.lineType,
			props.active,
			DimensionENUM.height,
			props.size
		)};
	width: ${(props) =>
		getLineDimensions(
			props.lineType,
			props.active,
			DimensionENUM.width,
			props.size
		)};
	background-color: ${(props) =>
		getBGColor(props.theme, props.active, props.lineType)};
	opacity: ${(props) => (props.active ? '1' : '0.2')};
	transition: opacity 300ms ease-in-out, width 300ms ease-in-out,
		height 300ms ease-in-out;
	cursor: pointer;
`
