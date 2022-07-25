import { ComponentMeta, ComponentStory } from '@storybook/react'
import { inputs, typeENUM } from './Form.types'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import FormInput from './index'

export default {
	title: 'Components/v2/Form',
	component: FormInput,
	argTypes: {
		...generateGeneralArgs(),
		value: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Value that will be rendered',
			category: 'Component',
			defaultValue: 'Lorem Ipsum',
		}),
		placeholder: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Placeholder that will be rendered',
			category: 'Component',
			defaultValue: 'Lorem Ipsum placeholder',
		}),
		type: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Type of input will be rendered',
			category: 'Component',
			defaultValue: typeENUM.text,
			control: 'radio',
			options: typeENUM,
		}),
		width: generateArgTypes({
			type: 'string',
			required: false,
			description: 'To set the specific width of input',
			category: 'Component',
			defaultValue: '50',
		}),
		readonly: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to set readOnly condition in input',
			category: 'Component',
			defaultValue: 'false',
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
		error: generateArgTypes({
			type: 'boolean',
			required: false,
			description: 'Boolean to set error in input',
			category: 'Component',
			defaultValue: 'false',
		}),
		onChange: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onChange handler for input',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => (
	<FormInput {...args} />
)

export const WithoutIconInactiveForm = Template.bind({})
WithoutIconInactiveForm.args = {
	value: '',
	placeholder: 'Lorem ipsum',
	componentSize: ComponentSizeENUM.small,
	error: false,
	width: '50',
	readonly: false,
	type: inputs.type.text,
	showLeftIcon: false,
	showRightIcon: false,
	rightIcon: iconsENUM.backArrow,
	leftIcon: iconsENUM.cross,
	theme: ThemeENUM.secondary,
}

export const WithIconInactiveForm = Template.bind({})
WithIconInactiveForm.args = {
	value: '',
	placeholder: 'Lorem ipsum',
	componentSize: ComponentSizeENUM.small,
	error: false,
	width: '50',
	readonly: false,
	type: inputs.type.text,
	showLeftIcon: true,
	showRightIcon: false,
	rightIcon: iconsENUM.edit,
	leftIcon: iconsENUM.glasses,
	theme: ThemeENUM.secondary,
}

export const WithoutIconActiveForm = Template.bind({})
WithoutIconActiveForm.args = {
	value: '',
	placeholder: 'Lorem ipsum',
	componentSize: ComponentSizeENUM.small,
	error: false,
	width: '50',
	readonly: false,
	type: inputs.type.text,
	showLeftIcon: false,
	showRightIcon: true,
	rightIcon: iconsENUM.tick,
	leftIcon: iconsENUM.cross,
	theme: ThemeENUM.primary,
}

export const WithIconActiveForm = Template.bind({})
WithIconActiveForm.args = {
	value: '',
	placeholder: 'Lorem ipsum',
	componentSize: ComponentSizeENUM.small,
	error: false,
	width: '50',
	readonly: false,
	type: inputs.type.text,
	showLeftIcon: true,
	showRightIcon: false,
	rightIcon: iconsENUM.glasses,
	leftIcon: iconsENUM.glasses,
	theme: ThemeENUM.primary,
}
