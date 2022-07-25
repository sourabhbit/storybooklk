import {
	PaginationWrapper,
	PaginationCircle,
	SemiCircleContainer,
	PaginationLine,
} from './styles'
import {
	PaginationTypes,
	PaginationTypesENUM,
	PositionENUM,
} from './Pagination.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'

/**
 * Default Pagination Component
 */
const Pagination = ({
	id,
	type = PaginationTypesENUM.storyMode,
	componentSize = ComponentSizeENUM.medium,
	activeIndex = 1,
	count = 10,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
	onClick,
}: PaginationTypes) => {
	const modIndex = count !== 0 ? activeIndex % count : 0
	return (
		<PaginationWrapper
			data-testid="pagination-wrapper"
			styleFont={font}
			styleSize={componentSize}
			id={id}
		>
			{type === PaginationTypesENUM.image
				? Array.from({ length: count + 2 }, (elem, idx) => (
						<SemiCircleContainer
							theme={theme}
							size={componentSize}
							data-testid="semi-circle-container"
							key={idx}
							active={
								idx === modIndex + 1 && idx !== 0 && idx !== count + 1
							}
							onClick={() => {
								if (
									idx !== 0 &&
									idx !== count + 1 &&
									onClick &&
									typeof onClick === 'function'
								)
									onClick(idx - 1)
							}}
						>
							{idx !== 0 && (
								<PaginationCircle
									position={PositionENUM.left}
									size={componentSize}
									data-testid="pagination-circle-left"
									active={idx === modIndex + 1 || idx === modIndex + 2}
									theme={theme}
								/>
							)}
							{idx !== count + 1 && (
								<PaginationCircle
									position={PositionENUM.right}
									size={componentSize}
									data-testid="pagination-circle-right"
									active={idx === modIndex + 1 || idx === modIndex}
									theme={theme}
								/>
							)}
						</SemiCircleContainer>
				  ))
				: Array.from({ length: count }, (elem, idx) => (
						<PaginationLine
							active={idx === modIndex}
							key={idx}
							data-testid="pagination-line"
							size={componentSize}
							theme={theme}
							lineType={type}
							onClick={() => {
								if (onClick && typeof onClick === 'function')
									onClick(idx)
							}}
						/>
				  ))}
		</PaginationWrapper>
	)
}

export default Pagination
