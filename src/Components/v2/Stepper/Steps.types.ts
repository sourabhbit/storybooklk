export interface StepsTypes {
	steps: Array<stepObject>
	active: null | number
}

export interface stepObject {
	label: string
	name: string
	content?: React.ReactNode
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
