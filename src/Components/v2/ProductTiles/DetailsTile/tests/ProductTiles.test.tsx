import { render, screen } from '@testing-library/react'
import ProductTiles from '../index'
import image from '../../assets/image.png'

const props = {
	product: 'Product',
	amount: '999',
	special: false,
	image: image,
	id: 'product-tile',
}

describe('<NumberedStar />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<ProductTiles {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Price Component', () => {
		const container = screen.getByTestId('product-tiles-test')
		expect(container).toBeInTheDocument()
	})
})
