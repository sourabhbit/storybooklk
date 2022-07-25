import '@testing-library/jest-dom'
import { render, screen /*, fireEvent*/ } from '@testing-library/react'
import NavBar from 'Components/v2/NavBar'
import BottomSheet from '../index'

const props = {
	children: (
		<p style={{ background: 'white' }}>
			<NavBar
				options={[
					'Your Picks',
					'Discover',
					'Categories',
					'Gold',
					'Collabs',
					'Labs',
				]}
			/>
		</p>
	),
	expanded: true,
	backdrop: true,
	scrollable: true,
	onClickBackdrop: () => null,
}

describe('<BottomSheet />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<BottomSheet {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const bottomsheet = screen.queryByTestId('bottomsheet-container')
		const backdrop = screen.queryByTestId('backdrop-container')
		expect(bottomsheet).toBeInTheDocument()
		expect(backdrop).toBeInTheDocument()
	})

	// it('should call function ', () => {
	//     fireEvent.click(screen.getByTestId('backdrop-container'))
	// 	expect(props.onClickBackdrop).toHaveBeenCalledTimes(1)
	// })

	it('should not render component', () => {
		_rerender(<BottomSheet {...props} expanded={false} />)
		const backdrop = screen.queryByTestId('backdrop-container')
		expect(backdrop).not.toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
