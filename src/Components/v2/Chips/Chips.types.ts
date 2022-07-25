import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
export interface ChipsTypes {
	id: string
	showIcon: boolean
	text: string
	color?: string
	showColor?: boolean
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	count?: number
	icon?: iconsENUM
}
