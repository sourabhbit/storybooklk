import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Slider from '../index'

const props = {
	id: 'Slider',
	startValue: '200',
	endValue: '700',
	maxRangeValue: 3000,
}

describe('<Slider />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Slider {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('slider-test')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
