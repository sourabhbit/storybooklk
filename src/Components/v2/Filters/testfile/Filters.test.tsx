import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import { iconsENUM } from 'Types/icons'
import FiltersComp from '../index'

const props = {
	id: 'active-id',
	text: 'Active Filters',
	count: 10,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	showIcon: false,
	icon: iconsENUM.glasses,
	onClick: jest.fn(),
}

describe('<FiltersComp />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<FiltersComp {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('filter-wrapper')
		const count = screen.getByTestId('filter-count')
		const text = screen.getByTestId('filter-text')
		// const color = screen.getByTestId('filter-color')
		expect(container).toBeInTheDocument()
		expect(count).toBeInTheDocument()
		expect(text).toBeInTheDocument()
		// expect(color).toBeInTheDocument()
	})

	it('Should not render component', () => {
		_rerender(<FiltersComp {...props} count={undefined} />)
		const count = screen.queryByTestId('filter-count')
		const color = screen.queryByTestId('filter-color')
		expect(count).not.toBeInTheDocument()
		expect(color).not.toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
