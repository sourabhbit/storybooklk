import { NavButtonWrapper, TextWrapper } from './styles'
import { NavButtonTypes } from './NavButton.types'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'

/**
 * Default Switchbutton Component
 */
const Navbutton = ({
	id,
	selectedNav = 0,
	index = 0,
	text,
	onClick = () => null,
	componentSize = ComponentSizeENUM.small,
	font = TypographyENUM.serif,
}: NavButtonTypes) => {
	return (
		<NavButtonWrapper
			data-testid="nav-button"
			id={id}
			selected={selectedNav === index}
			onClick={onClick}
		>
			<TextWrapper
				data-testid="nav-text"
				styleFont={font}
				styleSize={componentSize}
				selected={selectedNav === index}
			>
				{text}
			</TextWrapper>
		</NavButtonWrapper>
	)
}

export default Navbutton
