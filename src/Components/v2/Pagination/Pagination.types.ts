import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
export interface PaginationTypes {
	id: string
	type: PaginationTypesENUM
	activeIndex: number
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	count: number
	onClick?: (...args: number[]) => number
}

export enum PaginationTypesENUM {
	image = 'image',
	video = 'video',
	storyMode = 'storyMode',
}

export enum PositionENUM {
	left = 'left',
	right = 'right',
}

export enum DimensionENUM {
	height = 'height',
	width = 'width',
}
