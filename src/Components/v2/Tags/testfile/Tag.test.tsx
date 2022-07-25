import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../../Types/general'
import Tag from '../index'

const props = {
	id: 'tag',
	name: 'SUITS YOU',
	componentSize: ComponentSizeENUM.small,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
}

describe('<Tag />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<Tag {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('tag-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
