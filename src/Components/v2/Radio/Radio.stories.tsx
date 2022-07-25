import { ComponentMeta, ComponentStory } from '@storybook/react'
import Radio from './index'
import { generateArgTypes } from '../../../Helpers/Storybook'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'

export default {
	title: 'Components/v2/Radio',
	component: Radio,
	argTypes: {
		checked: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'status of checked of Radio',
			category: 'Component',
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
		disabled: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'is Radio disabled',
			category: 'Component',
		}),
		imageUrl: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Insert image url for image radio button',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const ImageRadio = Template.bind({})
ImageRadio.args = {
	id: 'radio-image',
	checked: false,
	componentSize: ComponentSizeENUM.medium,
	font: TypographyENUM.serif,
	disabled: false,
	imageUrl:
		'https://static.lenskart.com/images/cust_mailer/Eyeglass/FullRim.png',
}
