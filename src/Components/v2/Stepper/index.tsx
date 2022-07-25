import { StepsWrapper, ProgressBar, List } from './styles'
import { StepsTypes } from './Steps.types'
import { useState } from 'react'

/**
 * Default Step Component
 */
const step1Content = <h1>Content 1</h1>
const step2Content = <h1>Content 2</h1>
const step3Content = <h1>Content 3</h1>
const Steps = ({
	steps = [
		{
			label: 'Heading',
			name: 'Sub Heading',
			content: step1Content,
		},
		{
			label: 'Heading 1',
			name: 'Sub Heading 1',
			content: step2Content,
		},
		{
			label: 'Heading 2',
			name: 'Sub Heading 2',
			content: step3Content,
		},
	],
}: // active = 0,
StepsTypes) => {
	const [active, setActive] = useState(0)
	const nextCounter = () => {
		if (active <= steps.length - 2) {
			console.log(active)
			setActive((prevState) => prevState + 1)
		}
	}
	const prevCounter = () => {
		if (active >= 1) {
			setActive((prevState) => prevState - 1)
		}
	}
	return (
		<>
			<StepsWrapper>
				<ProgressBar>
					{steps.map((item, index) => {
						return (
							<List key={index} active={index === active}>
								{item.label}
								<br />
								{item.name}
							</List>
						)
					})}
				</ProgressBar>
			</StepsWrapper>
			<div>{steps[active].content}</div>
			<button onClick={nextCounter}>Next</button>
			<button onClick={prevCounter}>Previous</button>
		</>
	)
}

export default Steps
