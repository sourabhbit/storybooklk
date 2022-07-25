import styled from '@emotion/styled-base'

export const BottomSheetContainer = styled('div')`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: scoll;
	pointer-events: none;
	z-index: 200;
`

export const BackdropWrapper = styled('div')<{
	expanded: boolean | undefined
}>`
	transition: opacity 0.45s;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 50;
	background-color: ${(props) =>
		props.expanded ? 'rgba(33, 33, 33, 0.75)' : ''};
	pointer-events: ${(props) => (props.expanded ? 'auto' : 'none')};
`

export const BottomSheet = styled('div')<{
	expanded: boolean
	scrollable: boolean
}>`
	position: absolute;
	overflow: ${(props) => (props.scrollable ? 'scroll' : 'hidden')};
	left: 0;
	right: 0;
	bottom: 0;
	pointer-events: none;
	background: white;
	-webkit-transform: translate3d(0, 100%, 0);
	-webkit-transition-duration: 0.4s;
	-webkit-transition-property: -webkit-transform;
	-webkit-transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 0.4s;
	transition-property: transform;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	-webkit-transform: translate3d(0, 0, 0);
	transform: ${(props) =>
		props.expanded ? 'translate3d(0, 0, 0)' : 'translate3d(0, 100%, 0)'};
	pointer-events: ${(props) => (props.expanded ? 'auto' : 'none')};
	z-index: ${(props) => (props.expanded ? '101' : '201')};
`
