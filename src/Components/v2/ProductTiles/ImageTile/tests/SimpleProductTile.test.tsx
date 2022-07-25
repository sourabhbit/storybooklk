import { render, screen } from '@testing-library/react'
import SimpleProductTiles from '../index'
import image from '../../assets/image.png'

const props = {
	id: '',
	image: image,
}

describe('<NumberedStar />', () => {
	let wrapper: any = null

	beforeEach(() => {
		const { asFragment } = render(<SimpleProductTiles {...props} />)
		wrapper = asFragment
	})

	afterAll(() => {
		wrapper = null
	})

	it('Should take a snapshot', () => {
		expect(wrapper()).toMatchSnapshot()
	})
	it('Should render Price Component', () => {
		const container = screen.getByTestId('simple-tile-test')
		expect(container).toBeInTheDocument()
	})
})
