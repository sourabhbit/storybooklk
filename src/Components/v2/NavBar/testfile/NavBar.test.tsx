import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Navbar from '../index'

const props = {
	options: ['Your Picks', 'Discover', 'Categories', 'Gold', 'Collabs', 'Labs'],
}

describe('<Navbar />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Navbar {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('navbar-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
