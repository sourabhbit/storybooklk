import React from 'react'
// import { Link } from 'react-router-dom'
// import './GridMenu.scss'
// import { setDataAttr } from '../../../../utils/helper'

const GridMenu = (props: any) => {
	const { menuData, parentMenu, updateNavDtm, section } = props
	const fetchMenu = menuData.data.map((data: any, index: any) => {
		const dataAttr =
			data.gaObj && Object.keys(data.gaObj).length > 0
				? null //setDataAttr(data.gaObj)
				: null
		return (
			<div key={index} className="grid-menu">
				<div
					key={index}
					className="layout flex-column center"
					onClick={() => {
						updateNavDtm(section, '', '', data.url)
					}}
					onKeyDown={() => {
						updateNavDtm(section, '', '', data.url)
					}}
					role="button"
				>
					{data.url && data.url.indexOf('lenskart.com') === -1 ? (
						//<Link
						// 	{...dataAttr}
						// 	className="getGaData"
						// 	to={{
						// 		pathname: data.url,
						// 		state: { categoryId: data.categoryId, section: 'cat' },
						// 	}}
						// >
						<>
							<div className="margin-b10">
								<img alt={data.text} src={data.img} />
							</div>
							<div className="">{data.text}</div>
						</>
					) : (
						// </Link>
						<a href={data.url} {...dataAttr} className="getGaData">
							<div className="margin-b10">
								<img alt={data.text} src={data.img} />
							</div>
							<div className="">{data.text}</div>
						</a>
					)}
				</div>
			</div>
		)
	})
	return (
		<div
			className={parentMenu.sliderType ? 'layout slider' : 'nav-level-acc'}
		>
			{fetchMenu}
		</div>
	)
}

export default GridMenu
