import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
export interface RatingTypes {
	id: string
	componentSize?: ComponentSizeENUM
	rating: number
	font: TypographyENUM
}
