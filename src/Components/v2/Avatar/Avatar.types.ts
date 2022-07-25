import { ComponentSizeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'

export interface AvatarTypes {
	componentSize?: ComponentSizeENUM
	id: string
	icon?: iconsENUM
	name?: string
	image?: string
}
