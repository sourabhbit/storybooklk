import { FilterWrapper, CountWrapper, TextWrapper } from './styles'
import { FiltersTypes } from './Filters.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import SVGIcon from '../../common/SVGIcon'

/**
 * Default Filters Component
 */
const FiltersComp = ({
	id,
	showIcon = false,
	text,
	count = 0,
	icon,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
	onClick,
}: FiltersTypes) => {
	const showCount = count !== 0 ? true : false
	return (
		<FilterWrapper
			data-testid="filter-wrapper"
			id={id}
			styleFont={font}
			styleSize={componentSize}
			styleColor={theme}
			onClick={onClick}
		>
			{showIcon && icon && <SVGIcon icon={icon} alt="test" />}
			<TextWrapper styleSize={componentSize} data-testid="filter-text">
				{text}
			</TextWrapper>
			{showCount && (
				<CountWrapper
					styleColor={theme}
					styleSize={componentSize}
					data-testid="filter-count"
				>
					{count}
				</CountWrapper>
			)}
		</FilterWrapper>
	)
}

export default FiltersComp
