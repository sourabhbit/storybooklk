import { ComponentMeta, ComponentStory } from '@storybook/react'
import { typeENUM, inputs } from './Input.types'
import Input from './index'
import {
	generateArgTypes,
	generateGeneralArgs,
} from '../../../Helpers/Storybook'
import { ComponentSizeENUM } from '../../../Types/general'

export default {
	title: 'Components/v2/Input',
	component: Input,
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
		disabled: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to enable/disable the input',
			category: 'Component',
			defaultValue: 'false',
		}),
		readonly: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to set readOnly condition in input',
			category: 'Component',
			defaultValue: 'false',
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
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Fields = Template.bind({})
Fields.args = {
	value: 'Lorem Ipsum',
	placeholder: 'Lorem Ipsum placeholder',
	componentSize: ComponentSizeENUM.small,
	disabled: false,
	error: false,
	width: '50',
	readonly: false,
	type: inputs.type.text,
}
