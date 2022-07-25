import React from 'react'
import {
	ProductCardWrapper,
	LineFlex,
	HorizontalGap,
	ProductName,
	LensImage,
	BrandingContainer,
	BrandingImage,
	BrandingTags,
	BoughtNo,
	TryOn,
	TryOnImage,
} from './styles'
import { ProductCardTypes, ProductCardTypesENUM } from './ProductCard.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Tag from 'Components/v2/Tags'
import Pricing from 'Components/v2/Price'
import { iconsENUM } from 'Types/icons'
import NumberedStarOld from 'Components/v1/RatingStar'
import Swatch from 'Components/common/Swatch'
import Divider from 'Components/common/Divider'

/**
 * Default ProductCard Component
 */
const ProductCardOld = ({
	id,
	type = ProductCardTypesENUM.large,
	componentSize = ComponentSizeENUM.medium,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
	onClick = () => jest.fn(),
	tags = [],
	productImage = '',
	rating = 0,
	brandingImage = '',
	originalPrice,
	discountedPrice,
	boughtNo,
	productName = '',
}: ProductCardTypes) => {
	const [isHover, setHover] = React.useState(false)
	return (
		<>
			<BrandingContainer cardType={type}>
				<BrandingImage src={brandingImage} alt="" />
				<BrandingTags>
					{tags?.map((t) => (
						<>
							<Tag
								id="tag-perfect-fit"
								name={t.name}
								componentSize={ComponentSizeENUM.small}
								theme={ThemeENUM.primary}
								font={TypographyENUM.sans}
							></Tag>
							<HorizontalGap cardType={type} />
						</>
					))}
				</BrandingTags>
			</BrandingContainer>
			<ProductCardWrapper
				data-testid="ProductCard-wrapper"
				styleFont={font}
				styleSize={componentSize}
				styleColor={theme}
				onClick={onClick}
				id={id}
				cardType={type}
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<LensImage src={productImage} alt="" cardType={type} />
				{/* <Swatch /> */}
				<LineFlex gap={5} vertical align="normal" justify="normal">
					{/* <VerticalGap cardType={type} /> */}
					<LineFlex>
						<ProductName cardType={type}>{productName}</ProductName>
					</LineFlex>
					<LineFlex>
						{type !== ProductCardTypesENUM.small &&
							type !== ProductCardTypesENUM.medium && (
								<LineFlex justify="space-between" width={100}>
									<LineFlex justify="normal">
										<NumberedStarOld
											id="rating-prod"
											rating={rating}
											icon={iconsENUM.starFilled}
											font={TypographyENUM.serif}
											componentSize={ComponentSizeENUM.small}
											width={10}
										></NumberedStarOld>
										<div>|</div>
										<BoughtNo>{boughtNo + ' bought'}</BoughtNo>
										{tags?.map((t) => (
											<>
												<Tag
													id="tag-perfect-fit"
													name={t.name}
													componentSize={ComponentSizeENUM.small}
													theme={ThemeENUM.primary}
													font={TypographyENUM.sans}
												></Tag>
												<HorizontalGap cardType={type} />
											</>
										))}
									</LineFlex>
									<TryOn>
										<span>Try On</span>
										<div>
											<TryOnImage
												alt="Try On"
												src="https://static.lenskart.com/media/desktop/img/desktop_pdp_model.png"
											/>
										</div>
									</TryOn>
								</LineFlex>
							)}
					</LineFlex>
					<Divider id="product-card" />

					<LineFlex>
						{/* <LineFlex vertical align="flex-start">
							<BrandName cardType={type}>{brandName}</BrandName>
							{type === ProductCardTypesENUM.imageLess && (
								<BrandInfo cardType={type}>{brandInfo}</BrandInfo>
							)}
						</LineFlex> */}
						<LineFlex justify="space-between" width={100}>
							{originalPrice && (
								<Pricing
									id="pricing-card"
									price={originalPrice?.toString()}
									specialPrice={discountedPrice?.toString()}
									// amount={originalPrice?.toString()}
									isSpecialPrice
									componentSize={ComponentSizeENUM.small}
								/>
							)}
						</LineFlex>
					</LineFlex>

					{isHover && (
						<LineFlex>
							<LineFlex justify="space-between" width={100}>
								<div>Size: Medium</div>
								<Swatch
									id="swatch-product-card"
									colors={['#999', '#FF34FF']}
								/>
							</LineFlex>
						</LineFlex>
					)}
				</LineFlex>
			</ProductCardWrapper>
		</>
	)
}

export default ProductCardOld
