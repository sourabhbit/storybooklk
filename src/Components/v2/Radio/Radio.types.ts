import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'
export interface RadioTypes {
	componentSize?: ComponentSizeENUM
	font: TypographyENUM
	checked?: boolean
	id?: string
	disabled?: boolean
	imageUrl?: string
	onClick?: () => void
}
