import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { PriceTypes } from './Price.types'
import { Container, PricingSpan, StrikeThroughSpan } from './styles'
const Pricing = ({
	price = '2999',
	specialPrice = '999',
	isSpecialPrice = false,
	componentSize = ComponentSizeENUM.medium,
	font = TypographyENUM.serif,
	strikeThroughColor = `var(--warm-grey-50)`,
	styleTheme = ThemeENUM.primary,
}: PriceTypes) => {
	return (
		<Container
			styleSize={componentSize}
			styleFont={font}
			data-testid="pricing-test"
			styleTheme={styleTheme}
		>
			<PricingSpan>
				{price}
				<StrikeThroughSpan
					isSpecialPrice={isSpecialPrice}
					color={strikeThroughColor}
				></StrikeThroughSpan>
			</PricingSpan>
			{isSpecialPrice && specialPrice}
		</Container>
	)
}

export default Pricing
