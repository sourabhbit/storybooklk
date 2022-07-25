// import { HeaderTypes } from './Header.types'
// import TopNavBar from 'Components/v1/Header/TopNavBar'
// import MainNav from 'Components/v1/Header/MainNav'
// import {} from './styles'

const NavStrip = ({ dataLocale, redisCommonData }: any) => {
	const {
		FREE_SHIPPING,
		ONE_YEAR_WARRANTY,
		FREE_30_DAY_RETURN_OR_EXCHANGE,
		TOLL_FREE_NUMBER_TEXT,
		UAE_TIME_TEXT,
	} = dataLocale
	const { SHOW_TOLL_NUMBER } = redisCommonData
	const { enable, number } = JSON.parse(SHOW_TOLL_NUMBER)
	return (
		<div className="strip-container">
			<div className="strip-left">
				{FREE_SHIPPING} | {ONE_YEAR_WARRANTY}|{' '}
				{FREE_30_DAY_RETURN_OR_EXCHANGE}
			</div>
			{enable && (
				<div className="strip-right">
					{TOLL_FREE_NUMBER_TEXT} - {number} ({UAE_TIME_TEXT}){' '}
				</div>
			)}
		</div>
	)
}

export default NavStrip
