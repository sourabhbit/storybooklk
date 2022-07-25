export interface SwitchButtonTypes {
	name: string
	leftText?: string
	rightText?: string
	currentStatus?: boolean
	size?: sizesENUM
	id: string
	onClick?: () => void
}

export enum sizesENUM {
	small = 'small',
	medium = 'medium',
	large = 'large',
}
