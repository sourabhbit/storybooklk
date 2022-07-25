import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import PaginationCarousel from './index'
import { PaginationTypesENUM } from 'Components/v2/Pagination/Pagination.types'

export default {
	title: 'Components/v2/PaginationCarousel',
	component: PaginationCarousel,
	argTypes: {
		...generateGeneralArgs(),
		type: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Type of PaginationCarousel',
			category: 'Component',
			defaultValue: PaginationTypesENUM.image,
			options: PaginationTypesENUM,
		}),
		images: generateArgTypes({
			type: 'array',
			required: false,
			description: 'Type of Pagination',
			category: 'Component',
		}),
		videos: generateArgTypes({
			type: 'array',
			required: false,
			description: 'active page',
			category: 'Component',
		}),
		timeGap: generateArgTypes({
			type: 'number',
			required: false,
			description: 'Time gap',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof PaginationCarousel>

const Template: ComponentStory<typeof PaginationCarousel> = (args) => (
	<PaginationCarousel {...args} />
)

export const Image = Template.bind({})
Image.args = {
	images: [
		'https://m.media-amazon.com/images/I/51JoHN2KUmL._UL1500_.jpg',
		'https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/999/2021/03/lafont-woman-eyeglasses-feb-18-2021-e1615219445607.jpg',
		'https://images.ctfassets.net/u4vv676b8z52/2DwKmc49gOK8xxrxOisudo/650d40dbdc8e4347db185630b464ed03/hero-famous-men-eyeglasses-johnny-depp-678x446.jpg?fm=jpg&q=80',
	],
	videos: [
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
	],
	type: PaginationTypesENUM.image,
	timeGap: 1000,
}

export const Video = Template.bind({})
Video.args = {
	images: [
		'https://m.media-amazon.com/images/I/51JoHN2KUmL._UL1500_.jpg',
		'https://da4e1j5r7gw87.cloudfront.net/wp-content/uploads/sites/999/2021/03/lafont-woman-eyeglasses-feb-18-2021-e1615219445607.jpg',
		'https://images.ctfassets.net/u4vv676b8z52/2DwKmc49gOK8xxrxOisudo/650d40dbdc8e4347db185630b464ed03/hero-famous-men-eyeglasses-johnny-depp-678x446.jpg?fm=jpg&q=80',
	],
	videos: [
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
		'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
	],
	type: PaginationTypesENUM.video,
	timeGap: 1000,
}
