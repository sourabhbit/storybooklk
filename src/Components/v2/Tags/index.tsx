import { TagWraaper } from './styles'
import { TagTypes } from './Tag.types'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'

const Tag = ({
	id,
	name,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
}: TagTypes) => {
	return (
		<TagWraaper
			data-testid="tag-wrapper"
			styleFont={font}
			styleSize={componentSize}
			styleColor={theme}
			id={id}
		>
			{name}
		</TagWraaper>
	)
}

export default Tag
