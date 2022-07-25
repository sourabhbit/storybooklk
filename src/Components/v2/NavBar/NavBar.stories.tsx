import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from '../../../Helpers/Storybook'
import NavBar from './index'

export default {
	title: 'Components/v2/NavBar',
	component: NavBar,
	argTypes: {
		options: generateArgTypes({
			type: 'array',
			required: true,
			description: 'Show dropdown options',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof NavBar>

const Template: ComponentStory<typeof NavBar> = () => (
	<NavBar
		options={[
			'Your Picks',
			'Discover',
			'Categories',
			'Gold',
			'Collabs',
			'Labs',
		]}
	/>
)

export const Overview = Template.bind({})
