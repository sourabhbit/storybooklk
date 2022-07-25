import React from 'react'
import SubMenu from '../SubMenu'
import { BannerImgCont } from './styles'

const ContactLens = (props: any) => {
	const { menuData, updateNavValueDtm, section, triggerDataLayerOnCtaClick } =
		props
	const fetchMenu = menuData.data.map((data: any, index: any) => {
		// const subParentKey = data;
		return Object.keys(data).map((key) => {
			return (
				<div key={index} className="nav-level-2 cl">
					{section !== 'Kids Glasses' && <div className="line-sep"></div>}
					<SubMenu
						submenu={data[key]}
						updateNavValueDtm={updateNavValueDtm}
						section={section}
					/>
					{section === 'Kids Glasses' && (
						<div className="BannerDiv">
							<a
								onClick={(e) =>
									triggerDataLayerOnCtaClick(
										section + ' ' + menuData.imgAlt,
										e
									)
								}
								href={menuData.imgUrl}
							>
								<BannerImgCont
									className="BannerImgCont"
									src={menuData.img}
									alt={menuData.imgAlt}
								/>
							</a>
						</div>
					)}
				</div>
			)
		})
	})

	return (
		<div className="nav-level-acc big-screen-wrapper contact-lens">
			{fetchMenu}
		</div>
	)
}

export default ContactLens
