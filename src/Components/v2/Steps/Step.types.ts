import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'

export interface StepTypes {
	id: string
	totalStep: number
	currentStep: number
	theme: ThemeENUM
	font: TypographyENUM
	componentSize?: ComponentSizeENUM
	onClick: () => void
}
