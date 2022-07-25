import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, TypographyENUM } from '../../../../Types/general'
import Navbutton from '../index'

const props = {
	id: 'nav-button-id',
	text: 'Your Picks',
	componentSize: ComponentSizeENUM.small,
	font: TypographyENUM.serif,
	selectedNav: 1,
	index: 0,
	onClick: jest.fn(),
}

describe('<Navbutton />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Navbutton {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('nav-button')
		expect(container).toBeInTheDocument()
	})

	it('Should text component', () => {
		const container = screen.getByTestId('nav-text')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
