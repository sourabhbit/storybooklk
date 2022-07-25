import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes, generateGeneralArgs } from 'Helpers/Storybook'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { buttons, kindENUM } from './Capsule.types'
import Capsule from './index'

export default {
	title: 'Components/v2/Capsule',
	component: Capsule,
	argTypes: {
		...generateGeneralArgs(),
		text: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Text that will be rendered',
			category: 'Component',
			defaultValue: 'Hello I"m Button',
		}),
		kind: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Kind of button will be rendered',
			category: 'Component',
			defaultValue: kindENUM.background,
			control: 'radio',
			options: kindENUM,
		}),
		showRightImage: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show/hide right icon',
			category: 'Component',
			defaultValue: 'false',
		}),
		rightImage: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Select Icon for the right side of button',
			category: 'Component',
		}),
		showLeftImage: generateArgTypes({
			type: 'boolean',
			required: true,
			description: 'Boolean to show/hide left icon',
			category: 'Component',
			defaultValue: 'false',
		}),
		leftImage: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Select Icon for the left side of button',
			category: 'Component',
		}),
		onClick: generateArgTypes({
			type: 'function',
			required: false,
			description: 'onClick handler for button',
			category: 'Events',
		}),
	},
} as ComponentMeta<typeof Capsule>

const Template: ComponentStory<typeof Capsule> = (args) => <Capsule {...args} />

export const Overview = Template.bind({})
Overview.args = {
	text: 'Sunglasses',
	id: 'button-capsules',
	kind: buttons.kind.background,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	showLeftImage: false,
	showRightImage: true,
	rightImage: '',
	leftImage: '',
}
