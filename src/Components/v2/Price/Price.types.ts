import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

export interface PriceTypes {
	price: string
	isSpecialPrice: boolean
	specialPrice?: string
	componentSize?: ComponentSizeENUM
	id: string
	font?: TypographyENUM
	strikeThroughColor?: string
	styleTheme?: ThemeENUM
}
