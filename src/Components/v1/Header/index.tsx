import { memo } from 'react'
// import { HeaderTypes } from './Header.types'
import TopNavBar from 'Components/v1/Header/TopNavBar'
import MainNav from 'Components/v1/Header/MainNav'
import { HeaderWrapper, TopNavBarWrapper } from './styles'
import { headerProps } from './mockValues'

const Header = ({ props }: any) => {
	const { mainNavigationData, isMenuVisible } = headerProps
	let updatedProps = headerProps
	const navData = mainNavigationData && mainNavigationData.topBarNav
	return (
		<HeaderWrapper className="container-fluid">
			<TopNavBarWrapper id="topNavBar">
				{navData && (
					<TopNavBar
						// isMenuVisible={isMenuVisible}
						// isSupported={headerProps.isSupported}
						topNavData={navData}
						{...updatedProps}
					/>
				)}
			</TopNavBarWrapper>
			<MainNav {...updatedProps} />
		</HeaderWrapper>
	)
}

export default memo(Header)
