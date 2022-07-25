import { ProductTilesTypes } from './ProductTiles.types'
import {
	ProductTilesContainer,
	ProductTilesDetails,
	ProductTilesContent,
} from './styles'
import { Overview as Price } from 'Components/v2/Price/Price.stories'
import { SimpleTile } from '../ImageTile/ImageTiles.stories'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
const ProductTiles = ({
	product,
	price = '2999',
	isSpecialPrice = false,
	specialPrice = '999',
	componentSize = ComponentSizeENUM.medium,
	id,
	styleTheme = ThemeENUM.primary,
	strikeThroughColor = 'var(--warm-grey-50)',
}: ProductTilesTypes) => {
	return (
		<ProductTilesContainer data-testid="product-tiles-test">
			<SimpleTile componentSize={componentSize} id={id} />
			{product && (
				<ProductTilesContent>
					<ProductTilesDetails
						styleSize={componentSize}
						styleTheme={styleTheme}
					>
						{product}
					</ProductTilesDetails>
					<Price
						price={price}
						isSpecialPrice={isSpecialPrice}
						specialPrice={specialPrice}
						componentSize={componentSize}
						font={TypographyENUM.serif}
						id={id}
						styleTheme={styleTheme}
						strikeThroughColor={strikeThroughColor}
					/>
				</ProductTilesContent>
			)}
		</ProductTilesContainer>
	)
}

export default ProductTiles
