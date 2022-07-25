import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'
export interface NavButtonTypes {
	text?: string
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	id: string
	selected?: boolean
	index: number
	selectedNav: number
	onClick?: () => void
}
