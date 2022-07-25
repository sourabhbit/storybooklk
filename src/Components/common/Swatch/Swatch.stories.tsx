import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import Swatch from './index'

export default {
	title: 'Components/common/Swatch',
	component: Swatch,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
		colors: generateArgTypes({
			type: 'array',
			required: true,
			description: `color options array, eg: ['red', 'blue', '#c4c4c4']`,
			category: 'Component',
		}),
		onmouseOver: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onmousehover handler for swatch',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Swatch>

const Template: ComponentStory<typeof Swatch> = (args) => <Swatch {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'swatch',
	colors: [],
}
