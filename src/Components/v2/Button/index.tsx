import { ButtonWrapper, Loader, FlexWrapper, IconWrapper } from './styles'
import { buttons, ButtonTypes, typeENUM } from './Button.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import SVGIcon from 'Components/common/SVGIcon'

/**
 * Default Button Component
 */
const Button = ({
	text,
	subText,
	id,
	width = '50',
	kind = buttons.kind.background,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	buttonType = typeENUM.button,
	disabled = false,
	loading = false,
	active = false,
	showRightIcon = false,
	rightIcon,
	showLeftIcon = false,
	leftIcon,
	onClick,
	showChildren = false,
	children,
	onlyIcon = false,
	iconColor,
}: ButtonTypes) => {
	const isHover = !disabled && !loading && !active
	return (
		<ButtonWrapper
			id={id}
			isHover={isHover}
			isActive={active}
			styleColor={theme}
			styleKind={kind}
			styleSize={componentSize}
			onClick={onClick}
			disabled={disabled}
			type={buttonType}
			width={width}
			data-testid="button-testid"
		>
			{!onlyIcon ? (
				<>
					{showChildren && children}
					{loading && (
						<Loader
							styleColor={theme}
							styleKind={kind}
							disabled={disabled}
						/>
					)}

					{!loading && !showChildren && (
						<FlexWrapper data-testid="button-text">
							{showLeftIcon && leftIcon && (
								<IconWrapper>
									<SVGIcon
										icon={leftIcon}
										alt="leftIcon"
										color={iconColor}
									/>
								</IconWrapper>
							)}
							{text}
							<br />
							{subText && subText}
							{showRightIcon && rightIcon && (
								<IconWrapper>
									<SVGIcon
										icon={rightIcon}
										alt="rightIcon"
										color={iconColor}
									/>
								</IconWrapper>
							)}
						</FlexWrapper>
					)}
				</>
			) : (
				<>
					{onlyIcon && rightIcon && (
						<SVGIcon icon={rightIcon} alt="rightIcon" color={iconColor} />
					)}
				</>
			)}
		</ButtonWrapper>
	)
}

export default Button
