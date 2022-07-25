import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
export interface AccordianTypes {
	id: string
	text: string
	icon?: string
	options: string[]
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
}
