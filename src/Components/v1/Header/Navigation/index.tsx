import { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import MainMenu from '../MainMenu'
import {
	LoyaltyWrapper,
	LoyaltyWrapperImage,
	FlexNav,
	LoyaltyContainer,
} from './styles'

const Navigation = (props: any) => {
	useEffect(() => {
		if (!props.isMenuVisible) {
			props?.headerAction?.rerenderMenu(true)
		}
	}, [props.isMenuVisible])

	//function start

	// componentDidUpdate() {
	//     // This fix is hide the menu/submenu when user click on any of the menu/submenu.
	//     if (!this.props.isMenuVisible) {
	//       this.props.headerAction.rerenderMenu(true);
	//     }
	//   }
	const updateNavDtm = (
		type: any,
		section: any,
		subSection: any,
		link: any,
		cta: any,
		e: any,
		ctaName = null
	) => {
		props.headerAction.rerenderMenu(false)
		triggerDataLayerOnCtaClick(ctaName || type?.alt, e)
		if (window.dtm.LenskartRewamp)
			window.dtm.LenskartRewamp.header.click.topNavClick(
				type,
				section,
				subSection,
				link,
				cta
			)
	}

	const updateNavValueDtm = (
		type: any,
		section: any,
		subSection: any,
		link: any,
		e: any,
		ctaName: any
	) => {
		props.headerAction.rerenderMenu(false)
		triggerDataLayerOnCtaClick(ctaName || type?.alt, e)
		if (window.dtm.LenskartRewamp)
			window.dtm.LenskartRewamp.header.click.topNavClickValue(
				type,
				section,
				subSection,
				link
			)
	}
	// toggleMenu = value => {
	//     this.props.headerAction.rerenderMenu(value);
	// }
	// eslint-disable-next-line no-unused-vars
	const triggerDataLayerOnCtaClick = (name: any, e: any) => {
		// e?.preventDefault();
		name = name?.trim().toLowerCase().replace(/[ ]+/gi, '-') || ''
		const data = {
			event: 'cta_click',
			cta_name: name,
			cta_flow_and_page: 'navigation-bar',
		}
		// pushDataLayerEvent(data)
	}

	//function ends
	//render
	const { navData, rightNavData, location, dataLocale, localeInfo } = props
	return (
		<div className="no-padding navigation">
			{' '}
			{/* ${(isMenuHidden ? 'hide' : '')} */}
			<FlexNav>
				{props.isMenuVisible && (
					<MainMenu
						dataLocale={dataLocale}
						localeInfo={localeInfo}
						location={location}
						navData={navData}
						triggerDataLayerOnCtaClick={triggerDataLayerOnCtaClick}
						updateNavDtm={updateNavDtm}
						updateNavValueDtm={updateNavValueDtm}
					/>
				)}
				{/* <div className="layout justify-content-between navigation-list margin-r8">
					
				</div> */}
				<LoyaltyContainer>
					{rightNavData &&
						rightNavData.map((rigtNav: any, index: any) => {
							const dataAttr =
								rigtNav.gaObj && Object.keys(rigtNav.gaObj).length > 0
									? null // previously -> setDataAttr(rigtNav.gaObj)
									: null
							return (
								<LoyaltyWrapper key={index}>
									{rigtNav.url &&
									rigtNav.url.indexOf('lenskart.com') === -1 ? (
										// <Link
										// 	to={rigtNav.url}
										// 	onClick={(e: any) =>
										// 		triggerDataLayerOnCtaClick(rigtNav.alt, e)
										// 	}
										// >
										// </Link>
										<>
											<div className="img-wrapper">
												<LoyaltyWrapperImage
													{...dataAttr}
													alt={rigtNav.alt}
													className="getGaData"
													src={rigtNav.src}
												/>
											</div>
										</>
									) : (
										<a
											className=""
											href={rigtNav.url}
											onClick={(e) =>
												updateNavDtm(
													rigtNav,
													rightNavData,
													null,
													null,
													rigtNav.cta,
													e
												)
											}
										>
											<div className="img-wrapper">
												<LoyaltyWrapperImage
													{...dataAttr}
													alt={rigtNav.alt}
													className="getGaData"
													src={rigtNav.src}
												/>
											</div>
										</a>
									)}
								</LoyaltyWrapper>
							)
						})}
				</LoyaltyContainer>
			</FlexNav>
		</div>
	)
}

export default Navigation
