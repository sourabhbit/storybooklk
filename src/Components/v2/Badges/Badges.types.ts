import { kindENUM, typeENUM } from 'Components/v2/Button/Button.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'

export interface BadgesTypes {
	id: string
	badgeSize?: ComponentSizeENUM
	icon?: iconsENUM
	image?: string
	name?: string
	text: string
	subText?: string
	kind?: kindENUM
	componentSize?: ComponentSizeENUM
	theme?: ThemeENUM
	buttonType?: typeENUM
	disabled?: boolean
	loading?: boolean
	showRightIcon: boolean
	showLeftIcon: boolean
	rightIcon?: iconsENUM
	leftIcon?: iconsENUM
	active?: boolean
	onClick?: () => void
	showChildren: boolean
	children?: React.ReactNode
}
