import { ComponentMeta, ComponentStory } from '@storybook/react'
import { typeENUM } from './Skeleton.types'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import Skeleton from './index'

export default {
	title: 'Components/v2/Skeleton',
	component: Skeleton,
	argTypes: {
		...generateGeneralArgs(),
		animation: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to set animation on component',
			category: 'Component',
			defaultValue: 'false',
		}),
		type: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Type of input will be rendered',
			category: 'Component',
			defaultValue: typeENUM.title,
			control: 'select',
			options: typeENUM,
		}),
		paragraphRows: generateArgTypes({
			type: 'number',
			required: true,
			description: 'No of rows will be rendered in Paragraph',
			category: 'Component',
			defaultValue: 1,
		}),
	},
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
	<Skeleton {...args} />
)

export const Title = Template.bind({})
Title.args = {
	id: 'title-skeleton',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	animation: true,
	type: typeENUM.title,
}

export const Button = Template.bind({})
Button.args = {
	id: 'button-skeleton',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	animation: true,
	type: typeENUM.button,
}

export const Paragraph = Template.bind({})
Paragraph.args = {
	id: 'paragraph-skeleton',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	animation: true,
	type: typeENUM.paragraph,
	paragraphRows: 3,
}

export const Image = Template.bind({})
Image.args = {
	id: 'image-skeleton',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	animation: true,
	type: typeENUM.image,
}
