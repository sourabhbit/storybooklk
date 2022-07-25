import { render, screen } from '@testing-library/react'
import FormInput from '../index'
import { inputs } from '../Form.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'

const props = {
	value: '',
	placeholder: 'Lorem ipsum',
	type: inputs.type.text,
	name: 'input',
	componentSize: ComponentSizeENUM.small,
	disabled: false,
	readonly: false,
	error: false,
	showRightIcon: false,
	rightIcon: iconsENUM.backArrow,
	showLeftIcon: false,
	leftIcon: iconsENUM.tick,
	theme: ThemeENUM.primary,
	width: '50',
}

describe('FormInput Testcases', () => {
	function init(options: { updateProps: boolean }) {
		if (options.updateProps) {
			return null
		} else {
			render(<FormInput {...props} />)
		}
	}
	describe('Form Input', () => {
		beforeEach(() => {
			init({ updateProps: false })
		})
		it('Should check rendering of input ', () => {
			expect(screen.queryByTestId('form-input-testid')).toBeTruthy()
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
			render(<FormInput {...changeProps} />)
			expect(screen.queryByTestId('input-testid')).toHaveAttribute(
				'readOnly'
			)
		})
		it('Should render with left icon', () => {
			const changeProps = { ...props }
			changeProps.showLeftIcon = true
			render(<FormInput {...changeProps} />)
			const iconLeft = screen.getByRole('img')
			expect(iconLeft).toHaveAttribute('src', '/tick.svg')
			expect(iconLeft).toHaveAttribute('alt', 'leftIcon')
		})

		it('Should render with right icon', () => {
			const changeProps = { ...props }
			changeProps.showRightIcon = true
			render(<FormInput {...changeProps} />)
			const iconRight = screen.getByRole('img')
			expect(iconRight).toHaveAttribute('src', '/backArrow.svg')
			expect(iconRight).toHaveAttribute('alt', 'rightIcon')
		})

		it('Should render with error red color border', () => {
			const changeProps = { ...props }
			changeProps.error = true
			render(<FormInput {...changeProps} />)
			expect(screen.getByTestId('form-input-testid')).toHaveStyle(
				'border: 1px solid var(--terracotta-100)'
			)
		})
	})
})
