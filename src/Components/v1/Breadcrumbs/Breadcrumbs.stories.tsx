import { ComponentMeta, ComponentStory } from '@storybook/react'
import { generateArgTypes } from 'Helpers/Storybook'
import Breadcrumbs from './index'

export default {
	title: 'Components/v1/Breadcrumbs',
	component: Breadcrumbs,
	argTypes: {
		id: generateArgTypes({
			type: 'string',
			required: true,
			description: 'String used as unique identifier',
			category: 'General',
		}),
		productID: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Product Id that will render',
			category: 'Component',
			defaultValue: '147654',
		}),
		contactLensPowerFromUrl: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Redirect Link for Contact lens',
			category: 'Component',
			defaultValue: '',
		}),
		helplineNo: generateArgTypes({
			type: 'string',
			required: false,
			description: 'Helpline line no. that will render ',
			category: 'Component',
			defaultValue: '1800-111-111',
		}),
	},
} as ComponentMeta<typeof Breadcrumbs>

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
	<Breadcrumbs {...args} />
)
export const Overview = Template.bind({})
Overview.args = {
	id: 'Breadcrumbs',
	productID: '147654',
	contactLensPowerFromUrl: '',
	helplineNo: '1800-111-111',
	dataLocale: {
		PROBLEM_IN_PLACING_ORDER: 'Problem in placing order ? Give a missed call',
	},
}
