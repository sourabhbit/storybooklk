import { InputWrapper, FlexWrapper, LeftIconWrapper } from './styles'
import { inputs, FormInputTypes } from './Form.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import SVGIcon from '../../common/SVGIcon'

const FormInput = ({
	value,
	placeholder,
	type = inputs.type.text,
	componentSize = ComponentSizeENUM.small,
	id,
	error = false,
	width = '50',
	readonly = false,
	showRightIcon = false,
	rightIcon,
	showLeftIcon = false,
	leftIcon,
	theme = ThemeENUM.primary,
	onChange = () => null,
}: FormInputTypes) => {
	return (
		<FlexWrapper
			width={width}
			error={error}
			styleSize={componentSize}
			styleColor={theme}
			data-testid="form-input-testid"
		>
			{showLeftIcon && leftIcon && (
				<LeftIconWrapper>
					<SVGIcon
						icon={leftIcon}
						alt="leftIcon"
						data-testid="leftIcon-testid"
					/>
				</LeftIconWrapper>
			)}
			<InputWrapper
				value={value}
				placeholder={placeholder}
				styleSize={componentSize}
				styleColor={theme}
				type={type}
				onChange={onChange}
				id={id}
				error={error}
				readOnly={readonly}
				data-testid="input-testid"
			></InputWrapper>
			{showRightIcon && rightIcon && (
				<SVGIcon
					icon={rightIcon}
					alt="rightIcon"
					data-testid="rightIcon-testid"
				/>
			)}
		</FlexWrapper>
	)
}

export default FormInput
