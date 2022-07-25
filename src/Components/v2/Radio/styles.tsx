import styled from 'styled-components'
import { ComponentSizeENUM, TypographyENUM } from '../../../Types/general'

export const RadioContainer = styled.label`
	display: flex;
	align-items: center;
	width: fit-content;
	> input {
		display: none;
	}
	> .image {
		cursor: pointer;
		border: 1px solid #cdcdcd;
	}
	> .image:hover {
		border: 1px solid var(--black);
	}
	> input:checked + .image {
		border: 2px solid #1cbbb4;
	}
`

export const RadioWrapper = styled.input<{
	styleSize: ComponentSizeENUM
}>`
	cursor: pointer;

	:checked {
		border-color: var(--terracotta-100);
	}
`
export const LabelWrapper = styled.span<{
	styleFont: TypographyENUM
	styleSize: ComponentSizeENUM
}>`
	margin-left: var(--spacing-md);
	font-family: ${(props) => props.styleFont};
`

export const Image = styled.div`
	opacity: 0.8;
	width: 60px;
	height: 60px;
	background-position: center center;
	background-color: var(--white);
	display: inline-block;
	margin: 10px;

	&:hover {
		opacity: 1;
	}
`
