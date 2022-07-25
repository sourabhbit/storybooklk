import { NumberedStarTypes } from './NumberedStar.types'
import { NumberedRatingWrapper, NumberedRatingSpan } from './styles'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import SVGIcon from '../../common/SVGIcon'
const NumberedStarOld = ({
	componentSize = ComponentSizeENUM.medium,
	rating = 4.5,
	id,
	font = TypographyENUM.serif,
	icon,
	width,
}: NumberedStarTypes) => {
	return (
		<NumberedRatingWrapper
			styleSize={componentSize}
			data-testid="numbered-test"
			id={id}
		>
			<NumberedRatingSpan styleSize={componentSize} styleFont={font}>
				{rating}
			</NumberedRatingSpan>
			{icon && (
				<SVGIcon icon={icon} alt="star" color="#ffffff" width={width} />
			)}
		</NumberedRatingWrapper>
	)
}

export default NumberedStarOld
