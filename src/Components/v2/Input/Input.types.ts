import { ComponentSizeENUM } from 'Types/general'

export interface InputTypes {
	value: string
	placeholder?: string
	type: string
	componentSize?: ComponentSizeENUM
	width: string
	id?: string
	disabled?: boolean
	readonly?: boolean
	error?: boolean
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
