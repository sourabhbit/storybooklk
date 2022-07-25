import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Pricing from './index'

export default {
	title: 'Components/v2/Pricing',
	component: Pricing,
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
		isSpecialPrice: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Special price or not',
			category: 'Component',
			defaultValue: 'false',
		}),
		price: generateArgTypes({
			type: 'string',
			required: true,
			description: 'price',
			category: 'Component',
			defaultValue: '999',
		}),
		specialPrice: generateArgTypes({
			type: 'string',
			required: false,
			description: 'price',
			category: 'Component',
			defaultValue: '999',
		}),
		strikeThroughColor: generateArgTypes({
			type: 'string',
			required: false,
			description: 'color of bottom strikethrough',
			category: 'Component',
			defaultValue: 'var(--warm-grey-50)',
		}),
		styleTheme: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Theme of the component',
			category: 'Component',
			defaultValue: ThemeENUM.primary,
			control: 'radio',
			options: ThemeENUM,
		}),
	},
} as ComponentMeta<typeof Pricing>

const Template: ComponentStory<typeof Pricing> = (args) => <Pricing {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'price',
	price: '2999',
	specialPrice: '999',
	isSpecialPrice: true,
	componentSize: ComponentSizeENUM.medium,
	font: TypographyENUM.serif,
	strikeThroughColor: `var(--warm-grey-25)`,
	styleTheme: ThemeENUM.primary,
}

export const SimplePrice = Template.bind({})
SimplePrice.parameters = {
	controls: {
		exclude: ['specialPrice', 'isSpecialPrice', 'strikeThroughColor'],
	},
}
SimplePrice.args = {
	...Overview.args,
	id: 'simple-price',
	isSpecialPrice: false,
}
export const SpecialPrice = Template.bind({})
SpecialPrice.parameters = {
	controls: {
		exclude: ['isSpecialPrice'],
	},
}
SpecialPrice.args = {
	...Overview.args,
	id: 'special-price',
}
