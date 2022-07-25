import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import { iconsENUM } from 'Types/icons'
import { kindENUM, typeENUM } from './Steps.types'
import Steps from './index'

export default {
	title: 'Components/v2/Steps',
	component: Steps,
	argTypes: {
		...generateGeneralArgs(),
		text: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Text that will be rendered',
			category: 'Component',
			defaultValue: 'Hello I"m Button',
		}),
		subText: generateArgTypes({
			type: 'string',
			required: false,
			description: 'SubText that will be rendered',
			category: 'Component',
			defaultValue: 'Hola! Welcome to LK',
		}),
		kind: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Kind of button will be rendered',
			category: 'Component',
			defaultValue: kindENUM.background,
			control: 'radio',
			options: kindENUM,
		}),
		buttonType: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Kind of button will be rendered',
			category: 'Component',
			defaultValue: typeENUM.button,
			control: 'radio',
			options: typeENUM,
		}),
		showRightIcon: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show/hide right icon',
			category: 'Component',
			defaultValue: 'false',
		}),
		rightIcon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Select Icon for the right side of button',
			category: 'Component',
			control: 'select',
			defaultValue: 'backArrow',
			options: iconsENUM,
		}),
		showLeftIcon: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show/hide left icon',
			category: 'Component',
			defaultValue: 'false',
		}),
		leftIcon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Select Icon for the left side of button',
			category: 'Component',
			control: 'select',
			defaultValue: 'backArrow',
			options: iconsENUM,
		}),
		disabled: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to enable/disable the button',
			category: 'Component',
			defaultValue: 'false',
		}),
		loading: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show loader on button',
			category: 'Status',
			defaultValue: 'false',
		}),
		active: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to active status of button',
			category: 'Status',
			defaultValue: 'false',
		}),
		onlyIcon: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show only icon inside button',
			category: 'Icon',
			defaultValue: 'false',
		}),
		iconColor: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Icon Color',
			category: 'Icon',
		}),
		showChildren: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show html children inside button',
			category: 'Status',
			defaultValue: 'false',
		}),
		children: {
			table: {
				category: 'Children',
			},
		},
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for button',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Steps>

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />

export const Overview = Template.bind({})
Overview.args = {}
