import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Divider from '../index'

const props = {
	id: 'swatch',
}

describe('<Divider />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Divider {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('divider-test')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
