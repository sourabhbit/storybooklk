import React from 'react'
import GridMenu from '../GridMenu'
import { HomeEyeCheckUpWrapper } from './styles'
// import { setDataAttr } from '../../../../utils/helper';

const HomeEyeCheckUp = (props: any) => {
	const { updateNavDtm, parentMenu, menuData, section, cta } = props
	const parentKey = Object.keys(parentMenu).toString()
	const fetchMenu = menuData.data.map((data: any, index: any) => {
		const dataAttr =
			data.gaObj && Object.keys(data.gaObj).length > 0
				? null //setDataAttr(data.gaObj)
				: null
		return (
			<HomeEyeCheckUpWrapper
				className={`home-eye-checkup ${section
					.replace(/ /g, '')
					.replace(/-/g, '')
					.toLowerCase()}`}
				key={index}
			>
				{parentMenu[parentKey] && parentMenu[parentKey].sliderType ? (
					<div className="display-flex align-items-center">
						<div className="layout text-black no-decoration align-items-end margin-t30">
							<div className="right-content">
								<h4 className="heading-text">{data.headingText}</h4>
								<p
									className="lh-20 support-text fs16"
									dangerouslySetInnerHTML={{
										__html: data.supportText,
									}}
								></p>
								<div className="display-flex">
									<button
										className="btn btn-navigation"
										onClick={(e) =>
											updateNavDtm(
												section,
												null,
												null,
												null,
												null,
												e,
												section + ' ' + data.buttonText
											)
										}
									>
										<a href={data.url}>{data.buttonText}</a>
									</button>
									{data.boldText && (
										<h5 className="light-dark">{data.boldText}</h5>
									)}
								</div>
							</div>
							<div className="right-content imageGrid display-flex align-items-center margin-l35 margin-r20">
								{data.sliderImg && (
									<GridMenu
										menuData={data.sliderImg}
										parentMenu={parentMenu[parentKey]}
										updateNavDtm={updateNavDtm}
										section={section}
									/>
								)}
							</div>
						</div>
						<div className="BannerDiv">
							<a href={menuData.imgUrl}>
								<img
									className="BannerImg"
									src={menuData.img}
									alt={menuData.imgAlt}
								/>
							</a>
						</div>
					</div>
				) : (
					<a
						href={data.url}
						onClick={(e) =>
							updateNavDtm(
								section,
								null,
								null,
								null,
								cta,
								e,
								section + ' ' + data.buttonText
							)
						}
						className="getGaData layout justify-content-around text-black no-decoration"
						{...dataAttr}
					>
						<div className="checkup-image-section">
							<img src={data.image.src} alt={data.image.imgAlt} />
						</div>
						<div className="margin-l35 right-content">
							<h4 className="heading-text">{data.headingText}</h4>
							<p
								className="lh-20 support-text margin-b15"
								dangerouslySetInnerHTML={{ __html: data.supportText }}
							></p>
							<div className="display-flex button-text">
								<button className="btn btn-navigation">
									{data.buttonText}
								</button>
								<span className="mid-line"></span>
								{data.boldText && (
									<h5 className="light-dark margin-b15">
										{data.boldText}
									</h5>
								)}
							</div>
						</div>
					</a>
				)}
			</HomeEyeCheckUpWrapper>
		)
	})
	return <div className="nav-level-acc big-screen-wrapper">{fetchMenu}</div>
}

HomeEyeCheckUp.defaultProps = {
	parentMenu: {},
}

export default HomeEyeCheckUp
