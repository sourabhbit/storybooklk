import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Accordian from './index'

export default {
	title: 'Components/v2/Accordian',
	component: Accordian,
	argTypes: {
		...generateGeneralArgs(),
		text: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Show accordian heading',
			category: 'Component',
		}),
		icon: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Show icon',
			category: 'Component',
		}),
		options: generateArgTypes({
			type: 'array',
			required: true,
			description: 'Show accordian options',
			category: 'Component',
		}),
	},
} as ComponentMeta<typeof Accordian>

const Template: ComponentStory<typeof Accordian> = (arges) => (
	<Accordian {...arges} />
)

export const Overview = Template.bind({})
Overview.args = {
	id: 'accordian-id',
	text: 'Included',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	options: [
		'Free shipping & returns',
		'365 day warranty',
		'Money back gurantee',
	],
}
