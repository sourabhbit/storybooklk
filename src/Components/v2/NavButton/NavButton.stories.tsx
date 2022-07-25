import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from '../../../Helpers/Storybook'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'
import Navbutton from './index'

export default {
	title: 'Components/v2/Navbutton',
	component: Navbutton,
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
		text: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Text that will be rendered',
			category: 'Component',
		}),
		selectedNav: generateArgTypes({
			type: 'number',
			required: true,
			description: 'show Active nav',
			category: 'Component',
		}),
		index: generateArgTypes({
			type: 'number',
			required: true,
			description: 'current id',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Navbutton>

const Template: ComponentStory<typeof Navbutton> = (args) => (
	<Navbutton {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'nav-button-id',
	text: 'Your Picks',
	componentSize: ComponentSizeENUM.small,
	font: TypographyENUM.serif,
	selectedNav: 1,
	index: 0,
}
