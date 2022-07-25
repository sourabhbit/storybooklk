import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'

export interface TagTypes {
	id: string
	name: string
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
}
