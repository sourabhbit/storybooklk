import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
export interface CheckBoxTypes {
	label: string
	size?: ComponentSizeENUM
	font: TypographyENUM
	count?: number
	checked?: boolean
	id?: string
	disabled?: boolean
	onChange?: () => void
}
