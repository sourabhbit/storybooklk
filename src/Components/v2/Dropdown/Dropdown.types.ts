import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
export interface DropdownTypes {
	id: string
	options: string[]
	SelectedIndex?: number
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
}
