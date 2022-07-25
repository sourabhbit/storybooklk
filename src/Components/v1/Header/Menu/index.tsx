import React from 'react'
// import '../Navigation/Navigation.scss';
// import './Menu.scss'
import GenderMenu from '../GenderMenu'

const Menu = (props: any) => {
	const { menuData, updateNavValueDtm, section, dataLocale } = props
	const fetchMenu = menuData.data.map((data: any, index: any) => {
		const subParentKey = data
		return Object.keys(data).map((key) => {
			return (
				<div key={index} className={`nav-level-2 nav-${section}`}>
					{data[key] && (
						<GenderMenu
							dataLocale={dataLocale}
							genderMenuData={data[key]}
							menuData={subParentKey}
							parentKey={key}
							section={section}
							updateNavValueDtm={updateNavValueDtm}
						/>
					)}
				</div>
			)
		})
	})

	return (
		<div className="nav-level-acc nav-glasses big-screen-wrapper">
			{fetchMenu}
			{
				<div className="BannerDiv">
					<a href={menuData.imgUrl}>
						<img
							alt={menuData.imgAlt}
							className="BannerImg"
							src={menuData.img}
						/>
					</a>
				</div>
			}
		</div>
	)
}

export default Menu
