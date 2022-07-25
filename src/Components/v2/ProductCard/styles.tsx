import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { ProductCardTypesENUM, DirectionENUM } from './ProductCard.types'

const colorPalette = {
	darkBlue100: 'var(--dark-blue-100)',
	darkBlue50: 'var(--dark-blue-50)',
	white: 'var(--white)',
}
const sizePalette = (size: ProductCardTypesENUM) => {
	switch (size) {
		case ProductCardTypesENUM.large:
			return {
				cardWidth: '360px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '8px',
				},
				cardHeight: '375px',
				font: {
					head: {
						weight: `var(--fw-regular)`,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '14px',
						letterSpacing: '-0.03em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: true,
					branding: false,
				},
			}
			break
		case ProductCardTypesENUM.medium:
			return {
				cardWidth: '249px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '8px',
				},
				cardHeight: '329px',
				font: {
					head: {
						weight: `var(--fw-regular)`,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '14px',
						letterSpacing: '-0.03em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: true,
					branding: false,
				},
			}
			break
		case ProductCardTypesENUM.narrow:
			return {
				cardWidth: '172px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '12px',
				},
				cardHeight: '319px',
				font: {
					head: {
						weight: `var(--fw-light)`,
						size: '24px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '14px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: true,
					branding: false,
				},
			}
			break
		case ProductCardTypesENUM.small:
			return {
				cardWidth: '172px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '8px',
				},
				cardHeight: '236px',
				font: {
					head: {
						weight: `var(--fw-light)`,
						size: '24px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '14px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: true,
					branding: false,
				},
			}
			break
		case ProductCardTypesENUM.branding:
			return {
				cardWidth: '324px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '11px',
				},
				cardHeight: '126px',
				font: {
					head: {
						weight: `var(--fw-light)`,
						size: '24px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '14px',
						letterSpacing: '-0.02em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: false,
					topBar: false,
					branding: true,
				},
			}
			break
		case ProductCardTypesENUM.ordered:
			return {
				cardWidth: '335px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '8px',
				},
				cardHeight: '329px',
				font: {
					head: {
						weight: 300,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: 400,
						size: '14px',
						letterSpacing: '-0.03em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: false,
					branding: false,
				},
			}
			break
		case ProductCardTypesENUM.imageLess:
			return {
				cardWidth: '360px',
				gap: {
					[DirectionENUM.horizontal]: '10px',
					[DirectionENUM.vertical]: '8px',
				},
				cardHeight: '129px',
				font: {
					head: {
						weight: 300,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: 400,
						size: '14px',
						letterSpacing: '-0.03em',
						color: colorPalette.darkBlue100,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: false,
					topBar: false,
					branding: false,
				},
			}
			break
		default:
			return {
				cardWidth: '360px',
				gap: {
					[DirectionENUM.horizontal]: '8px',
					[DirectionENUM.vertical]: '10px',
				},
				cardHeight: '375px',
				font: {
					head: {
						weight: `var(--fw-regular)`,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue100,
					},
					subhead: {
						weight: `var(--fw-regular)`,
						size: '32px',
						letterSpacing: '-0.05em',
						color: colorPalette.darkBlue50,
					},
				},
				visibility: {
					rating: true,
					swatch: true,
					cardImage: true,
					topBar: true,
					branding: false,
				},
			}
			break
	}
}

// const FlexManager = css<{
// 	direction: 'row' | 'column'

// }>`

// `

const getFontProperties = (
	cardType: ProductCardTypesENUM,
	fontType: 'head' | 'subhead',
	fontProperty: 'weight' | 'color' | 'letterSpacing' | 'size'
) => {
	return sizePalette(cardType).font[fontType][fontProperty]
}

export const ProductCardWrapper = styled.div<{
	styleColor: ThemeENUM
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
	cardType: ProductCardTypesENUM
}>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: ${(props) => sizePalette(props.cardType).cardWidth};
	height: ${(props) => sizePalette(props.cardType).cardHeight};
	border-radius: 4px;
	padding: var(--pd-10);
	background-color: ${colorPalette.white};
`
export const LineFlex = styled.div<{
	vertical?: boolean
	hide?: boolean
	align?: 'flex-end' | 'flex-start' | 'center'
	justify?: 'space-between' | 'center' | 'space-around' | 'normal'
}>`
	display: ${(props) => (props.hide ? 'none' : 'flex')};
	justify-content: ${(props) =>
		props.justify ? props.justify : 'space-between'};
	align-items: ${(props) => (props.align ? props.align : 'center')};
	flex-direction: ${(props) => (props.vertical ? 'column' : 'row')};
	// flex-wrap: wrap;
`
export const VerticalGap = styled.div<{
	cardType: ProductCardTypesENUM
}>`
	display: flex;
	width: 100%;
	height: ${(props) => sizePalette(props.cardType).gap.vertical};
	min-height: ${(props) => sizePalette(props.cardType).gap.vertical};
	min-width: 100%;
`
export const ProductName = styled.h1<{
	cardType: ProductCardTypesENUM
}>`
	font-family: ${TypographyENUM.serif};
	font-style: normal;
	font-weight: ${(props) =>
		getFontProperties(props.cardType, 'head', 'weight')};
	font-size: ${(props) => getFontProperties(props.cardType, 'head', 'size')};
	line-height: 100%;
	letter-spacing: ${(props) =>
		getFontProperties(props.cardType, 'head', 'letterSpacing')};
	color: ${(props) => getFontProperties(props.cardType, 'head', 'color')};
	margin: 0;
`
export const BrandName = styled.h2<{
	cardType: ProductCardTypesENUM
}>`
	font-family: ${TypographyENUM.sans};
	font-style: normal;
	font-weight: ${(props) =>
		getFontProperties(props.cardType, 'subhead', 'weight')};
	font-size: ${(props) =>
		getFontProperties(props.cardType, 'subhead', 'size')};
	line-height: ${(props) =>
		props.cardType === ProductCardTypesENUM.imageLess ? '22px' : '100%'};
	letter-spacing: ${(props) =>
		getFontProperties(props.cardType, 'subhead', 'letterSpacing')};
	color: ${(props) => getFontProperties(props.cardType, 'subhead', 'color')};
	margin: 0;
`
export const BrandInfo = styled(BrandName)``
export const HorizontalGap = styled.div<{
	cardType: ProductCardTypesENUM
}>`
	display: flex;
	height: 100%;
	width: ${(props) => sizePalette(props.cardType).gap.horizontal};
	min-height: 100%;
	min-width: ${(props) => sizePalette(props.cardType).gap.horizontal};
`
export const LensImage = styled.img<{
	cardType: ProductCardTypesENUM
}>`
	mix-blend-mode: multiply;
	display: ${(props) =>
		sizePalette(props.cardType).visibility.cardImage ? 'block' : 'none'};
	// margin: 50px 0; //
	padding: 0;
	width: 100%;
`
export const BrandingContainer = styled.div<{
	cardType: ProductCardTypesENUM
}>`
	width: 324px;
	height: 435px;
	position: relative;
	display: ${(props) =>
		sizePalette(props.cardType).visibility.branding ? 'block' : 'none'};
`
export const BrandingImage = styled.img`
	border-radius: var(--pd-10) var(--pd-10) 0px 0px;
	display: block;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
`
export const BrandingTags = styled.div`
	display: flex;
	padding: 0 var(--pd-10);
	position: absolute;
	bottom: 19px;
	justify-content: flex-start;
	background-color: var(--transparent);
	object-fit: cover;
`
export const OrderedDate = styled.div`
	text-align: start;
	position: absolute;
	font-family: ${TypographyENUM.sans};
	font-style: normal;
	font-weight: 400;
	font-size: var(--fs-14);
	line-height: 100%;
	letter-spacing: -0.03em;
	color: ${colorPalette.darkBlue50};
	span {
		color: ${colorPalette.darkBlue100};
	}
`
export const PurchaseBar = styled.div`
	width: 360px;
	height: 87px;
	padding: var(--pd-20) var(--pd-10);
	border-top: 1px solid var(--dark-blue-100);
	background-color: var(--white);
`
