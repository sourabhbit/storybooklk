import { ComponentMeta, ComponentStory } from '@storybook/react'
import Ratings from './index'
import { ComponentSizeENUM } from 'Types/general'
import { generateArgTypes } from 'Helpers/Storybook'
// import { iconsENUM } from '../../Types/icons'

export default {
	title: 'Components/v2/Rating/Ratings',
	component: Ratings,
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
			description: 'Max allowed rating',
			category: 'Component',
		}),
		icon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Rating Icon',
			category: 'Component',
			control: 'select',
			defaultValue: 'starFilled',
			// options: iconsENUM,
		}),
	},
} as ComponentMeta<typeof Ratings>

const Template: ComponentStory<typeof Ratings> = (args) => <Ratings {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'ratings-stars',
	rating: 3,
	max: 5,
	componentSize: ComponentSizeENUM.medium,
	// icon: iconsENUM.starFilled,
}
