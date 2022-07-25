import React from 'react'
// import { Link } from 'react-router-dom'
import GridMenu from '../GridMenu'
import HomeEyeCheckUp from '../HomeEyeCheckup'
import ContactLens from '../ContactLens'
import Menu from '../Menu'
import { Flex } from './styles'

const redirection = (key: any, data: any, props: any) => {
	const { updateNavValueDtm } = props
	const dataAttr =
		data.gaObj && Object.keys(data.gaObj).length > 0
			? null //setDataAttr(data.gaObj)
			: null
	return data.url && data.url.indexOf('lenskart.com') === -1 ? (
		// <Link
		// 	className="getGaData"
		// 	{...dataAttr}
		// 	to={{
		// 		pathname: data.url,
		// 		state: { categoryId: data.categoryId, section: 'cat' },
		// 	}}
		// 	onClick={(e) => updateNavValueDtm(key, '', '', '', e, key)}
		// >
		// 	</Link>
		<>{key}</>
	) : (
		<a
			className="getGaData"
			{...dataAttr}
			href={data.url}
			onClick={(e) => updateNavValueDtm(key, '', '', '', e, key)}
		>
			{key}
		</a>
	)
}
const MainMenu = (props: any) => {
	const {
		updateNavDtm,
		navData,
		updateNavValueDtm,
		location,
		dataLocale,
		triggerDataLayerOnCtaClick,
		localeInfo,
	} = props
	return (
		<Flex>
			{navData.menu
				? navData.menu.map((data: any) => {
						let itemlists
						return Object.keys(data).map((key, index) => {
							if (data[key].type === 'two-col-layout') {
								itemlists = (
									<div
										key={index}
										className={
											data[key].url === location.pathname
												? 'nav-level-1 try-at-home active-nav'
												: 'nav-level-1 try-at-home'
										}
									>
										{key.toUpperCase()}
										<HomeEyeCheckUp
											cta={data[key].cta}
											dataLocale={dataLocale}
											menuData={data[key]}
											parentMenu={data}
											section={key}
											updateNavDtm={updateNavDtm}
										/>
									</div>
								)
							} else if (data[key].type === 'grid') {
								itemlists = (
									<div key={index} className="nav-level-1 grid">
										{key.toUpperCase()}
										<GridMenu
											dataLocale={dataLocale}
											menuData={data[key]}
											parentMenu={data[key]}
											section={key}
											updateNavValueDtm={updateNavValueDtm}
										/>
									</div>
								)
							} else if (data[key].type === 'list-grid') {
								itemlists = (
									<div
										key={index}
										className={
											data[key].url === location.pathname
												? 'nav-level-1 active-nav'
												: 'nav-level-1'
										}
									>
										{redirection(key.toUpperCase(), data[key], props)}
										<ContactLens
											dataLocale={dataLocale}
											menuData={data[key]}
											parentMenu={data}
											section={key}
											triggerDataLayerOnCtaClick={
												triggerDataLayerOnCtaClick
											}
											updateNavValueDtm={updateNavValueDtm}
										/>
									</div>
								)
							} else if (data[key].type === 'three-col-layout') {
								itemlists = (
									<div
										key={index}
										className={
											data[key].url === location.pathname
												? 'nav-level-1 active-nav three-col-layout'
												: 'nav-level-1 three-col-layout'
										}
									>
										{redirection(key.toUpperCase(), data[key], props)}
										<Menu
											dataLocale={dataLocale}
											menuData={data[key]}
											parentMenu={data}
											section={key}
											updateNavValueDtm={updateNavValueDtm}
										/>
									</div>
								)
							} else {
								itemlists = (
									<div
										key={index}
										className={
											data[key].url === location.pathname
												? 'nav-level-1 active-nav'
												: 'nav-level-1'
										}
									>
										{redirection(key.toUpperCase(), data[key], props)}
									</div>
								)
							}
							return itemlists
						})
				  })
				: ''}{' '}
			{localeInfo?.countryCode === 'sg' && (
				<div className="nav-level-1">
					<a href="https://appointments.lenskart.sg/pages/stores">
						<span>STORE</span>
					</a>
				</div>
			)}
		</Flex>
	)
}

MainMenu.defaultProps = {
	navData: {},
}

export default MainMenu
