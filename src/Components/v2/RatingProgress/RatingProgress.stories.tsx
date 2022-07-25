import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM } from 'Types/general'
import ProgressRating from './index'
export default {
	title: 'Components/v2/Rating/Progress',
	component: ProgressRating,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
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
		rating: generateArgTypes({
			type: 'number',
			required: true,
			description: 'Rating value',
			category: 'Component',
		}),
		max: generateArgTypes({
			type: 'number',
			required: true,
			description: 'Maximum rating value',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof ProgressRating>

const Template: ComponentStory<typeof ProgressRating> = (args) => (
	<ProgressRating {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'progress-rating',
	rating: 75,
	max: 100,
	componentSize: ComponentSizeENUM.medium,
}
