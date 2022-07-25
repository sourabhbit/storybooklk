import { StepWraaper, ButtonWrapper } from './styles'
import { StepTypes } from './Step.types'
import BackArrow from '../../../../icons/backArrow.svg'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

const Step = ({
	id,
	currentStep,
	totalStep,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
	onClick = () => null,
}: StepTypes) => {
	return (
		<StepWraaper
			data-testid="step-wrapper"
			styleFont={font}
			styleSize={componentSize}
			styleColor={theme}
			id={id}
		>
			<ButtonWrapper onClick={onClick}>
				<img src={BackArrow} alt="back" />
			</ButtonWrapper>
			<span>
				Step {currentStep}/{totalStep}
			</span>
		</StepWraaper>
	)
}

export default Step
