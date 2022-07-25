import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
export interface ProductCardTypes {
	id?: string
	type: ProductCardTypesENUM
	activeIndex: number
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	count: number
	onClick?: () => void
	tags: Tag[]
	productImage?: string
	orderDate: string
	rating: number
	brandName: string
	brandInfo?: string
	brandingImage: string
	originalPrice?: string | number
	discountedPrice?: string | number
	reorderAction?: () => void
	viewSimilarAction?: () => void
	buyAction?: () => void
	productName: string
}

export enum ProductCardTypesENUM {
	large = 'image',
	medium = 'medium',
	narrow = 'narrow',
	small = 'small',
	ordered = 'ordered',
	branding = 'branding',
	imageLess = 'imageLess',
}

export enum PositionENUM {
	left = 'left',
	right = 'right',
}

export enum DimensionENUM {
	height = 'height',
	width = 'width',
}

export enum DirectionENUM {
	vertical = 'vertical',
	horizontal = 'horizontal',
}

type Tag = {
	name: string
}
