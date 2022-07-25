import { BreadcrumbsTypes } from './Breadcrumbs.types'
import {
	BreadcrumbContainer,
	Breadcrumb,
	LI,
	BCSpan,
	AnchorTag,
} from './styles'

const Breadcrumbs = ({
	id,
	productID = '147654',
	contactLensPowerFromUrl = '',
	helplineNo = '1800-111-111',
	dataLocale,
}: BreadcrumbsTypes) => {
	const breadcrumbData = [
		{
			label: 'Eyewear',
			link: 'www.lenskart.com',
		},
		{
			label: 'Eyeglasses',
			link: 'eyeglasses.html',
		},
		{
			label: 'Brands',
			link: 'eyeglasses/brands.html',
		},
		{
			label: 'Vincent Chase',
			link: 'eyeglasses/brands/vincent-chase-eyeglasses.html',
		},
		{
			label: 'Matte Black Rimless Rectangle Lenskart Air Classic LA 0353-C31 Eyeglasses',
		},
	]

	return (
		<BreadcrumbContainer data-testid="breadcrumbs-test" id={id}>
			<Breadcrumb>
				{breadcrumbData &&
					breadcrumbData.map((item, index) => {
						return (
							<LI key={index}>
								{item.link && item.label !== 'Mobile' && (
									<BCSpan>
										<AnchorTag
											href={
												item.link.indexOf('www.lenskart.com') === -1
													? `/${item.link}`
													: '/'
											}
										>
											{item.label}
										</AnchorTag>
									</BCSpan>
								)}
								{!item.link && item.label !== 'Mobile' && (
									<span>
										{item.label} - {productID}
									</span>
								)}
							</LI>
						)
					})}
				{contactLensPowerFromUrl && <li>{contactLensPowerFromUrl}</li>}
			</Breadcrumb>
			{helplineNo && (
				<span>
					{dataLocale?.PROBLEM_IN_PLACING_ORDER}
					<span className="text-primary">&nbsp;{helplineNo}</span>
				</span>
			)}
		</BreadcrumbContainer>
	)
}

export default Breadcrumbs
