import { ComponentMeta, ComponentStory } from '@storybook/react'
import NavBar from 'Components/v2/NavBar'
import { generateArgTypes } from '../../../Helpers/Storybook'
import Bottomsheet from './index'

export default {
	title: 'Components/v2/Bottomsheet',
	component: Bottomsheet,
	argTypes: {
		children: {
			table: {
				category: 'Children',
			},
		},
		expanded: generateArgTypes({
			type: 'boolean',
			required: false,
			description: 'expand should available',
			category: 'Component',
		}),
		backdrop: generateArgTypes({
			type: 'boolean',
			required: false,
			description: 'backdrop should available',
			category: 'Component',
		}),
		scrollable: generateArgTypes({
			type: 'boolean',
			required: false,
			description: 'if we wish to add scroll in bottomsheet',
			category: 'Component',
		}),
		onClickBackdrop: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for filter',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Bottomsheet>

const Template: ComponentStory<typeof Bottomsheet> = (args) => (
	<Bottomsheet {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	children: (
		<p style={{ background: 'white' }}>
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
		</p>
	),
	expanded: true,
	backdrop: true,
	scrollable: true,
	onClickBackdrop: () => {
		expanded: false
	},
}
