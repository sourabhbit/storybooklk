import { render, screen } from '@testing-library/react'
import Skeleton from '../index'
import { typeENUM } from '../Skeleton.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'

const props = {
	componentSize: ComponentSizeENUM.small,
	id: 'title-skeleton',
	animation: true,
	theme: ThemeENUM.primary,
	type: typeENUM.title,
	paragraphRows: 1,
}

describe('Skeleton Testcases', () => {
	function init(options: { updateProps: boolean }) {
		if (options.updateProps) {
			return null
		} else {
			render(<Skeleton {...props} />)
		}
	}
	describe('Skeleton', () => {
		beforeEach(() => {
			init({ updateProps: false })
		})
		it('Should check rendering of Skeleton of Title ', () => {
			expect(screen.queryByTestId('title-skeleton')).toBeTruthy()
		})
	})
	describe('Update Props', () => {
		beforeEach(() => {
			init({ updateProps: true })
		})

		it('Should render Skeleton of button if type is button!', () => {
			const changeProps = { ...props }
			changeProps.type = typeENUM.button
			render(<Skeleton {...changeProps} />)
			expect(screen.queryByTestId('button-skeleton')).toBeTruthy()
		})

		it('Should render Skeleton of paragraph if type is paragraph!', () => {
			const changeProps = { ...props }
			changeProps.type = typeENUM.paragraph
			render(<Skeleton {...changeProps} />)
			expect(screen.queryByTestId('paragraph-skeleton')).toBeTruthy()
		})

		it('Should render Skeleton of image if type is image!', () => {
			const changeProps = { ...props }
			changeProps.type = typeENUM.image
			render(<Skeleton {...changeProps} />)
			expect(screen.queryByTestId('image-skeleton')).toBeTruthy()
		})
	})
})
