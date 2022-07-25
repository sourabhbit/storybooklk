import { SwatchTypes } from './Swatch.types'
import { SwatchWrapper, SwatchItem } from './styles'
import { useEffect, useState } from 'react'
import { action } from '@storybook/addon-actions'

const Swatch = ({ id, colors }: SwatchTypes) => {
	const [selected, setSelected] = useState<boolean[]>([])
	useEffect(() => {
		if (colors !== undefined && colors.length >= 1) {
			setSelected((prev) => [true, ...prev.slice(1)])
			action('default')({
				colorCode: colors[0],
			})
		}
	}, [colors])
	const handleHover = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		idx: number,
		item: string
	) => {
		const newArr = selected.map(() => false)
		newArr[idx] = true
		setSelected(newArr)
		action('color changed')(e, { colorCode: item })
	}

	if (colors !== undefined && colors.length > 0) {
		return (
			<SwatchWrapper data-testid="swatch-test" id={id}>
				{colors.map((item, idx) => (
					<SwatchItem
						data-testid="swatch-item"
						color={item}
						key={idx}
						selected={selected[idx]}
						onMouseOver={(e) => handleHover(e, idx, item)}
					/>
				))}
			</SwatchWrapper>
		)
	} else {
		return null
	}
}

export default Swatch
