import styled from 'styled-components'
import { ComponentSizeENUM } from '../../../Types/general'
export const ProgressContainer = styled.div``
export const RatingProgress = styled.div<{ styleSize: ComponentSizeENUM }>`
	progress[value] {
		appearance: none;
		height: ${(props) =>
			props.styleSize === ComponentSizeENUM.small
				? '3px'
				: props.styleSize === ComponentSizeENUM.medium
				? '6px'
				: props.styleSize === ComponentSizeENUM.large
				? '9px'
				: ''};
		width: ${(props) =>
			props.styleSize === ComponentSizeENUM.small
				? '127px'
				: props.styleSize === ComponentSizeENUM.medium
				? '254px'
				: props.styleSize === ComponentSizeENUM.large
				? '381px'
				: ''};
		::-webkit-progress-bar {
			background-color: #00004214;
			/* background-color: var(--dark-blue-100); */
		}
		::-webkit-progress-value {
			background-color: var(--vivid-green-100);
		}
	}
`
