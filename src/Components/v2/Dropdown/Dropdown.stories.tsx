import { ComponentMeta, ComponentStory } from '@storybook/react'
import {
	generateArgTypes,
	generateGeneralArgs,
} from '../../../Helpers/Storybook'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../Types/general'
import Dropdown from './index'

export default {
	title: 'Components/v2/Dropdown',
	component: Dropdown,
	argTypes: {
		...generateGeneralArgs(),
		options: generateArgTypes({
			type: 'array',
			required: true,
			description: 'Show dropdown options',
			category: 'Component',
		}),
		index: generateArgTypes({
			type: 'number',
			required: true,
			description: 'Show cuurent active index',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (arges) => (
	<Dropdown {...arges} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'dropdrow-id',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	options: ['Your Picks', 'Discover', 'Categories', 'Gold', 'Collabs', 'Labs'],
	SelectedIndex: 0,
}
