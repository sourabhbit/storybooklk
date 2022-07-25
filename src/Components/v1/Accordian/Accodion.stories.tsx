import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import Accordions from './index'
import { filters } from './mockValue'

export default {
	title: 'Components/v1/Accodion',
	component: Accordions,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
	},
} as ComponentMeta<typeof Accordions>

const Template: ComponentStory<typeof Accordions> = (args) => (
	<Accordions {...args} />
)
export const Overview = Template.bind({})
Overview.args = {
	id: 'AccodionGroup',
	filters: filters,
}
