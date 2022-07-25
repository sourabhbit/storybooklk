import styled from 'styled-components'

export const SwatchWrapper = styled.div`
	display: flex;
	flex-direction: row;
	overflow-x: auto;
	white-space: nowrap;
	gap: 5px;
`
export const SwatchItemWrapper = styled.div``
export const SwatchItem = styled.div<{
	color: string
	selected: boolean
}>`
	min-height: 12px;
	min-width: 12px;
	/* margin: 0 8px; */
	border-radius: 50%;
	background-color: ${(props) => props.color};
	pointer-events: auto;
	cursor: pointer;
	box-sizing: border-box;
	border: ${(props) =>
		props.selected ? '1px solid var(--dark-blue-100)' : 'none'};
	box-shadow: ${(props) =>
		props.selected ? 'inset 0px 0px 0px 2px var(--warm-grey-25)' : 'none'};
`
