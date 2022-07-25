import styled from 'styled-components'
import { final } from './ColorConverter/filter'

const getColor = (color: string) => {
	return final(color)
}

export const Img = styled.img<{
	color: string
}>`
	filter: ${(props) => getColor(props.color)};
`
