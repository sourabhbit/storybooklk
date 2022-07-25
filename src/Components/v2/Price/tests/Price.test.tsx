import { render, screen } from '@testing-library/react'
import Pricing from '../index'

const props = {
	amount: '999',
	special: false,
	id: '',
}

describe('<NumberedStar />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<Pricing {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Price Component', () => {
		const container = screen.getByTestId('pricing-test')
		expect(container).toBeInTheDocument()
	})
})
