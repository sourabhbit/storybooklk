import styled from 'styled-components'
import { ComponentSizeENUM, ThemeENUM } from '../../../../Types/general'

export const ProductTilesContainer = styled.div`
	display: flex;
	border: 2px var(--vivid-green-100) solid;
	border-radius: var(--border-radius-xs);
	width: max-content;
	padding: var(--spacing-sm) 0;
	background-color: var(--white);
`
export const ProductTilesContent = styled.div`
	display: flex;
	flex-direction: column;
	padding-right: var(--pd-50);
`

export const ProductTilesDetails = styled.div<{
	styleSize: ComponentSizeENUM
	styleTheme: ThemeENUM
}>`
	font-family: var(--font-serif);
	font-weight: var(--fw-light);
	color: ${(props) =>
		props.styleTheme === ThemeENUM.primary
			? 'var(--dark-blue-100)'
			: 'var(--white)'};
	font-size: ${(props) =>
		props.styleSize === ComponentSizeENUM.small
			? 'var(--fs-14)'
			: props.styleSize === ComponentSizeENUM.medium
			? 'var(--fs-18)'
			: props.styleSize === ComponentSizeENUM.large
			? 'var(--fs-26)'
			: ''};
`
