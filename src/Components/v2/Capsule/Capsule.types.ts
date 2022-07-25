import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
export interface ButtonTypes {
	id: string
	text?: string
	kind?: kindENUM
	componentSize?: ComponentSizeENUM
	theme?: ThemeENUM
	showRightImage?: boolean
	showLeftImage?: boolean
	rightImage?: string
	leftImage?: string
	onClick?: () => void
	buttonColor?: string
}

export enum kindENUM {
	background = 'background',
	border = 'border',
	tertiary = 'tertiary',
}

export enum typeENUM {
	button = 'button',
	submit = 'submit',
	reset = 'reset',
}

export const buttons = {
	kind: kindENUM,
	type: typeENUM,
}
