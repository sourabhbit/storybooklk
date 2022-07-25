import React from 'react'
import { render, screen } from '@testing-library/react'
import Input from '../index'
import { inputs } from '../Input.types'
import { ComponentSizeENUM } from 'Types/general'

const onChange = jest.fn()

const props = {
	value: '',
	placeholder: 'Lorem ipsum',
	type: inputs.type.text,
	name: 'input',
	componentSize: ComponentSizeENUM.small,
	disabled: false,
	readonly: false,
	error: false,
	width: '50',
	onChange: onChange,
}

describe('Input Testcases', () => {
	function init(options: { updateProps: boolean }) {
		if (options.updateProps) {
			return null
		} else {
			render(<Input {...props} />)
		}
	}
	describe('Input Fields', () => {
		beforeEach(() => {
			init({ updateProps: false })
		})
		it('Should check rendering of input ', () => {
			expect(screen.queryByTestId('input-testid')).toBeTruthy()
		})
		it('Should render placeholder', () => {
			const titleElement = screen.queryByPlaceholderText(/Lorem ipsum/)
			expect(titleElement).toBeInTheDocument()
		})
	})
	describe('Update Props', () => {
		beforeEach(() => {
			init({ updateProps: true })
		})

		it('Should render with readOnly attribute if readonly is true!', () => {
			const changeProps = { ...props }
			changeProps.readonly = true
			render(<Input {...changeProps} />)
			expect(screen.queryByTestId('input-testid')).toHaveAttribute(
				'readOnly'
			)
		})
	})
})
