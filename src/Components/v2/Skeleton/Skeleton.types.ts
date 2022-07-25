import { ComponentSizeENUM, ThemeENUM } from 'Types/general'

export interface SkeletonTypes {
	componentSize?: ComponentSizeENUM
	id?: string
	theme: ThemeENUM
	animation: boolean
	type: string
	paragraphRows?: number
}

export enum typeENUM {
	title = 'title',
	paragraph = 'paragraph',
	button = 'button',
	avatar = 'avatar',
	image = 'image',
}

export const skeleton = {
	type: typeENUM,
}
