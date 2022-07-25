import { useState, useEffect } from 'react'
import Navigation from '../Navigation'
// import { HeaderTypes } from './MainNav.types'
import {
	Flex,
	// FlexCol,
	HeaderIcon,
	LenskartLogoPhoneNo,
	PhoneNoImg,
} from './styles'

const MainNav = (props: any) => {
	const [showGoldAdded, setShowGoldAdded] = useState(true)
	const [showMenu, setShowMenu] = useState(true)
	const [userSelectedMenuVisibility, setUserSelectedMenuVisibility] =
		useState(false)
	const [scrolledToTop, setScrolledToTop] = useState(true)
	const [showLoginPopUp, setShowLoginPopUp] = useState(false)
	const [openTab, setOpenTab] = useState('signin')

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		handleScroll()
		const type = location.search.indexOf('type=login') > -1
		const now = new Date()
		const time = now.getTime()
		const expireTime = time + 60 * 60 * 1000
		const expireTimeLocalStorage = localStorage.getItem(
			'sessionShowPopupLogin'
		)
		if (!expireTimeLocalStorage) {
			// localStorage.setItem('sessionShowPopupLogin', expireTime)
		}
		setTimeout(() => {
			if (type) {
				setShowLoginPopUp(type)
			}
		}, 100)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	//functions
	let isRepeatUser = null
	const openLoginPopup = () => {
		setShowLoginPopUp(true)
		setOpenTab('signin')
	}
	const closeLoginPopup = () => {
		clearInterval(window.secondsTimer)
		setShowLoginPopUp(false)
	}

	const isInViewport = (element: any) => {
		const rect = element.getBoundingClientRect()
		return rect.top >= 0
	}

	const handleScroll = () => {
		const scrollTop =
			window.pageYOffset !== undefined
				? window.pageYOffset
				: document.documentElement.scrollTop
		const maxScroll = document.body.scrollHeight
		const clientHeight = document.documentElement.clientHeight
		// console.log(scrollTop + clientHeight, maxScroll - 367);
		const footer = document.getElementById('footer-container')
		const footerHeight = footer?.clientHeight || 370
		const filtersContainer = document.getElementById('plp-filters-container')
		const filterTopOffset = filtersContainer?.style?.top || '94'
		const { section } = props
		if (filtersContainer?.style) {
			if (scrollTop <= 30) {
				document.body.classList.remove('scrolltop')
				filtersContainer.style.height = '100vh'
				setShowMenu(true)
				setScrolledToTop(true)
			} else {
				if (!props.isYotpoWidgets) {
					props.commonCallsAction.setYotpoWidgetsState({
						isYotpoWidgets: true,
					})
				}
				if (!userSelectedMenuVisibility) {
					setShowMenu(false)
					setScrolledToTop(false)
					if (section === 'cat') {
						if (
							scrollTop + clientHeight >= maxScroll - footerHeight &&
							footer &&
							isInViewport(footer)
						) {
							// document.body.classList.remove('scrolltop');
							// document.body.classList.add('scrollbottom');
							filtersContainer.style.height = `calc(100vh - ${
								scrollTop +
								clientHeight -
								maxScroll +
								footerHeight +
								filterTopOffset
							}px)`
						} else {
							// document.body.classList.remove('scrollbottom');
							filtersContainer.style.height = '100vh'
							document.body.classList.add('scrolltop')
						}
					}
				} else {
					setScrolledToTop(false)
					if (section === 'cat') {
						if (
							scrollTop + clientHeight >= maxScroll - footerHeight &&
							footer &&
							isInViewport(footer)
						) {
							// document.body.classList.remove('scrolltop');
							// document.body.classList.add('scrollbottom');
							filtersContainer.style.height = `calc(100vh - ${
								scrollTop +
								clientHeight -
								maxScroll +
								footerHeight +
								filterTopOffset
							}px)`
						} else {
							// document.body.classList.remove('scrollbottom');
							filtersContainer.style.height = '100vh'
							document.body.classList.add('scrolltop')
						}
					}
				}
			}
		} else if (scrollTop <= 30) {
			document.body.classList.remove('scrolltop')
			// document.body.classList.remove('scrollbottom');
		}
		// if (scrollTop + clientHeight > (maxScroll - 367) && footer && this.isInViewport(footer)) {
		//     document.body.classList.add('scrollbottom');
		// } else if (document.querySelector('.scrollbottom')) {
		//     document.body.classList.remove('scrollbottom');
		// }
	}

	const cartOmniture = (data: any) => {
		const { userInfo, login } = props
		const cxid = userInfo === null ? '' : userInfo.result.id
		let productId = ''
		let cartLenskartPrice = ''
		let quanTityValue = ''
		let productTypeValue = ''
		let productBrandValue = ''
		let productFrameSizeValue = ''
		let productNameValue = ''
		let productOptionValue = ''
		let productPackageNameValue = ''
		let productCoatingValue = ''
		let frameTypeValue = ''
		const cartProductId: any = []
		const lenskartPrice: any = []
		const quanTity: any = []
		const productType: any = []
		const productBrand: any = []
		const productFrameSize: any = []
		const productName: any = []
		const productOption: any = []
		const productCoating: any = []
		const productPackageName: any = []
		const subCategory: any = []
		let subCategoryStr = ''
		const addOn: any = []
		let optionsPrice = {}
		const frametype: any = []

		data.forEach((cartItem: any) => {
			subCategory.push(cartItem.subcategory)
			subCategoryStr = subCategory
				.toString()
				.replace(/,/g, '|')
				.toLowerCase()
			cartProductId.push(cartItem.productId)
			productId = cartProductId.toString().replace(/,/g, '|').toLowerCase()
			quanTity.push(cartItem.quantity)
			quanTityValue = quanTity.toString().replace(/,/g, '|').toLowerCase()
			productType.push(cartItem.productTypeValue)
			productTypeValue = productType
				.toString()
				.replace(/,/g, '|')
				.toLowerCase()
			productFrameSize.push(cartItem.frameSize)
			productFrameSizeValue = productFrameSize
				.toString()
				.replace(/,/g, '|')
				.toLowerCase()
			productBrand.push(cartItem.brandName)
			productBrandValue = productBrand
				.toString()
				.replace(/,/g, '|')
				.toLowerCase()
			productName.push(cartItem.name)
			productNameValue = productName
				.toString()
				.replace(/,/g, '|')
				.toLowerCase()
			frametype.push(cartItem.frameType)
			frameTypeValue = frametype.toString().replace(/,/g, '|').toLowerCase()
			if (cartItem.catalogPrices.length > 2) {
				lenskartPrice.push(cartItem.catalogPrices[2].value)
				cartLenskartPrice = lenskartPrice
					.toString()
					.replace(/,/g, '|')
					.toLowerCase()
			} else {
				cartItem.catalogPrices.forEach((prices: any) => {
					if (prices.name === 'Lenskart Price') {
						lenskartPrice.push(prices.value)
						cartLenskartPrice = lenskartPrice
							.toString()
							.replace(/,/g, '|')
							.toLowerCase()
					}
				})
			}
			if (cartItem.options.length >= 1) {
				productOption.push(cartItem.options[0].type)
				productOptionValue = productOption
					.toString()
					.replace(/,/g, '|')
					.toLowerCase()
				productPackageName.push(cartItem.options[0].name)
				productPackageNameValue = productPackageName
					.toString()
					.replace(/,/g, '|')
					.toLowerCase()
				if (
					cartItem.options.length > 1 &&
					cartItem.options[1].type === 'COATING'
				) {
					productCoating.push('Yes')
					productCoatingValue = productCoating
						.toString()
						.replace(/,/g, '|')
						.toLowerCase()
				} else {
					productCoating.push('No')
					productCoatingValue = productCoating
						.toString()
						.replace(/,/g, '|')
						.toLowerCase()
				}
			}
			cartItem.options.forEach((productOptionsType: any) => {
				productOptionsType.catalogPrices.forEach((catalogOptions: any) => {
					optionsPrice = catalogOptions.value
				})
				addOn.push({
					addonid: productOptionsType.oid,
					addontype: productOptionsType.type,
					addonprice: optionsPrice,
					addonbaseproduct: cartItem.productId,
				})
			})
		})
		if (window.dtm.LenskartRewamp) {
			window.dtm.LenskartRewamp.slideCart.click.cartSummary(
				cxid,
				productId,
				cartLenskartPrice,
				quanTityValue,
				productBrandValue,
				productTypeValue,
				productOptionValue,
				productPackageNameValue,
				productCoatingValue,
				addOn,
				login,
				frameTypeValue,
				subCategoryStr,
				productFrameSizeValue,
				productNameValue
			)
		}
		sessionStorage.setItem('dtmOnLoadData', 'cartSummary')
	}

	const hideCart = () => {
		props.commonCallsAction.toggleCart(false)
	}

	const hideGoldAdded = () => {
		setShowGoldAdded(false)
	}

	const showWishList = () => {
		const {
			shortListData,
			wishlistTrue,
			section,
			loginStatus,
			commonCallsAction,
		} = props
		if (window.dtm.LenskartRewamp)
			window.dtm.LenskartRewamp.header.click.headerClick(
				section,
				'shortlist',
				loginStatus
			)
		const productId: any = []
		if (shortListData.result.numberOfProducts > 0) {
			if (shortListData.result.productList) {
				shortListData.result.productList.forEach((data: any) => {
					productId.push(data.id)
				})
			}
		}
		if (wishlistTrue === false) {
			if (window.dtm.LenskartRewamp)
				window.dtm.LenskartRewamp.Listing.load.headerShortlist(
					productId.toString()
				)
			commonCallsAction.showWishlist(true)
		} else {
			commonCallsAction.showWishlist(false)
		}
	}

	// const showMenu = () => {
	// 	setShowMenu(true)
	// 	setUserSelectedMenuVisibility(true)
	// }

	const hideMenu = () => {
		setShowMenu(false)
		setUserSelectedMenuVisibility(false)
	}

	const cartClickHandler = () => {
		const { section, loginStatus, commonCallsAction } = props
		window.dtm.actiontype = 'view'
		if (window.dtm.LenskartRewamp)
			window.dtm.LenskartRewamp.header.click.headerClick(
				section,
				'CART',
				loginStatus
			)
		commonCallsAction.toggleCart(true)
	}

	const hideRepeatUserElem = (isRepeatUser: any, hiddenElem: any) => {
		const len = (hiddenElem && hiddenElem.length) || null
		if (!len) return
		for (let i = 0; i < len; i++) {
			const element = hiddenElem[i]
			const hasClass = element.classList.contains('display-none')
			if (isRepeatUser && !hasClass) {
				element.classList.add('display-none')
			} else {
				element.classList.remove('display-none')
			}
		}
	}

	const checkRepeatUser = () => {
		const { userInfo } = props
		if (userInfo && userInfo?.result?.hasPlacedOrder) {
			isRepeatUser = true
			sessionStorage.setItem('isRepeatUser', 'true')
		} else {
			isRepeatUser = false
			sessionStorage.removeItem('isRepeatUser')
		}
		const hideElem = document.getElementsByClassName('hide-repeat')
		if (hideElem) {
			hideRepeatUserElem(isRepeatUser, hideElem)
		}
	}

	//function ends
	//render
	const {
		section,
		shortListData,
		loginStatus,
		cartData,
		location,
		appLogo,
		askUserLogin,
		login,
		registerActions,
		dataLocale,
		localeInfo,
		redisCommonData,
	} = props
	const phoneConfig = redisCommonData?.PHONE_NUMBER_CONFIG
		? JSON.parse(redisCommonData?.PHONE_NUMBER_CONFIG)
		: {}
	const { GOLD_ADDED_POPUP_HTML, TRACK_ORDER, WISHLIST, CART, ICON } =
		dataLocale || {}
	const locationQuery = location.search
	const loyaltyAddedHtml = GOLD_ADDED_POPUP_HTML || ''
	let isLoyaltyProductAdded = false
	if (cartData && cartData.result) {
		cartData.result.items.forEach((data: any) => {
			if (
				!isLoyaltyProductAdded &&
				data.classification === 'loyalty_services'
			) {
				isLoyaltyProductAdded = true
			}
		})
	}
	const navData = props.mainNavigationData && props.mainNavigationData.header
	const rightNavData =
		props.mainNavigationData && props.mainNavigationData.rightBarNav
	return (
		<div className="header-inner row mainNav">
			<div className="mainNav_container">
				{showLoginPopUp && (
					<p>Modal</p>
					// <AuthModal
					// 	allowSignUp
					// 	askUserLogin={askUserLogin}
					// 	hideLogin={() => {
					// 		clearInterval(window.secondsTimer)
					// 		this.setState({
					// 			showLoginPopUp: false,
					// 		})
					// 	}}
					// 	openTab={this.state.openTab}
					// />
				)}
				{props.showCart && (
					<p>Cart</p>
					// <ErrorBoundaries>
					// 	<Cart
					// 		cartOmniture={(data) => {
					// 			this.cartOmniture(data)
					// 		}}
					// 		hideHandler={this.hideCart}
					// 	/>
					// </ErrorBoundaries>
				)}
				<div
					className={`mainNav_top is-${
						!showMenu ? 'scroll' : 'no-scroll'
					}`}
					id="topNavigationBar"
				>
					<Flex>
						<LenskartLogoPhoneNo>
							{/* <Logo
								appLogo={
									location.pathname === ''
										? 'https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg'
										: appLogo
								}
								dataLocale={dataLocale}
								pathPrefix={localeInfo.pathPrefix}
							/> */}
							{!scrolledToTop &&
								showMenu &&
								userSelectedMenuVisibility && (
									<i
										aria-hidden="true"
										className="fa fa-times mainNav_closeMenu"
										onClick={() => hideMenu()}
									></i>
								)}
							<PhoneNoImg
								alt="ph-no"
								className="pos-abs ph-img"
								src={phoneConfig?.imgUrl}
								style={{
									visibility: phoneConfig?.enable
										? 'visible'
										: 'hidden',
								}}
							/>
						</LenskartLogoPhoneNo>
						{/* <SearchBar {...props} /> */}
						<Flex>
							<div className="order-status">
								{/* <Link
										title={TRACK_ORDER}
										to={{ pathname: '/customer/account/' }}
										onClick={() => {
											window.dtm.LenskartRewamp.header.click.headerClick(
												section,
												'track-order',
												loginStatus
											)
										}}
									> */}
								<div className="mainNav_name">
									<span>{TRACK_ORDER}</span>
								</div>
								{/* </Link> */}
							</div>
							{/* <LoginPanel
									{...props}
									loginStatus={login}
									openLoginTab={() => {
										setShowLoginPopUp(true)
										setOpenTab('signin')
										registerActions.resetMobileLoginProps()
									}}
									openSignUpTab={() => {
										setShowLoginPopUp(true)
										setOpenTab('signup')
									}}
								/> */}
							<div className="wishlist" id="shortList">
								{/* <LottieHeartIcon /> */}
								<a
									className="pos-rel"
									onClick={showWishList}
									role="button"
								>
									<HeaderIcon
										alt={ICON}
										className="IconImage pos-abs"
										src="https://static.lenskart.com/media/desktop/img/wishlist.png"
									/>
									{shortListData.result.numberOfProducts > 0 && (
										<span className="mainNav_nav-count-text shortlist-text pos-abs">
											{shortListData.result.numberOfProducts}
										</span>
									)}
									<span className="mainNav_nav-count">{WISHLIST}</span>
								</a>
							</div>
							<div className="cart">
								<a
									className="pos-rel"
									onClick={cartClickHandler}
									onKeyDown={cartClickHandler}
									role="button"
								>
									<HeaderIcon
										alt={ICON}
										className="IconImage pos-abs leftpx"
										src="https://static.lenskart.com/media/desktop/img/cart.png"
									/>
									{cartData.result.itemsCount > 0 && (
										<span className="mainNav_nav-count-text pos-abs">
											{cartData.result.itemsCount}
										</span>
									)}
									<span className="mainNav_nav-count">{CART}</span>
								</a>
							</div>
						</Flex>
						{locationQuery &&
							locationQuery.indexOf('gold_add=1') !== -1 &&
							isLoyaltyProductAdded && (
								<div
									className={`col-sm-12 gold-added-container text-center ${
										showGoldAdded ? '' : ' closed'
									}`}
									dangerouslySetInnerHTML={{
										__html: loyaltyAddedHtml,
									}}
									onClick={hideGoldAdded}
									onKeyDown={hideGoldAdded}
									role="button"
								></div>
							)}
					</Flex>
					<Navigation
						isMenuHidden={!showMenu}
						location={location}
						navData={navData}
						isMenuVisible={true}
						dataLocale={dataLocale}
						localeInfo={localeInfo}
						rightNavData={rightNavData}
					/>
				</div>
			</div>
		</div>
	)
}

export default MainNav
