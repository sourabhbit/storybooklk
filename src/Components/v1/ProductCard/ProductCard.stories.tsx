import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import ProductCardOld from './index'
import { ProductCardTypesENUM } from './ProductCard.types'

export default {
	title: 'Components/v1/ProductCard',
	component: ProductCardOld,
	argTypes: {
		...generateGeneralArgs(),
		type: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Type of ProductCard',
			category: 'Component',
			defaultValue: ProductCardTypesENUM.medium,
			options: ProductCardTypesENUM,
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
		tags: generateArgTypes({
			type: 'array',
			required: false,
			description: 'Array of tags',
			category: 'Data',
		}),
		productImage: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Image of product',
			category: 'Data',
		}),
		orderDate: generateArgTypes({
			type: 'string',
			required: false,
			description: 'order date of product',
			category: 'Data',
		}),
		rating: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Image of product',
			category: 'Data',
		}),
		brandName: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Brand Name of product',
			category: 'Data',
		}),
		brandInfo: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Brand Info of product',
			category: 'Data',
		}),
		brandingImage: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Branding Image of product',
			category: 'Data',
		}),
		originalPrice: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Original price of product',
			category: 'Data',
		}),
		discountedPrice: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Discounted price of product',
			category: 'Data',
		}),
		boughtNo: generateArgTypes({
			type: 'number',
			required: false,
			description: 'No of products bought till now',
			category: 'Data',
		}),
		reorderAction: generateArgTypes({
			type: 'function',
			required: false,
			description: 'Re-order a product',
			category: 'Events',
		}),
		viewSimilarAction: generateArgTypes({
			type: 'function',
			required: false,
			description: 'View similar products',
			category: 'Events',
		}),
		buyAction: generateArgTypes({
			type: 'function',
			required: false,
			description: 'Buy product',
			category: 'Events',
		}),
		productName: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Name of product',
			category: 'Data',
		}),
	},
} as ComponentMeta<typeof ProductCardOld>

const Template: ComponentStory<typeof ProductCardOld> = (args) => (
	<ProductCardOld {...args} />
)

export const Large = Template.bind({})
Large.args = {
	id: 'ProductCard-image-id',
	type: ProductCardTypesENUM.large,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	onClick: () => jest.fn(),
	tags: [{ name: 'Prescription' }],
	productImage:
		'https://media.istockphoto.com/photos/nerd-glasses-with-clipping-paths-picture-id125416806?k=20&m=125416806&s=612x612&w=0&h=5debF0r2pbWcHHxNl9EOZwQ5O52JlKUIpy2pW0t8rfA=',
	orderDate: '08/04/2022',
	rating: 3.5,
	brandName: 'John Jacobs',
	brandInfo: 'A reputed brand',
	brandingImage:
		'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/e/lenskart-air-la-e13033-c2-eyeglasses_7i5a6936_lk_theme.jpg',
	originalPrice: 600,
	discountedPrice: 300,
	boughtNo: 6778,
	reorderAction: () => jest.fn(),
	viewSimilarAction: () => jest.fn(),
	buyAction: () => jest.fn(),
	productName: 'Rimless glasses',
}
