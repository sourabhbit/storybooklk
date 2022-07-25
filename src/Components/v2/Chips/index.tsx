import { ChipWrapper, CountWrapper, TextWrapper, ColorWrapper } from './styles'
import { ChipsTypes } from './Chips.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import SVGIcon from 'Components/common/SVGIcon'

/**
 * Default Chips Component
 */
const Chip = ({
	id,
	showIcon = false,
	text,
	count = 0,
	icon,
	color = '',
	showColor = false,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
}: ChipsTypes) => {
	const showCount = count !== 0 ? true : false
	return (
		<ChipWrapper
			data-testid="Chip-wrapper"
			id={id}
			styleFont={font}
			styleSize={componentSize}
			styleColor={theme}
		>
			{showIcon && icon && <SVGIcon icon={icon} alt="test" />}
			{showColor && color && <ColorWrapper styleSize={componentSize} />}
			<TextWrapper styleSize={componentSize} data-testid="Chip-text">
				{text}
			</TextWrapper>
			{showCount && (
				<CountWrapper
					styleColor={theme}
					styleSize={componentSize}
					data-testid="Chip-count"
				>
					{count}
				</CountWrapper>
			)}
		</ChipWrapper>
	)
}

export default Chip
