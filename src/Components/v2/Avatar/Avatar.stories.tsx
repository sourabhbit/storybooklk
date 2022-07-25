import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import Avatar from './index'
import profileImage from './assets/image.png'

export default {
	title: 'Components/v2/Avatar',
	component: Avatar,
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
	},
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const UserIcon = Template.bind({})
UserIcon.parameters = {
	controls: {
		exclude: ['image', 'name', 'componentSize'],
	},
}
UserIcon.args = {
	id: 'avatar',
	componentSize: ComponentSizeENUM.medium,
	icon: iconsENUM.user,
}
export const UserImage = Template.bind({})

UserImage.parameters = {
	controls: {
		exclude: ['icon', 'name'],
	},
}
UserImage.args = {
	id: 'avatar',
	componentSize: ComponentSizeENUM.medium,
	image: profileImage,
}

export const UserName = Template.bind({})
UserName.parameters = {
	controls: {
		exclude: ['image', 'icon'],
	},
}
UserName.args = {
	id: 'avatar',
	componentSize: ComponentSizeENUM.medium,
	name: 'Alex',
}
