import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {
	ComponentSizeENUM,
	ThemeENUM,
	TypographyENUM,
} from '../../../../Types/general'
import Pagination from '../index'
import { PaginationTypesENUM } from '../Pagination.types'

const props = {
	id: 'pagination-id',
	type: PaginationTypesENUM.storyMode,
	componentSize: ComponentSizeENUM.medium,
	activeIndex: 1,
	count: 10,
	theme: ThemeENUM.primary,
	font: TypographyENUM.serif,
	onClick: jest.fn(),
}

describe('<Pagination />', () => {
	let _asFragment: any = null
	let _rerender: any = null

	beforeEach(() => {
		const { asFragment, rerender } = render(<Pagination {...props} />)
		_asFragment = asFragment
		_rerender = rerender
	})

	afterAll(() => {
		_asFragment = null
	})

	it('Should render component', () => {
		const container = screen.getByTestId('pagination-wrapper')
		expect(container).toBeInTheDocument()
	})

	it('Should render pdp/video Component', () => {
		const count = 1
		_rerender(
			<Pagination
				{...props}
				count={count}
				type={PaginationTypesENUM.storyMode}
			/>
		)
		const paginationLine = screen.queryAllByTestId('pagination-line')
		expect(paginationLine[0]).toBeInTheDocument()
		expect(paginationLine.length === count)
	})

	it('Should render circle component', () => {
		const count = 1
		_rerender(
			<Pagination
				{...props}
				count={count}
				type={PaginationTypesENUM.image}
			/>
		)
		const stepCounts = screen.queryAllByTestId('semi-circle-container')
		const leftCircles = screen.queryAllByTestId('pagination-circle-left')
		const rightCircles = screen.queryAllByTestId('pagination-circle-right')
		expect(stepCounts[0]).toBeInTheDocument()
		expect(stepCounts.length === count + 2)
		expect(leftCircles[0]).toBeInTheDocument()
		expect(rightCircles[0]).toBeInTheDocument()
		expect(
			leftCircles.length === count + 1 && rightCircles.length === count + 1
		)
	})

	it('Should take a snapshot', () => {
		expect(_asFragment()).toMatchSnapshot()
	})
})
