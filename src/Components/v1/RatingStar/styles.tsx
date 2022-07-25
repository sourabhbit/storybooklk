import styled from 'styled-components'
import { ComponentSizeENUM, TypographyENUM } from 'Types/general'

const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-12)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-30)'
	}
}
export const NumberedRatingWrapper = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	display: flex;
	align-items: center;
	width: fit-content;
	background-color: #28c7bf;
	border-radius: 8px;
	padding: var(--pd-5);
	gap: var(--pd-5);
`

export const NumberedRatingSpan = styled.span<{
	styleSize: ComponentSizeENUM
	styleFont: TypographyENUM
}>`
	color: var(--dark-blue-100);
	font-size: ${(props) => getFontSize(props.styleSize)};
	font-family: ${(props) => props.styleFont};
	font-weight: var(--fw-regular);
`
