import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import Badges from './index'
import profileImage from './assets/image.png'
import { buttons, kindENUM, typeENUM } from 'Components/v2/Button/Button.types'

export default {
	title: 'Components/v2/Badges',
	component: Badges,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
		badgeSize: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Size of the component',
			category: 'General',
			defaultValue: ComponentSizeENUM.medium,
			control: 'radio',
			options: ComponentSizeENUM,
		}),
		icon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Avatar Icon',
			category: 'Component',
			control: 'select',
			defaultValue: 'user',
			options: iconsENUM,
		}),
		image: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Profile Image',
			category: 'Component',
		}),
		name: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Name Initails of the user',
			category: 'Component',
		}),
		// * for buttons specific
		componentSize: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Size of the component',
			category: 'General',
			defaultValue: ComponentSizeENUM.small,
			control: 'radio',
			options: ComponentSizeENUM,
		}),
		theme: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Theme of the component',
			category: 'General',
			defaultValue: ThemeENUM.primary,
			control: 'radio',
			options: ThemeENUM,
		}),
		text: {
			...generateArgTypes({
				type: 'string',
				required: false,
				description: 'Text that will be rendered',
				category: 'Component',
				defaultValue: 'Button Badge',
			}),
		},
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
} as ComponentMeta<typeof Badges>

const Template: ComponentStory<typeof Badges> = (args) => <Badges {...args} />

export const IconsBadge = Template.bind({})
IconsBadge.parameters = {
	controls: {
		include: ['icon', 'id', 'badgeSize'],
	},
}
IconsBadge.args = {
	id: 'icon-badge',
	badgeSize: ComponentSizeENUM.medium,
	icon: iconsENUM.user,
}
export const ImageBadge = Template.bind({})
ImageBadge.parameters = {
	controls: {
		include: ['id', 'image', 'badgeSize', 'componentSize'],
	},
}
ImageBadge.args = {
	id: 'image-badge',
	badgeSize: ComponentSizeENUM.medium,
	image: profileImage,
}
export const AvatarBadge = Template.bind({})
AvatarBadge.parameters = {
	controls: {
		include: ['id', 'name', 'badgeSize', 'componentSize'],
	},
}
AvatarBadge.args = {
	id: 'avatar-badge',
	badgeSize: ComponentSizeENUM.medium,
	name: 'Alex',
}
export const ButtonBadge = Template.bind({})
ButtonBadge.parameters = {
	controls: {
		exclude: ['icon', 'image', 'name'],
	},
}
ButtonBadge.args = {
	text: 'Button Badge',
	subText: '',
	id: 'button-badge',
	kind: buttons.kind.background,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	buttonType: buttons.type.button,
	active: false,
	loading: false,
	disabled: false,
	showChildren: false,
	showLeftIcon: false,
	showRightIcon: false,
	rightIcon: iconsENUM.backArrow,
	leftIcon: iconsENUM.cross,
	children: <span>Hi, children!</span>,
}
