import { useState, useEffect } from 'react'
import {
	SwitchButtonWrapper,
	SwitchWrapper,
	CmnToggleInputWrapper,
	CmnToggleLabelWrapper,
	LeftSpanWrapper,
	RightSpanWrapper,
} from './styles'
import { SwitchButtonTypes, sizesENUM } from './SwitchButton.types'

/**
 * Default Switchbutton Component
 */
const Switchbutton = ({
	id,
	name,
	currentStatus,
	leftText,
	rightText,
	onClick = () => null,
	size = sizesENUM.medium,
}: SwitchButtonTypes) => {
	const [left, setLeft] = useState(currentStatus)
	const [checked, setChecked] = useState(false)

	const handleToggle = () => {
		setLeft(!left)
		onClick()
	}
	useEffect(() => {
		if (left) setChecked(false)
		else setChecked(true)
	}, [left])
	return (
		<SwitchButtonWrapper data-testid="switchButton">
			{leftText && (
				<LeftSpanWrapper
					data-testid="switch-leftText"
					styleSize={size}
					checked={checked}
				>
					{leftText}
				</LeftSpanWrapper>
			)}
			<SwitchWrapper>
				<CmnToggleInputWrapper
					type="checkbox"
					id={id}
					name={name}
					data-testid="switch-input"
				/>
				<CmnToggleLabelWrapper
					checked={checked}
					onClick={() => handleToggle()}
					data-testid="switch-label"
				/>
			</SwitchWrapper>
			{rightText && (
				<RightSpanWrapper
					data-testid="switch-rightText"
					styleSize={size}
					checked={checked}
				>
					{rightText}
				</RightSpanWrapper>
			)}
		</SwitchButtonWrapper>
	)
}

export default Switchbutton
