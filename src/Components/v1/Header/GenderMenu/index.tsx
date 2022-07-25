import React from 'react'
// import { Link } from 'react-router-dom'
import SubMenu from '../SubMenu'
import CategoryMenu from '../CategoryMenu'
import { GenderMenuWrapper, Navhead } from './styles'
// import './GenderMenu.scss'

// todo set dtm value parent and key
const onGenderHover = (context: any) => {
	context.stopPropagation()
	const siblingContext = context.currentTarget.parentNode.childNodes
	for (let i = 0; i < siblingContext.length; i += 1) {
		siblingContext[i].classList.remove('active')
	}
	context.currentTarget.classList.add('active')
}
const GenderMenu = (props: any) => {
	const {
		genderMenuData,
		updateNavValueDtm,
		parentKey,
		menuData,
		section,
		dataLocale,
	} = props
	const { SELECT_GENDER } = dataLocale
	return (
		<GenderMenuWrapper className="gender-menu">
			{genderMenuData.url &&
			genderMenuData.url.indexOf('lenskart.com') === -1 ? (
				// <Link
				// 	className="nav-head"
				// 	to={genderMenuData.url}
				// 	onClick={(e) =>
				// 		updateNavValueDtm(menuData, parentKey, null, null, e, section)
				// 	}
				// 	style={{ visibility: 'hidden' }}
				// >
				<>{SELECT_GENDER}</>
			) : (
				// </Link>
				<Navhead
					className="nav-head"
					onClick={(e: any) =>
						updateNavValueDtm(menuData, parentKey, null, null, e, section)
					}
					href={genderMenuData.url}
					style={{ visibility: 'hidden' }}
				>
					{SELECT_GENDER}
				</Navhead>
			)}
			{genderMenuData.submenu &&
				genderMenuData.submenu.map((genderMenu: any, index: number) => {
					return (
						<div
							key={index}
							className="gender-menu-section menu-line-section"
						>
							{Object.keys(genderMenu).map((key, count) => {
								return (
									<div
										key={key}
										className={`gender ${
											count === 0 ? ' active' : ''
										}`}
										onMouseOver={(ev) => onGenderHover(ev)}
										onFocus={(ev) => onGenderHover(ev)}
									>
										<div className="gender_info">
											<div className="gender_img">
												<img
													alt={key}
													title={key}
													src={genderMenu[key].img}
													width="48"
													height="48"
												/>
											</div>
											<span className="uppercase">{key}</span>
											<i className="fa fa-angle-right"></i>
										</div>

										{genderMenu[key].category && (
											<div
												className={`display-none gender_category gender-${key}`}
											>
												<CategoryMenu
													dataLocale={dataLocale}
													categoryMenuData={
														genderMenu[key].category
													}
													updateNavValueDtm={updateNavValueDtm}
													parentKey={parentKey}
													section={section}
													subSection={key}
												/>
											</div>
										)}
										{!genderMenu[key].category &&
											genderMenu[key].submenu && (
												<div
													className={`display-none gender_category submenu gender-${key} ${
														!genderMenu[key].category
															? 'category-condtion'
															: ''
													}`}
												>
													<SubMenu
														submenu={genderMenu[key].submenu}
														updateNavValueDtm={updateNavValueDtm}
														parentKey={parentKey}
														section={section}
														subSection={key}
													/>
												</div>
											)}
									</div>
								)
							})}
						</div>
					)
				})}
		</GenderMenuWrapper>
	)
}

export default GenderMenu
