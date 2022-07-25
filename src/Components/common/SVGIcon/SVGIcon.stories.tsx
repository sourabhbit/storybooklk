import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from '../../../Helpers/Storybook'
import { iconsENUM } from '../../../Types/icons'
import SVGIcon from './index'

export default {
	title: 'Components/common/SVGIcon',
	component: SVGIcon,
	argTypes: {
		alt: {
			description: 'rest',
			table: {
				category: 'General',
			},
		},
		icon: generateArgTypes({
			type: 'string',
			required: true,
			description: 'SVG Icon',
			category: 'General',
			control: 'select',
			options: iconsENUM,
		}),
		color: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Icon Color',
			category: 'General',
		}),
		width: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Width of Icon',
			category: 'General',
		}),
	},
} as ComponentMeta<typeof SVGIcon>

const Template: ComponentStory<typeof SVGIcon> = (args) => <SVGIcon {...args} />

export const Icon = Template.bind({})
Icon.args = {
	icon: iconsENUM.addToCart,
	alt: 'add-to-cart',
	color: '',
}
