import { ComponentMeta, ComponentStory } from '@storybook/react'
import Checkbox from './index'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'

export default {
	title: 'Components/v2/Checkbox',
	component: Checkbox,
	argTypes: {
		checked: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'status of checked of checkbox',
			category: 'Component',
		}),
		componentSize: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Size of the component',
			category: 'General',
			defaultValue: ComponentSizeENUM.small,
			control: 'radio',
			options: ComponentSizeENUM,
		}),
		disabled: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'is checkbox disabled',
			category: 'Component',
		}),
		label: generateArgTypes({
			type: 'string',
			required: true,
			description: 'is checkbox disabled',
			category: 'Component',
		}),
		count: generateArgTypes({
			type: 'string',
			required: true,
			description: 'is checkbox disabled',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'check-box',
	label: 'black',
	checked: false,
	count: 20,
	size: ComponentSizeENUM.medium,
	font: TypographyENUM.serif,
}
