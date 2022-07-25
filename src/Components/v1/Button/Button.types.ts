import { ComponentSizeENUM, ThemeENUM } from '../../../Types/general'
import { iconsENUM } from '../../../Types/icons'

export interface ButtonTypes {
	id: string
	text?: string
	subText?: string
	kind?: kindENUM
	width?: string
	componentSize?: ComponentSizeENUM
	theme?: ThemeENUM
	buttonType?: typeENUM
	disabled?: boolean
	loading?: boolean
	showRightIcon?: boolean
	showLeftIcon?: boolean
	rightIcon?: iconsENUM
	leftIcon?: iconsENUM
	active?: boolean
	onClick?: () => void
	showChildren?: boolean
	children?: React.ReactNode
	onlyIcon?: boolean
	iconColor?: string
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
