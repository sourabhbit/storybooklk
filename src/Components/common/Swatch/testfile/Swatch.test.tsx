import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Swatch from '../index'
import { addons, mockChannel } from '@storybook/addons'

addons.setChannel(mockChannel())
const customColors = [
	'#705C65',
	'#506E93',
	'#FFE091',
	'#EEEBEB',
	'#C4C4C4',
	'#4B5944',
	'#908942',
]
const props = {
	id: 'swatch',
	onmouseover: jest.fn(),
	colors: customColors,
}

describe('<Swatch />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<Swatch {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('swatch-test')
		expect(container).toBeInTheDocument()
	})

	it('component should not render if no colors', () => {
		_rerender(<Swatch {...props} colors={[]} />)
		const container = screen.queryByTestId('swatch-test')
		expect(container).not.toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
