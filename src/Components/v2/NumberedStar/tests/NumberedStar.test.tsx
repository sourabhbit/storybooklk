import { render, screen } from '@testing-library/react'
import NumberedStar from '../index'

const props = {
	rating: 4.5,
}

describe('<NumberedStar />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<NumberedStar {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Numbered Star Component', () => {
		const container = screen.getByTestId('numbered-test')
		expect(container).toBeInTheDocument()
	})
})
