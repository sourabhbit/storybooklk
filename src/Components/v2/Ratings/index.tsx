import { ComponentSizeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import SVGIcon from 'Components/common/SVGIcon'
import { RatingsTypes } from './Ratings.types'
import { RatingsWrapper, SVGComponentWrapper } from './styles'
const Ratings = ({
	componentSize = ComponentSizeENUM.medium,
	rating = 3.5,
	max = 5,
	icon,
}: RatingsTypes) => {
	return (
		<RatingsWrapper styleSize={componentSize} data-testid="ratings-test">
			{Array.from({ length: max }, (elem, idx) => {
				{
					icon =
						idx + 1 <= Math.floor(rating)
							? iconsENUM.starFilled
							: iconsENUM.star
				}
				return (
					<SVGComponentWrapper styleSize={componentSize} key={idx}>
						{icon && <SVGIcon icon={icon} alt="star" />}
					</SVGComponentWrapper>
				)
			})}
		</RatingsWrapper>
	)
}

export default Ratings
