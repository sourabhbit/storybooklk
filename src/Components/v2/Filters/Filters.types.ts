import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
export interface FiltersTypes {
	id: string
	showIcon: boolean
	text: string
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	count?: number
	icon?: iconsENUM
	onClick?: () => void
}
