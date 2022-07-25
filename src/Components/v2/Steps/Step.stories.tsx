import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'
import {
	generateArgTypes,
	generateGeneralArgs,
} from '../../../Helpers/Storybook'
import Step from './index'

export default {
	title: 'Components/v2/Step',
	component: Step,
	argTypes: {
		...generateGeneralArgs(),
		totalStep: generateArgTypes({
			type: 'number',
			required: false,
			description: 'total step to show',
			category: 'Component',
		}),
		currentStep: generateArgTypes({
			type: 'number',
			required: false,
			description: 'current step to show',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for button',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Step>

const Template: ComponentStory<typeof Step> = (args) => <Step {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'step',
	totalStep: 2,
	currentStep: 1,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	onClick: () => null,
}
