import styled, { css, keyframes } from 'styled-components'
import { fontSize } from './helper'
import { ComponentSizeENUM } from 'Types/general'
import { borderRadius } from 'Components/v2/Button/helper'

const skeleton = keyframes`
	0% {
	  opacity: 0.3;
	  transform: scaleX(0);
	  transform-origin: left;
	}
	20% {
	  opacity: 1;
	  transform: scaleX(1);
	  transform-origin: left;
	}
	28% {
	  transform: scaleX(1);
	  transform-origin: right;
	}
	51% {
	  transform: scaleX(0);
	  transform-origin: right;
	}
	58% {
	  transform: scaleX(0);
	  transform-origin: right;
	}
	82% {
	  transform: scaleX(1);
	  transform-origin: right;
	}
	83% {
	  transform: scaleX(1);
	  transform-origin: left;
	}
	96% {
	  transform: scaleX(0);
	  transform-origin: left;
	}
	100% {
	  opacity: 0.3;
	  transform: scaleX(0);
	  transform-origin: left;
	}
  `
export const SkeletonImg = styled.div<{
	animation: boolean
}>`
	width: 50px;
	height: 50px;
	background: #e5e5e5;
	position: relative;
	overflow: hidden;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #c6c6c6;
		animation: ${(props) =>
			props.animation
				? css`
						3000ms ${skeleton} 2s ease-in-out infinite
				  `
				: ''};
	}
`

export const SkeletonButton = styled.button<{
	animation: boolean
	styleSize: ComponentSizeENUM
}>`
	height: 18px;
	width: 80px;
	background: #e5e5e5;
	position: relative;
	overflow: hidden;
	border: 0;
	border-radius: var(${(props) => borderRadius[props.styleSize]});
	padding: var(${(props) => fontSize[props.styleSize]});
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #c6c6c6;
		animation: ${(props) =>
			props.animation
				? css`
						3000ms ${skeleton} 2s ease-in-out infinite
				  `
				: ''};
	}
`

export const SkeletonTitle = styled.h1<{
	animation: boolean
	styleSize: ComponentSizeENUM
}>`
	width: 100%;
	height: 18px;
	background: #e5e5e5;
	position: relative;
	overflow: hidden;
	padding: var(${(props) => fontSize[props.styleSize]});
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #c6c6c6;
		animation: ${(props) =>
			props.animation
				? css`
						3000ms ${skeleton} 2s ease-in-out infinite
				  `
				: ''};
	}
`

export const SkeletonParagraph = styled.h1<{
	animation: boolean
	styleSize: ComponentSizeENUM
}>`
	width: 100%;
	height: 18px;
	background: #e5e5e5;
	position: relative;
	overflow: hidden;
	padding: var(${(props) => fontSize[props.styleSize]});
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #c6c6c6;
		animation: ${(props) =>
			props.animation
				? css`
						3000ms ${skeleton} 2s ease-in-out infinite
				  `
				: ''};
	}
`
