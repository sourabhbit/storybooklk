import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import ProductTiles from './index'

export default {
	title: 'Components/v2/ProductTiles/Detailed',
	component: ProductTiles,
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
		product: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Name of the Product',
			category: 'Component',
		}),
		price: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Price of the product',
			category: 'Component',
		}),
		specialPrice: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Price of the product',
			category: 'Component',
		}),
		isSpecialPrice: generateArgTypes({
			type: 'boolean',
			required: false,
			description: 'Special price or not',
			category: 'Component',
			defaultValue: 'false',
		}),
		image: generateArgTypes({
			type: 'string',
			required: true,
			description: 'url of product image',
			category: 'Component',
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
		strikeThroughColor: generateArgTypes({
			type: 'string',
			required: false,
			description: 'color of bottom strikethrough',
			category: 'Component',
			defaultValue: 'var(--warm-grey-50)',
		}),
	},
} as ComponentMeta<typeof ProductTiles>

const Template: ComponentStory<typeof ProductTiles> = (args) => (
	<ProductTiles {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	product: 'Product',
	componentSize: ComponentSizeENUM.medium,
	price: '2999',
	image: '',
	id: 'product-card',
	isSpecialPrice: false,
	specialPrice: '999',
	styleTheme: ThemeENUM.primary,
	strikeThroughColor: 'var(--warm-grey-50)',
}
