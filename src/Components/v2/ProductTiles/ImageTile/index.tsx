import { SimpleProductTilesTypes } from './ImageTile.types'
import { SimpleProductImage, SimpleProductTilesContainer } from './styles'
import image from '../assets/image.png'
import { ComponentSizeENUM } from 'Types/general'
const SimpleProductTiles = ({
	componentSize = ComponentSizeENUM.medium,
}: SimpleProductTilesTypes) => {
	return (
		<SimpleProductTilesContainer
			data-testid="simple-tile-test"
			styleSize={componentSize}
		>
			<SimpleProductImage src={image} alt="" />
		</SimpleProductTilesContainer>
	)
}

export default SimpleProductTiles
