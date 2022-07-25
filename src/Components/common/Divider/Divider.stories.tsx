import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import Divider from './index'

export default {
	title: 'Components/common/Divider',
	component: Divider,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
	},
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />
export const Overview = Template.bind({})
Overview.args = {
	id: 'divider',
}
