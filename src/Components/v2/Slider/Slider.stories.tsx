import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import Slider from './index'

export default {
	title: 'Components/v2/Slider',
	component: Slider,
	// decorators: [withKnobs],
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
		startValue: {
			...generateArgTypes({
				type: 'string',
				required: false,
				description: 'starting value of price range',
				category: 'Component',
			}),
		},
		endValue: generateArgTypes({
			type: 'string',
			required: false,
			description: 'end value of price range',
			category: 'Component',
		}),
		minDiff: generateArgTypes({
			type: 'number',
			required: false,
			description: 'minimum difference between starting and end value',
			category: 'Component',
		}),
		maxRangeValue: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Maximum value of a product',
			category: 'Component',
		}),
		step: generateArgTypes({
			type: 'number',
			required: false,
			description: 'step of increment/decrement',
			category: 'Component',
		}),
		onInput: {
			...generateArgTypes({
				type: 'function',
				required: false,
				description: 'onInput handler for slider',
				category: 'Events',
			}),
		},
	},
} as ComponentMeta<typeof Slider>

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'slider',
	startValue: '500',
	endValue: '3000',
	minDiff: 1000,
	maxRangeValue: 10000,
	step: 100,
}
