import React from 'react'
// import { Link } from 'react-router-dom'
import { SubMenuListWrapper, SubMenuWrapper, FlexCol } from './styles'

// import './Submenu.scss'
// import { setDataAttr } from '../../../../utils/helper'

const subMenuList = (
	submenu: any,
	updateNavValueDtm: any,
	subMenuData: any,
	section: any,
	subSection: any,
	categoryMenu: any,
	parentKey: any,
	menuKey: any
) => {
	return submenu
		? submenu.map((data: any) => {
				return Object.keys(data).map((key, index) => {
					const dataAttr =
						data[key].gaObj && Object.keys(data[key].gaObj).length > 0
							? null //setDataAttr(data[key].gaObj)
							: null
					if (data[key].image) {
						const image = data[key].image
						return (
							<SubMenuListWrapper section={section} key={index}>
								{data[key].url &&
								data[key].url.indexOf('lenskart.com') === -1 ? (
									// <Link
									// 	{...dataAttr}
									// 	className="getGaData nav-level-4-item"
									// 	to={{
									// 		pathname: data[key].url,
									// 		state: {
									// 			categoryId: data[key].categoryId,
									// 			section: 'cat',
									// 		},
									// 	}}
									// 	onClick={(e) =>
									// 		updateNavValueDtm(
									// 			section,
									// 			subSection,
									// 			categoryMenu,
									// 			parentKey,
									// 			e,
									// 			section +
									// 				' ' +
									// 				subSection +
									// 				' ' +
									// 				categoryMenu +
									// 				' ' +
									// 				key
									// 		)
									// 	}
									// >
									// </Link>}
									<>
										{section === 'Kids Glasses' && (
											<img src={image.src} alt={image.imgAlt} />
										)}
										{section === 'Kids Glasses' ? (
											<div className="margin-t10">{key}</div>
										) : (
											<span className="">{key}</span>
										)}
									</>
								) : (
									<a
										{...dataAttr}
										href={data[key].url}
										className="getGaData nav-level-4-item"
										onClick={(e) =>
											updateNavValueDtm(
												section,
												subSection,
												submenu,
												categoryMenu,
												parentKey,
												e,
												section +
													' ' +
													subSection +
													' ' +
													categoryMenu +
													' ' +
													key
											)
										}
									>
										<FlexCol>
											{section === 'Kids Glasses' && (
												<img src={image.src} alt={image.imgAlt} />
											)}
											<div className="margin-t10">{key}</div>
										</FlexCol>
									</a>
								)}
							</SubMenuListWrapper>
						)
					}
					return (
						<div key={index} className="nav-level-4">
							{data[key].url &&
							data[key].url.indexOf('lenskart.com') === -1 ? (
								// <Link
								// 	{...dataAttr}
								// 	className="getGaData nav-level-4-item"
								// 	to={{
								// 		pathname: data[key].url,
								// 		state: {
								// 			categoryId: data[key].categoryId,
								// 			section: 'cat',
								// 		},
								// 	}}
								// 	onClick={(e) =>
								// 		updateNavValueDtm(
								// 			section,
								// 			subSection,
								// 			categoryMenu,
								// 			key,
								// 			e,
								// 			section +
								// 				' ' +
								// 				subSection +
								// 				' ' +
								// 				categoryMenu +
								// 				' ' +
								// 				menuKey +
								// 				' ' +
								// 				key
								// 		)
								// 	}
								// >
								<>
									<span>{key}</span>
									<i className="fa fa-angle-right hide"></i>
								</>
							) : (
								// </Link>
								<a
									href={data[key].url}
									className="getGaData nav-level-4-item"
									onClick={(e) =>
										updateNavValueDtm(
											section,
											subSection,
											categoryMenu,
											key,
											e,
											section +
												' ' +
												subSection +
												' ' +
												categoryMenu +
												' ' +
												menuKey +
												' ' +
												key
										)
									}
								>
									<span>{key}</span>
									<i className="fa fa-angle-right hide"></i>
								</a>
							)}
						</div>
					)
				})
		  })
		: null
}

const SubMenu = (props: any) => {
	const {
		submenu,
		updateNavValueDtm,
		subMenuData,
		section = '',
		subSection = '',
		categoryName = '',
		parentKey,
	} = props
	const fetchSubMenu = submenu.map((data: any) => {
		return Object.keys(data).map((key, index) => {
			const dataAttr =
				data[key].gaObj && Object.keys(data[key].gaObj).length > 0
					? null //setDataAttr(data[key].gaObj)
					: null
			return (
				<SubMenuWrapper
					dataType={data[key].type}
					section={section}
					key={index}
					// className={
					// 	data[key].type === 'image'
					// 		? `nav-level-3 flex-img-grow ${
					// 				section === 'Kids Glasses'
					// 					? 'display-flex justify-content-center'
					// 					: ''
					// 		  }`
					// 		: `nav-level-3 custom-width ${
					// 				section === 'Kids Glasses' ? 'display-none' : ''
					// 		  }`
					// }
				>
					{data[key].url &&
					data[key].url.indexOf('lenskart.com') === -1 ? (
						// <Link
						// 	{...dataAttr}
						// 	to={data[key].url}
						// 	className={`getGaData nav-head display-block ${
						// 		data[key].url ? '' : 'cursor-auto'
						// 	}`}
						// 	style={{
						// 		display: `${section === 'Kids Glasses' ? 'none' : ''}`,
						// 	}}
						// >
						// </Link>
						<span>{key}</span>
					) : (
						<a
							{...dataAttr}
							href={data[key].url}
							className={`getGaData nav-head display-block ${
								data[key].url ? '' : 'cursor-auto'
							}`}
							style={{
								display: `${section === 'Kids Glasses' ? 'none' : ''}`,
							}}
						>
							<span>{key}</span>
							<i className="fa fa-angle-right hide"></i>
						</a>
					)}
					<div
						style={{ display: 'flex' }}
						// className={
						// 	data[key].type === 'image'
						// 		? `layout ${
						// 				section === 'Kids Glasses'
						// 					? 'justify-space-evenly justify-content-end'
						// 					: 'flex-column align-items-start'
						// 		  } `
						// 		: ''
						// }
					>
						{subMenuList(
							data[key].submenu,
							updateNavValueDtm,
							subMenuData,
							section,
							subSection,
							categoryName,
							parentKey,
							key
						)}
					</div>
				</SubMenuWrapper>
			)
		})
	})

	return (
		<div
			className={
				parentKey === 'See All'
					? 'nav-subcategory-level fixFromTopDiv'
					: `nav-subcategory-level count_${submenu.length}`
			}
		>
			{fetchSubMenu}
		</div>
	)
}

export default SubMenu
