import { render, screen } from '@testing-library/react'
import Ratings from '../index'

const props = {
	rating: 4.5,
	max: 5,
}

describe('<Ratings />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<Ratings {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Ratings component', () => {
		const container = screen.getByTestId('ratings-test')
		expect(container).toBeInTheDocument()
	})
})
