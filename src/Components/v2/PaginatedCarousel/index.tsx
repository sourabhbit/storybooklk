import { PageCard, PageImage, PageVideo, PaginationContainer } from './styles'
import { PaginationCarouselTypes } from './PaginatedCarousel.types'
import { PaginationTypesENUM } from 'Components/v2/Pagination/Pagination.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Pagination from 'Components/v2/Pagination'
import React, { useCallback, useEffect, useState } from 'react'
/**
 * Default PaginationCarousel Component
 */
const PaginationCarousel = ({
	images = [],
	videos = [],
	type = PaginationTypesENUM.image,
	timeGap = 5000,
}: PaginationCarouselTypes) => {
	const count =
		type === PaginationTypesENUM.image ? images.length : videos.length
	const [activeIndex, setActiveIndex] = useState(0)
	const changeIndex = useCallback(
		(decrement = false) => {
			if (!decrement)
				setActiveIndex((a: number) => (a === count - 1 ? 0 : a + 1))
			else setActiveIndex((a: number) => (a === 0 ? count - 1 : a - 1))
		},
		[count, setActiveIndex]
	)

	useEffect(() => {
		const timeJump = setInterval(() => {
			if (type === PaginationTypesENUM.image) changeIndex()
		}, timeGap)
		return () => {
			clearInterval(timeJump)
		}
	}, [type, changeIndex])

	const changeSlide = useCallback(
		(e) => {
			const ele = e.target
			const rect = ele.getBoundingClientRect()
			const value = e.pageX
			console.log(rect, value, 'boundRect')
			const fourthValue = rect.width / 4
			const rightSideClicked = rect.right - fourthValue <= value
			const leftSideClicked = rect.left + fourthValue >= value
			if (rightSideClicked) changeIndex()
			else if (leftSideClicked) changeIndex(true)
			else if (type === PaginationTypesENUM.video) {
				if (ele.paused) ele.play()
				else ele.pause()
			}
		},
		[type]
	)

	return (
		<PageCard>
			{type === PaginationTypesENUM.image
				? images.map((im, i) => (
						<React.Fragment key={i}>
							<PageImage
								onClick={changeSlide}
								currentIndex={i}
								activeIndex={activeIndex}
								src={im}
								alt=""
							/>
						</React.Fragment>
				  ))
				: videos.map((vd, i) => (
						<React.Fragment key={i}>
							{i === activeIndex && (
								<PageVideo
									onClick={changeSlide}
									onEnded={changeIndex}
									autoPlay
									currentIndex={i}
									activeIndex={activeIndex}
									src={vd}
								/>
							)}
						</React.Fragment>
				  ))}
			<PaginationContainer>
				<Pagination
					id="di-dd"
					type={type}
					componentSize={ComponentSizeENUM.medium}
					activeIndex={activeIndex}
					count={count}
					theme={
						type === PaginationTypesENUM.image
							? ThemeENUM.primary
							: ThemeENUM.secondary
					}
					font={TypographyENUM.serif}
					onClick={(idx) => setActiveIndex(idx)}
				/>
			</PaginationContainer>
		</PageCard>
	)
}

export default PaginationCarousel
