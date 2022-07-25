import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'
import CheckBox from '../index'

const props = {
	label: 'black',
	checked: false,
	size: ComponentSizeENUM.medium,
	font: TypographyENUM.serif,
	onChange: jest.fn(),
}

describe('<CheckBox />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<CheckBox {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('checkbox-test')
		expect(container).toBeInTheDocument()
	})

	// it('Should call function onClick', () => {
	// 	const mainDrop = screen.getByTestId('checkbox-test')
	// 	userEvent.click(mainDrop)
	// })

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
