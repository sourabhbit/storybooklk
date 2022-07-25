import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Dropdown from '../index'

const props = {
	id: 'dropdrow-id',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	options: ['Your Picks', 'Discover', 'Categories', 'Gold', 'Collabs', 'Labs'],
	SelectedIndex: 0,
}

describe('<Dropdown />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Dropdown {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('dropdown-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
