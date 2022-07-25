import { ComponentSizeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
export interface RatingsTypes {
	rating: number
	max: number
	componentSize?: ComponentSizeENUM
	id: string
	icon?: iconsENUM
}
