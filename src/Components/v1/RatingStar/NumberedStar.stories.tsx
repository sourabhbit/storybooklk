import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import NumberedStarOld from './index'

export default {
	title: 'Components/v1/RatingStar',
	component: NumberedStarOld,
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
			description: 'Rating count',
			category: 'Component',
		}),
		icon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Rating Icon',
			category: 'Component',
			control: 'select',
			defaultValue: 'starFilled',
			options: iconsENUM,
		}),
	},
} as ComponentMeta<typeof NumberedStarOld>

const Template: ComponentStory<typeof NumberedStarOld> = (args) => (
	<NumberedStarOld {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'numbered-star',
	rating: 4.5,
	componentSize: ComponentSizeENUM.medium,
	icon: iconsENUM.starFilled,
	font: TypographyENUM.serif,
}
