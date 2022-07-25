import { memo, useState, useEffect } from 'react'
import NavStrip from 'Components/v1/Header/NavStrip'
// import { HeaderTypes } from './TopNavBar.types'
import { HeaderTopWrapper, ULHeadTop } from './styles'

const TopNavBar = (props: any) => {
	const { mainNavigationData, isMenuVisible } = props
	const navData = mainNavigationData && mainNavigationData.topBarNav

	//states
	const [headerScroll, setHeaderScroll] = useState(false)
	const [showChatIcon, setShowChatIcon] = useState(true)
	const [] = useState()

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	useEffect(() => {
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	})

	const setDataAttr = (gaObj: any) => {
		const finalAttr = {}
		Object.entries(gaObj).forEach(([key, value]) => {
			const newKey = `data-${key}`
			return Object.assign(finalAttr, { [newKey]: value })
		})
		return finalAttr
	}

	const handleScroll = () => {
		const scrollTop = window.pageYOffset
		if (scrollTop > 35) {
			setHeaderScroll(true)
		} else {
			setHeaderScroll(false)
		}
	}
	const handleWidget = (sprinklrBotEnabled: any) => {
		const { userInfo } = props
		const { chatBotParams } = window
		chatBotParams.emailId = userInfo?.result?.email || ''
		chatBotParams.phoneNumber = userInfo?.result?.telephone || ''
		// chatBotParams.sessionID = getSetCookie.getCookie('clientV1') || ''
		chatBotParams.env =
			process.env.BUILD_ENV === 'development' ? 'preprod' : 'prod'
		chatBotParams.apiClient = process.env.CLIENT_TYPE
		window.Freshbots?.reloadContext()
		setShowChatIcon(false)
		window.setTimeout(() => {
			if (sprinklrBotEnabled) {
				if (chatBotParams.emailId) {
					window.sprChat('openNewConversation', {
						conversationContext: {
							'_c_62a329b623cadb2fbf33b21f ': [
								chatBotParams.phoneNumber,
							], // unique ID from contact us/chat with us, maybe phone number
							_c_62a32a2c23cadb2fbf33f020: ['TRUE'], // triggeredByChatwithUs
						},
						id: chatBotParams.phoneNumber, // MANDATORY, maybe phone number
					})
				} else {
					window.sprChat('open')
				}
			} else {
				window.Freshbots?.initiateChat()
				window.Freshbots?.showWidget(true)
			}
		}, 1000)
	}
	//render block
	const {
		topNavData,
		isSupported,
		dataLocale: { CONTACT_US },
		redisCommonData,
		localeInfo,
	} = props
	const showStrip =
		redisCommonData.SHOW_NEW_STRIP !== undefined
			? JSON.parse(redisCommonData.SHOW_NEW_STRIP)
			: false
	const showChatBot =
		redisCommonData &&
		redisCommonData.SHOW_CHAT_BOT &&
		JSON.parse(redisCommonData.SHOW_CHAT_BOT)
	const hostCountry = redisCommonData.HOST_COUNTRY
	const sprinklrBotEnabled =
		redisCommonData && redisCommonData.SPRINKLR_BOT_CONFIG
	const newBot =
		JSON.parse(sprinklrBotEnabled).desktop_enabled === 'ON' ? true : false
	return (
		<div className="container-fluid">
			<HeaderTopWrapper
				className={`headeTopWrapper big-screen-wrapper ${
					showStrip ? 'nav-strip' : ''
				}`}
			>
				{showStrip && showStrip.enable ? (
					<NavStrip
						dataLocale={props.dataLocale}
						redisCommonData={redisCommonData}
					/>
				) : (
					<nav
						aria-label="Useful links"
						className={`topNav_bar is-${
							headerScroll ? 'scroll' : 'no-scroll'
						}`}
					>
						<ULHeadTop>
							{topNavData.topBarNavLeft &&
								topNavData.topBarNavLeft.map(
									(item: any, index: number) => {
										const dataAttr =
											item.gaObj &&
											Object.keys(item.gaObj).length > 0
												? setDataAttr(item.gaObj)
												: null
										if (item.url && item.url.indexOf('http') > -1) {
											const hrefUrl =
												item.url &&
												item.url.indexOf('compare-looks') > -1
													? new URL(item.url)
													: item.url
											return (
												<li
													key={item.label + index}
													className="menuItem"
												>
													<a
														{...dataAttr}
														className="getGaData"
														href={
															hrefUrl.pathname
																? hrefUrl.pathname
																: hrefUrl
														}
														target="_self"
														title={item.label}
														onClick={() => {
															// evt.preventDefault();
															window.sessionStorage.setItem(
																'previousChannel',
																window.dtm.channel
															)
															if (
																item.url &&
																item.url.indexOf(
																	'compare-looks'
																) > -1
															) {
																localStorage.setItem(
																	'dittoCompare',
																	window.location.href
																)
															}
															if (window.dtm.LenskartRewamp) {
																window.dtm.LenskartRewamp.header.click.headerClick(
																	props.section,
																	item.label,
																	props.loginStatus
																)
															}
															window.location.href = item.url
														}}
													>
														{item.label}
													</a>
												</li>
											)
										} else if (item.facetime) {
											return (
												<li key={item.label + index}>
													<a
														href={`tel:${item.facetime}`}
														{...dataAttr}
														className="getGaData"
														onClick={(evt) => {
															evt.preventDefault()
															if (window.dtm.LenskartRewamp) {
																window.dtm.LenskartRewamp.header.click.headerClick(
																	props.section,
																	item.label,
																	props.loginStatus
																)
															}
															window.location.href = `tel:${item.facetime}`
														}}
													>
														{item.label}
													</a>
												</li>
											)
										}
										return (
											<li
												key={item.label + index}
												className="menuItem"
											>
												{item.url &&
												(isSupported === 'STANDARD' ||
													!(
														item.url.indexOf('compare-looks') !==
														-1
													)) ? (
													<
														// className="getGaData"
														// to={item.url}
														// {...dataAttr}
														// onClick={() => {
														// 	window.sessionStorage.setItem(
														// 		'previousChannel',
														// 		window.dtm.channel
														// 	)
														// 	if (
														// 		item.url &&
														// 		item.url.indexOf('compare-looks') >
														// 			-1
														// 	) {
														// 		localStorage.setItem(
														// 			'dittoCompare',
														// 			window.location.href
														// 		)
														// 	}
														// 	if (window.dtm.LenskartRewamp) {
														// 		window.dtm.LenskartRewamp.header.click.headerClick(
														// 			this.props.section,
														// 			item.label,
														// 			this.props.loginStatus
														// 		)
														// 	}
														// }}
													>
														{item.label}
													</>
												) : (
													''
												)}
											</li>
										)
									}
								)}
						</ULHeadTop>
					</nav>
				)}
				<input
					disabled
					name="hidden-Field"
					style={{
						width: '20px',
						height: '17px',
						visibility: !hostCountry ? 'hidden' : 'visible',
					}}
					value={localeInfo.countryCode}
				/>
				{showStrip && showStrip.enable ? null : (
					<nav aria-label="Useful links" className="topRight">
						<ULHeadTop>
							<li
								className="topRightLink cursor-pointer"
								data-testid="topnav-contactus"
								onClick={() => handleWidget(newBot)}
								onKeyDown={() => handleWidget(newBot)}
								role="button"
							>
								{CONTACT_US}
							</li>
						</ULHeadTop>
					</nav>
				)}
			</HeaderTopWrapper>
			{showChatBot && showChatIcon && !newBot && (
				<a
					className="buyonChat"
					data-testid="buyonChat"
					onClick={() => handleWidget(newBot)}
					onKeyDown={() => handleWidget(newBot)}
					role="button"
				>
					<i className="fa fa-comments"></i>
				</a>
			)}
		</div>
	)
}

export default memo(TopNavBar)
