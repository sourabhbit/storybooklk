import { ComponentSizeENUM } from 'Types/general'
import { RatingProgressTypes } from './RatingProgress.types'
import { ProgressContainer, RatingProgress } from './styles'
const ProgressRating = ({
	componentSize = ComponentSizeENUM.medium,
	max,
	rating,
}: RatingProgressTypes) => {
	return (
		<ProgressContainer data-testid="progress-test">
			<RatingProgress styleSize={componentSize}>
				<progress max={max} value={rating}>
					{rating}
				</progress>
			</RatingProgress>
		</ProgressContainer>
	)
}

export default ProgressRating
