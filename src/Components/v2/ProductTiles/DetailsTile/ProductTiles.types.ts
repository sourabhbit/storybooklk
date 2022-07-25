import { ComponentSizeENUM, ThemeENUM } from 'Types/general'

export interface ProductTilesTypes {
	product?: string
	price?: string
	specialPrice?: string
	isSpecialPrice?: boolean
	componentSize?: ComponentSizeENUM
	image?: string
	id: string
	styleTheme: ThemeENUM
	strikeThroughColor: string
}
