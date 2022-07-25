import styled from 'styled-components'
import { ComponentSizeENUM } from 'Types/general'

const getSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return '12px'
	} else if (size === ComponentSizeENUM.medium) {
		return '25px'
	} else {
		return '32px'
	}
}
const getFontSize = (size: ComponentSizeENUM) => {
	if (size === ComponentSizeENUM.small) {
		return 'var(--fs-9)'
	} else if (size === ComponentSizeENUM.medium) {
		return 'var(--fs-18)'
	} else {
		return 'var(--fs-18)'
	}
}
export const AvatarWrapper = styled.div``
export const IconWrapper = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	height: ${(props) => getSize(props.styleSize)};
	width: ${(props) => getSize(props.styleSize)};
`

export const AvatarImage = styled.img<{
	styleSize: ComponentSizeENUM
}>`
	height: ${(props) => getSize(props.styleSize)};
	width: ${(props) => getSize(props.styleSize)};
`

export const AvatarName = styled.div<{
	styleSize: ComponentSizeENUM
}>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: ${(props) => getSize(props.styleSize)};
	width: ${(props) => getSize(props.styleSize)};
	border-radius: 50%;
	background-color: #afacbd;
	font-size: ${(props) => getFontSize(props.styleSize)};
`
export const AvatarNameSpan = styled.span`
	color: var(--dark-blue-50);
`
