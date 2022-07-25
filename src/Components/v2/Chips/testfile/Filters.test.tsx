import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import Chips from '../index'

const props = {
	id: 'active-id',
	text: 'Active Chips',
	count: 10,
	color: 'green',
	showColor: true,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	showIcon: false,
	icon: iconsENUM.glasses,
	onClick: jest.fn(),
}

describe('<Chips />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<Chips {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('Chip-wrapper')
		const count = screen.getByTestId('Chip-count')
		const text = screen.getByTestId('Chip-text')
		// const color = screen.getByTestId('Chip-color')
		expect(container).toBeInTheDocument()
		expect(count).toBeInTheDocument()
		expect(text).toBeInTheDocument()
		// expect(color).toBeInTheDocument()
	})

	it('Should not render component', () => {
		_rerender(<Chips {...props} count={undefined} />)
		const count = screen.queryByTestId('Chip-count')
		const color = screen.queryByTestId('Chip-color')
		expect(count).not.toBeInTheDocument()
		expect(color).not.toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
