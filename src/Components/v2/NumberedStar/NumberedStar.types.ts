import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
export interface NumberedStarTypes {
	componentSize?: ComponentSizeENUM
	rating: number
	id: string
	font: TypographyENUM
	icon?: iconsENUM
}
