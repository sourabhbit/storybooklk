import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Accordian from '../index'

const props = {
	id: 'accordian-id',
	text: 'Included',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.secondary,
	font: TypographyENUM.serif,
	options: [
		'Free shipping & returns',
		'365 day warranty',
		'Money back gurantee',
	],
}

describe('<Accordian />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Accordian {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('accordian-container')
		// const option = screen.queryByTestId('option-wrapper')
		expect(container).toBeInTheDocument()
		// expect(option).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
