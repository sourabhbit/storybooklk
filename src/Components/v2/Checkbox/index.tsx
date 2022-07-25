import {
	CheckboxConatiner,
	CheckboxWrapper,
	LabelWrapper,
	CountWrapper,
} from './styles'
import { CheckBoxTypes } from './Checkbox.types'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import React from 'react'
/**
 * Default Checkbox Component
 */
const Checkbox = ({
	id,
	disabled = false,
	count,
	checked = false,
	label,
	onChange = () => null,
	size = ComponentSizeENUM.medium,
	font = TypographyENUM.sans,
}: CheckBoxTypes) => {
	const [selected, setSelected] = React.useState(checked)

	const toggleCheckbox = () => {
		setSelected(!selected)
		onChange()
	}
	return (
		<CheckboxConatiner id={id}>
			<CheckboxWrapper
				data-testid="checkbox-test"
				styleSize={size}
				type="checkbox"
				onChange={toggleCheckbox}
				disabled={disabled}
				checked={selected}
			></CheckboxWrapper>
			{label && (
				<LabelWrapper styleSize={size} styleFont={font}>
					{label}
				</LabelWrapper>
			)}
			{count && count !== 0 && (
				<CountWrapper styleSize={size} styleFont={font}>
					({count})
				</CountWrapper>
			)}
		</CheckboxConatiner>
	)
}

export default Checkbox
