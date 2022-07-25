import { ReactNode } from 'react'

export interface AccodionGroupTypes {
	id: string
	filters: Array<FilterTypes>
}

export interface FilterTypes {
	name: string
	options: Array<OptionTypes>
}
export interface OptionTypes {
	title: string
	no_of_products: number
}

export interface AccodionTypes {
	id: string
	children: ReactNode
	title: string
	expand: boolean
	handleExpand: () => void
}
