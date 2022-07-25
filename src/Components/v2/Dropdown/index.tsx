import { DropdownWrapper, SelectWrapper, OptionWrapper } from './styles'
import { DropdownTypes } from './Dropdown.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import React from 'react'

const Dropdown = ({
	id,
	options,
	SelectedIndex = 0,
	componentSize = ComponentSizeENUM.small,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
}: DropdownTypes) => {
	const [showOptions, setShowOptions] = React.useState(false)
	const [currentIndex, setCurrentIndex] = React.useState(SelectedIndex)

	const onChangeaction = () => {
		setShowOptions(!showOptions)
	}

	const changeIndex = (index: number) => {
		setCurrentIndex(index)
	}

	return (
		<DropdownWrapper
			id={id}
			data-testid="dropdown-wrapper"
			styleColor={theme}
			styleFont={font}
			styleSize={componentSize}
			onClick={() => onChangeaction()}
		>
			<SelectWrapper
				data-testid="select-wrapper"
				showOptions={showOptions}
				styleSize={componentSize}
				styleColor={theme}
			>
				{options[currentIndex]}
			</SelectWrapper>
			{showOptions &&
				options?.map((option, index) => {
					return (
						<OptionWrapper
							data-testid="option-wrapper"
							onClick={() => changeIndex(index)}
							styleSize={componentSize}
							styleColor={theme}
							key={index}
						>
							{option}
						</OptionWrapper>
					)
				})}
		</DropdownWrapper>
	)
}

export default Dropdown
