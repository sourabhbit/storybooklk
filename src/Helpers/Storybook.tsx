/**
 *
 * Don't touch this file without total knowledge.
 * All stories are built using these functions only.
 * Can break entire story book
 *
 */

import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from '../Types/general'

export const generateArgTypes = ({
	description,
	category,
	defaultValue,
	type,
	required,
	control,
	options,
}: storyBookArgTypes) => {
	const obj = {
		type: { name: type, required },
		description,
		table: {
			category,
			defaultValue: {},
		},
		control: {},
		options: {},
	}
	if (control) {
		obj.control = { type: control }
	}
	if (options) {
		obj.options = options
	}
	if (defaultValue) {
		obj.table.defaultValue = { summary: defaultValue }
	} else {
		obj.table.defaultValue = { summary: '-' }
	}
	return obj
}

export const generateGeneralArgs = () => {
	return {
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
		font: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Typography of the component',
			category: 'General',
			defaultValue: TypographyENUM.serif,
			control: 'radio',
			options: TypographyENUM,
		}),
		theme: generateArgTypes({
			type: 'string',
			required: true,
			description: 'Theme of the component',
			category: 'General',
			defaultValue: ThemeENUM.primary,
			control: 'radio',
			options: ThemeENUM,
		}),
	}
}

interface storyBookArgTypes {
	type: 'string' | 'number' | 'boolean' | 'symbol' | 'function' | 'array'
	required: boolean
	description: string
	category: string
	defaultValue?: string | boolean | number
	control?: string
	options?: any
}
