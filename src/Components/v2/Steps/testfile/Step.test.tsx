import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../../Types/general'
import Step from '../index'

const props = {
	id: 'step',
	totalStep: 2,
	currentStep: 1,
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	onClick: () => null,
}

describe('<Step />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Step {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('step-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
