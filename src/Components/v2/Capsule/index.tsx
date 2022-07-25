import { ButtonWrapper, FlexWrapper, IconWrapper, Text } from './styles'
import { buttons, ButtonTypes } from './Capsule.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'

const Capsule = ({
	text,
	id,
	kind = buttons.kind.background,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	showRightImage = false,
	rightImage,
	showLeftImage = false,
	leftImage,
	onClick,
}: ButtonTypes) => {
	return (
		<ButtonWrapper
			id={id}
			styleColor={theme}
			styleKind={kind}
			styleSize={componentSize}
			onClick={onClick}
			data-testid="button-testid"
		>
			<FlexWrapper data-testid="button-text">
				{showLeftImage && leftImage && (
					<IconWrapper>
						<img src={leftImage} alt="left-img" />
					</IconWrapper>
				)}
				<Text>{text}</Text>
				{showRightImage && rightImage && (
					<IconWrapper>
						<img src={rightImage} alt="right-img" />
					</IconWrapper>
				)}
			</FlexWrapper>
		</ButtonWrapper>
	)
}

export default Capsule
