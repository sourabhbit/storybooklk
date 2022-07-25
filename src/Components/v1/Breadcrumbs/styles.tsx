import styled from 'styled-components'

export const BreadcrumbContainer = styled.div`
	font-family: 'FuturaStd-Book';
	font-size: var(--fs-12);
	letter-spacing: 1px;
	border-radius: 0px;
	color: var(--whitish-gray);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px var(--pd-5) var(--pd-20) 0;
`

export const Breadcrumb = styled.ul`
	padding: 0;
	span {
		font-weight: var(--fw-bold);
	}
`
export const LI = styled.li`
	display: inline-block;
	&:after {
		content: '/';
		padding: 0 var(--pd-5);
	}
	&:last-child:after {
		content: '';
		padding: 0;
	}
`

export const BCSpan = styled.span`
	font-weight: var(--fw-bold);
`

export const AnchorTag = styled.a`
	color: var(--whitish-gray);
	font-weight: var(--fw-light);
`
