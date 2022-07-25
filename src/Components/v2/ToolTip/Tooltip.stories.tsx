import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from 'Components/v2/Button'
import { ComponentSizeENUM, ThemeENUM } from '../../../Types/general'
import Tooltip from './index'
import { Children, Paragraph } from './styles'

export default {
	title: 'Components/v2/Tooltip',
	component: Tooltip,
	argTypes: {
		children: {
			table: {
				category: 'Children',
			},
		},
	},
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />

export const Overview = Template.bind({})
Overview.args = {
	children: (
		<Children>
			<Paragraph>
				Like and dislike frames to help create your personalised collection
			</Paragraph>
			<Button
				text={"Hello I'm Button"}
				id={'button'}
				showChildren={false}
				componentSize={ComponentSizeENUM.small}
				theme={ThemeENUM.primary}
				active={true}
			/>
		</Children>
	),
}
