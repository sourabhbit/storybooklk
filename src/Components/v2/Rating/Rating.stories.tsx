import { ComponentMeta, ComponentStory } from '@storybook/react'
import NumericalRating from './index'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import { generateArgTypes } from 'Helpers/Storybook'

export default {
	title: 'Components/v2/Rating/Numerical',
	component: NumericalRating,
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
		font: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Typography of the component',
			category: 'General',
			defaultValue: TypographyENUM.serif,
			control: 'radio',
			options: TypographyENUM,
		}),
		rating: generateArgTypes({
			type: 'number',
			required: true,
			description: 'Rating value',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof NumericalRating>

const Template: ComponentStory<typeof NumericalRating> = (args) => (
	<NumericalRating {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'numerical-rating',
	rating: 4.5,
	componentSize: ComponentSizeENUM.medium,
	font: TypographyENUM.serif,
}
