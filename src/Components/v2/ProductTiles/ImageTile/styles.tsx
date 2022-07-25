import styled from 'styled-components'
import { ComponentSizeENUM } from '../../../../Types/general'

export const SimpleProductTilesContainer = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	padding: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? 'var(--spacing-sm)'
			: props.styleSize === ComponentSizeENUM.medium
			? 'var(--spacing-md)'
			: props.styleSize === ComponentSizeENUM.large
			? 'var(--spacing-lg)'
			: ''};
	background-color: var(--white);
	border-radius: var(--border-radius-xs);
	width: max-content;
`
export const SimpleProductImage = styled.img`
	width: auto;
	height: auto;
`
