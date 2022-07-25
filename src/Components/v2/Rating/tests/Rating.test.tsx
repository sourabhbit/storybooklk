import { render, screen } from '@testing-library/react'
import NumericalRating from '../index'

const props = {
	rating: 4.5,
}

describe('<NumericalRating />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<NumericalRating {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Numerical Rating component', () => {
		const container = screen.getByTestId('rating-test')
		expect(container).toBeInTheDocument()
	})
})
