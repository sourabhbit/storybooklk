import { NumberedStarTypes } from './NumberedStar.types'
import { NumberedRatingWrapper, NumberedRatingSpan } from './styles'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import SVGIcon from 'Components/common/SVGIcon'
const NumberedStar = ({
	componentSize = ComponentSizeENUM.medium,
	rating = 4.5,
	id,
	font = TypographyENUM.serif,
	icon,
}: NumberedStarTypes) => {
	return (
		<NumberedRatingWrapper
			styleSize={componentSize}
			data-testid="numbered-test"
			id={id}
		>
			{icon && <SVGIcon icon={icon} alt="star" />}
			<NumberedRatingSpan styleSize={componentSize} styleFont={font}>
				{rating}
			</NumberedRatingSpan>
		</NumberedRatingWrapper>
	)
}

export default NumberedStar
