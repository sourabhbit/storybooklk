import { RadioContainer, RadioWrapper, Image } from './styles'
import { RadioTypes } from './Radio.types'
import { ComponentSizeENUM } from '../../../Types/general'
import React from 'react'
/**
 * Default Radio Component
 */
const Radio = ({
	id,
	disabled = false,
	checked = false,
	onClick = () => null,
	componentSize = ComponentSizeENUM.medium,
	imageUrl,
}: // font = TypographyENUM.sans,
RadioTypes) => {
	const [selected, setSelected] = React.useState(checked)

	const toggleCheckbox = () => {
		setSelected(!selected)
		onClick()
	}
	return (
		<RadioContainer id={id}>
			<RadioWrapper
				data-testid="Radio-test"
				styleSize={componentSize}
				type="radio"
				onClick={toggleCheckbox}
				disabled={disabled}
				checked={checked ? checked : selected}
				value="Full Frame"
			></RadioWrapper>
			<Image
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
					backgroundRepeat: 'no-repeat',
				}}
			></Image>
		</RadioContainer>
	)
}

export default Radio
