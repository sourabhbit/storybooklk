import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import Pagination from './index'
import { PaginationTypesENUM } from './Pagination.types'

export default {
	title: 'Components/v2/Pagination',
	component: Pagination,
	argTypes: {
		...generateGeneralArgs(),
		type: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Type of Pagination',
			category: 'Component',
			defaultValue: PaginationTypesENUM.storyMode,
			options: PaginationTypesENUM,
		}),
		activeIndex: generateArgTypes({
			type: 'number',
			required: true,
			description: 'active page',
			category: 'Component',
		}),
		count: generateArgTypes({
			type: 'number',
			required: true,
			description: 'Show/Hide Count',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
	<Pagination {...args} />
)

export const Image = Template.bind({})
Image.args = {
	id: 'pagination-image-id',
	type: PaginationTypesENUM.image,
	count: 10,
	activeIndex: 1,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
}

export const Video = Template.bind({})
Video.args = {
	id: 'pagination-video-id',
	type: PaginationTypesENUM.video,
	count: 12,
	activeIndex: 1,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
}

export const StoryMode = Template.bind({})
StoryMode.args = {
	id: 'pagination-pdp-id',
	type: PaginationTypesENUM.storyMode,
	count: 12,
	activeIndex: 1,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
}
