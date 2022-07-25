import { ComponentMeta, ComponentStory } from '@storybook/react'
import { sizesENUM } from './SwitchButton.types'
import SwitchButton from './index'

export default {
	title: 'Components/common/SwitchButton',
	component: SwitchButton,
	argTypes: {
		name: {
			table: {
				category: 'General',
			},
		},
		id: {
			table: {
				category: 'General',
			},
		},
		disabled: {
			table: {
				category: 'Status',
			},
		},
		onClick: {
			table: {
				category: 'Events',
			},
		},
	},
} as ComponentMeta<typeof SwitchButton>

const Template: ComponentStory<typeof SwitchButton> = (args) => (
	<SwitchButton {...args} />
)

export const Overview = Template.bind({})
Overview.args = {
	name: 'button',
	id: 'button-id',
	leftText: 'VIEW FRAMES',
	rightText: 'VIEW 3D',
	currentStatus: false,
	size: sizesENUM.small,
}
