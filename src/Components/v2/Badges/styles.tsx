import styled from 'styled-components'
import { ComponentSizeENUM } from 'Types/general'

const getSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return '8px'
	} else if (size === ComponentSizeENUM.medium) {
		return '10px'
	} else {
		return '12px'
	}
}
export const BadgesWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: fit-content;
`

export const Indicator = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	position: absolute;
	top: -2px;
	right: -2px;
	height: ${(props) => getSize(props.styleSize)};
	width: ${(props) => getSize(props.styleSize)};
	background-color: var(--terracotta-100);
	border: 2px solid var(--warm-grey-50);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
`
