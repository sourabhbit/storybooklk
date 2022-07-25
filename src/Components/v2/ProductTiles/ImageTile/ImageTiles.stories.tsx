import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import { ComponentSizeENUM } from 'Types/general'
import SimpleProducTiles from './index'

export default {
	title: 'Components/v2/ProductTiles/Simple',
	component: SimpleProducTiles,
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
	},
} as ComponentMeta<typeof SimpleProducTiles>

const Template: ComponentStory<typeof SimpleProducTiles> = (args) => (
	<SimpleProducTiles {...args} />
)

export const SimpleTile = Template.bind({})
SimpleTile.args = {
	id: 'simple product tile',
	componentSize: ComponentSizeENUM.medium,
}
