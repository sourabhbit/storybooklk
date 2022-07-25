import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../../Types/general'
import ProductCard from '../index'
import { ProductCardTypesENUM } from '../ProductCard.types'

const props = {
	id: 'ProductCard-id',
	type: ProductCardTypesENUM.small,
	componentSize: ComponentSizeENUM.medium,
	activeIndex: 1,
	count: 10,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	onClick: jest.fn(),
}

describe('<ProductCard />', () => {
	let _asFragment: any = null

	beforeEach(() => {
		const { asFragment } = render(<ProductCard {...props} />)
		_asFragment = asFragment
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('ProductCard-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
