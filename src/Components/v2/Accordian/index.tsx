import {
	AccordianContainer,
	AccordianHeader,
	AccordianText,
	AccordianIcon,
	Option,
	OptionWrapper,
} from './styles'
import { AccordianTypes } from './Accordian.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Up from '../../../../icons/upArrow.svg'
import Down from '../../../../icons/downArrow.svg'
import React from 'react'

const Accordian = ({
	id,
	options,
	text,
	icon,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
}: AccordianTypes) => {
	const [showOptions, setShowOptions] = React.useState(false)

	const onChangeaction = () => {
		setShowOptions(!showOptions)
	}

	return (
		<AccordianContainer
			id={id}
			data-testid="accordian-container"
			styleColor={theme}
			styleFont={font}
			styleSize={componentSize}
		>
			<AccordianHeader onClick={() => onChangeaction()}>
				<AccordianText styleSize={componentSize}>{text}</AccordianText>
				<AccordianIcon>
					<img alt="key" src={showOptions ? Up : Down} />
				</AccordianIcon>
			</AccordianHeader>
			<OptionWrapper>
				{showOptions &&
					options?.map((option, index) => (
						<div data-testid="option-wrapper" key={index}>
							{icon && <img alt="bullet" src={icon} />}
							<Option styleSize={componentSize} styleColor={theme}>
								{option}
							</Option>
						</div>
					))}
			</OptionWrapper>
		</AccordianContainer>
	)
}

export default Accordian
