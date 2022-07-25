import { FieldWrapper } from './styles'
import { inputs, InputTypes } from './Input.types'
import { useState } from 'react'
import { ComponentSizeENUM } from 'Types/general'

const Input = ({
	value,
	placeholder,
	type = inputs.type.text,
	componentSize = ComponentSizeENUM.small,
	id,
	disabled = false,
	error = false,
	width = '50',
	readonly = false,
	onChange = () => null,
}: InputTypes) => {
	const [value1, setlabel] = useState('')

	const handleChange = (val: string) => {
		setlabel(val)
		onChange()
	}

	return (
		<FieldWrapper
			value={value || value1}
			type={type}
			placeholder={placeholder}
			styleSize={componentSize}
			onChange={(e) => handleChange(e.target.value)}
			disabled={disabled}
			id={id}
			width={width}
			error={error}
			readOnly={readonly}
			data-testid="input-testid"
		></FieldWrapper>
	)
}

export default Input
