import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import Chip from './index'
import { iconsENUM } from 'Types/icons'

export default {
	title: 'Components/v2/Chips',
	component: Chip,
	argTypes: {
		...generateGeneralArgs(),
		text: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Text that will be rendered',
			category: 'Component',
		}),
		showIcon: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show/hide icon',
			category: 'Component',
			defaultValue: 'false',
		}),
		icon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Select Icon',
			category: 'Component',
			control: 'select',
			defaultValue: 'glasses',
			options: iconsENUM,
		}),
		count: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Show/Hide Count',
			category: 'Component',
		}),
		color: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Show Count',
			category: 'Component',
		}),
		showColor: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Show/Hide color',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof Chip>

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Active = Template.bind({})
Active.args = {
	id: 'active-id',
	text: 'Active Chip',
	count: 10,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	showIcon: false,
	icon: iconsENUM.glasses,
}

export const Inactive = Template.bind({})
Inactive.args = {
	id: 'inactive-id',
	text: 'In Active Chip',
	count: 12,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	showIcon: false,
	icon: iconsENUM.glasses,
	color: 'green',
	showColor: true,
}

export const InactiveWithIcon = Template.bind({})
InactiveWithIcon.args = {
	id: 'inactive-id',
	text: 'In Active Chip',
	count: 12,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	showIcon: true,
	icon: iconsENUM.glasses,
}
