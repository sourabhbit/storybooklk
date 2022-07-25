import React from 'react'
// import { Link } from 'react-router-dom'
// import './CategoryMenu.scss'
import SubMenu from '../SubMenu'
// import { setDataAttr } from '../../../../utils/helper'
// todo need to send the key and parent key to dtm.
const onCategoryHover = (context: any) => {
	context.stopPropagation()
	context.preventDefault()
	const siblingContext = context.currentTarget.parentNode.childNodes
	for (let i = 0; i < siblingContext.length; i += 1) {
		siblingContext[i].classList.remove('active')
	}
	context.currentTarget.classList.add('active')
}

const CategoryMenu = (props: any) => {
	const {
		categoryMenuData,
		updateNavValueDtm,
		section,
		subSection,
		dataLocale: { SELECT_CATEGORY },
	} = props
	return (
		<div className="category-menu menu-line-section">
			{categoryMenuData.url &&
			categoryMenuData.url.indexOf('lenskart.com') === -1 ? (
				// <Link
				// 	className="nav-head"
				// 	to={categoryMenuData.url}
				// 	onClick={() =>
				// 		updateNavValueDtm(section, subSection, categoryMenuData.url)
				// 	}
				// >
				// </Link>
				<>{SELECT_CATEGORY}</>
			) : (
				<a
					className="nav-head"
					href={categoryMenuData.url}
					onClick={() =>
						updateNavValueDtm(section, subSection, categoryMenuData.url)
					}
				>
					{SELECT_CATEGORY}
				</a>
			)}

			{categoryMenuData.submenu.map((categoryMenu: any, index: any) => {
				const dataAttr =
					categoryMenu.gaObj && Object.keys(categoryMenu.gaObj).length > 0
						? null //setDataAttr(categoryMenu.gaObj)
						: null
				return (
					<div
						key={index}
						className={`category-menu_data category ${
							index === 0 ? 'active' : ''
						}`}
						onMouseOver={(ev) => onCategoryHover(ev)}
						onFocus={(ev) => onCategoryHover(ev)}
					>
						{categoryMenu.url &&
						categoryMenu.url.indexOf('lenskart.com') === -1 ? (
							// <Link
							// 	{...dataAttr}
							// 	className="getGaData"
							// 	to={categoryMenu.url}
							// 	onClick={(e) =>
							// 		updateNavValueDtm(
							// 			section,
							// 			subSection,
							// 			categoryMenu.title,
							// 			null,
							// 			e,
							// 			section +
							// 				' ' +
							// 				subSection +
							// 				' ' +
							// 				categoryMenu.title
							// 		)
							// 	}
							// >
							//     </Link>
							<div className="category-menu_list">
								<div className="category-menu_items">
									<span className="fw700">{categoryMenu.title}</span>
									<span
										className="fs12"
										dangerouslySetInnerHTML={{
											__html: categoryMenu.subtext,
										}}
									></span>
								</div>
								<i className="fa fa-angle-right"></i>
							</div>
						) : (
							<a
								{...dataAttr}
								onClick={(e) =>
									updateNavValueDtm(
										section,
										subSection,
										categoryMenu.title,
										null,
										e,
										section +
											' ' +
											subSection +
											' ' +
											categoryMenu.title
									)
								}
								href={categoryMenu.url}
								className="category-menu_list getGaData"
							>
								<div className="category-menu_items">
									<span className="fw700">{categoryMenu.title}</span>
									<span
										className="fs12"
										dangerouslySetInnerHTML={{
											__html: categoryMenu.subtext,
										}}
									></span>
								</div>
								<i className="fa fa-angle-right"></i>
							</a>
						)}
						<div className="display-none select-submenu">
							{categoryMenu.submenu && (
								<SubMenu
									submenu={categoryMenu.submenu}
									updateNavValueDtm={updateNavValueDtm}
									subMenuData={categoryMenu}
									section={section}
									subSection={subSection}
									categoryName={categoryMenu.title}
									parentKey={categoryMenu}
								/>
							)}
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default CategoryMenu
