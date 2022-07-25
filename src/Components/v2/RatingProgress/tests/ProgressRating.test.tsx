import { render, screen } from '@testing-library/react'
import ProgressRatings from '../index'

const props = {
	rating: 4.5,
	max: 5,
}

describe('<ProgressRatings />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<ProgressRatings {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Progress Rating component', () => {
		const container = screen.getByTestId('progress-test')
		expect(container).toBeInTheDocument()
	})
})
