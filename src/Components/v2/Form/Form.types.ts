import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'

export interface FormInputTypes {
	value: string
	placeholder?: string
	name: string
	type: string
	componentSize?: ComponentSizeENUM
	width: string
	id?: string
	disabled?: boolean
	readonly?: boolean
	error?: boolean
	showRightIcon: boolean
	showLeftIcon: boolean
	rightIcon?: iconsENUM
	leftIcon?: iconsENUM
	theme: ThemeENUM
	onChange?: () => void
}

export enum typeENUM {
	text = 'text',
	password = 'password',
	email = 'email',
	number = 'number',
}

export const inputs = {
	type: typeENUM,
}
