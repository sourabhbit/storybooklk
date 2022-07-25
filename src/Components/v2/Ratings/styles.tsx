import styled from 'styled-components'
import { ComponentSizeENUM } from 'Types/general'

export const RatingsWrapper = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	display: flex;
	overflow: hidden;
`
export const SVGComponentWrapper = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	margin-right: var(--spacing-sm);
	height: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? '20px'
			: props.styleSize === ComponentSizeENUM.medium
			? '40px'
			: props.styleSize === ComponentSizeENUM.large
			? '60px'
			: ''};

	width: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? '20px'
			: props.styleSize === ComponentSizeENUM.medium
			? '40px'
			: props.styleSize === ComponentSizeENUM.large
			? '60px'
			: ''};
`
