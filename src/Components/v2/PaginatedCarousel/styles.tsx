import styled from 'styled-components'

export const PageCard = styled.div`
	display: block;
	width: 400px;
	height: 550px;
	position: relative;
`
export const PageImage = styled.img<{
	activeIndex: number
	currentIndex: number
}>`
	display: ${(props) =>
		props.activeIndex === props.currentIndex ? 'block' : 'none'};
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
`
export const PageVideo = styled.video<{
	activeIndex: number
	currentIndex: number
}>`
	display: ${(props) =>
		props.activeIndex === props.currentIndex ? 'block' : 'none'};
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	background-color: var(--black);
`
export const PaginationContainer = styled.div`
	position: absolute;
	bottom: 10px;
	left: 0;
`
