import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from './index'
import { buttons } from './Steps.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'

const onClick = jest.fn()

const props = {
	text: 'labelText',
	subText: '',
	name: '',
	kind: buttons.kind.background,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	className: '',
	type: buttons.type.button,
	id: '',
	disabled: false,
	loading: false,
	success: false,
	active: false,
	rightIcon: iconsENUM.tick,
	leftIcon: iconsENUM.cross,
	showRightIcon: false,
	showLeftIcon: false,
	showChildren: false,
	onClick: onClick,
}

describe('Button Testcases', () => {
	function init(options: { updateProps: boolean }) {
		if (options.updateProps) {
			return null
		} else {
			render(<Button {...props} />)
		}
	}
	describe('Button', () => {
		beforeEach(() => {
			init({ updateProps: false })
		})
		it('Should check rendering of button ', () => {
			expect(screen.queryByTestId('button-testid')).toBeTruthy()
		})
		it('Should render label and sublabel', () => {
			const titleElement = screen.getByText(/labelText/)
			expect(titleElement).toBeInTheDocument()
		})
	})
	describe('Update Props', () => {
		beforeEach(() => {
			init({ updateProps: true })
		})

		it('Should call props `onClick`', () => {
			const clickProps = { ...props }
			clickProps.onClick = jest.fn()
			render(<Button {...clickProps} />)
			fireEvent.click(screen.getByRole('button'))
			expect(clickProps.onClick).toHaveBeenCalledTimes(1)
		})
	})
})
