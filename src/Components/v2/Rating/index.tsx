import { RatingTypes } from './Rating.types'
import Background from './assets/RatingBackground.svg'
import { RatingContainer, RatingText, RatingImg } from './styles'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
const NumericalRating = ({
	id,
	componentSize = ComponentSizeENUM.medium,
	rating = 4.5,
	font = TypographyENUM.serif,
}: RatingTypes) => {
	return (
		<RatingContainer data-testid="rating-test" id={id}>
			<RatingImg styleSize={componentSize} src={Background} alt="" />
			<RatingText styleSize={componentSize} styleFont={font}>
				{rating}
			</RatingText>
		</RatingContainer>
	)
}

export default NumericalRating
