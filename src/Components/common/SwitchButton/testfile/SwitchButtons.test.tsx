import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { sizesENUM } from '../SwitchButton.types'
import Switchbutton from '../index'

const props = {
	name: 'switch button',
	id: 'button-id',
	leftText: 'VIEW FRAMES',
	rightText: 'VIEW 3D',
	currentStatus: false,
	size: sizesENUM.small,
	onClick: jest.fn(),
}

describe('<Switchbutton />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<Switchbutton {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('switchButton')
		expect(container).toBeInTheDocument()
	})

	it('text should render', () => {
		const leftText = screen.getByTestId('switch-leftText')
		const rightText = screen.getByTestId('switch-rightText')
		expect(leftText).toBeInTheDocument()
		expect(rightText).toBeInTheDocument()
	})

	it('text should not render', () => {
		_rerender(<Switchbutton {...props} leftText={''} rightText={''} />)
		const leftText = screen.queryByTestId('switch-leftText')
		const rightText = screen.queryByTestId('switch-rightText')
		expect(leftText).not.toBeInTheDocument()
		expect(rightText).not.toBeInTheDocument()
	})

	it('onclick function should run', () => {
		fireEvent.click(screen.getByTestId('switch-label'))
		expect(props.onClick).toHaveBeenCalledTimes(1)
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
