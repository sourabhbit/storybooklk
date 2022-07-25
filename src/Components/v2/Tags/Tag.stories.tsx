import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import Tag from './index'

export default {
	title: 'Components/v2/Tag',
	component: Tag,
	argTypes: {
		...generateGeneralArgs(),
		name: generateArgTypes({
			type: 'string',
			required: false,
			description: 'name that will be rendered',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof Tag>

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />

export const Overview = Template.bind({})
Overview.args = {
	id: 'tag',
	name: 'SUITS YOU',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
}
