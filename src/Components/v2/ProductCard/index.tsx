import {
	ProductCardWrapper,
	LineFlex,
	HorizontalGap,
	VerticalGap,
	ProductName,
	BrandName,
	LensImage,
	BrandingContainer,
	BrandingImage,
	BrandingTags,
	OrderedDate,
	BrandInfo,
	PurchaseBar,
} from './styles'
import { ProductCardTypes, ProductCardTypesENUM } from './ProductCard.types'
import { ComponentSizeENUM, ThemeENUM, TypographyENUM } from 'Types/general'
import Tag from 'Components/v2/Tags'
import Pricing from 'Components/v2/Price'
import NumberedStar from 'Components/v2/NumberedStar'
import { iconsENUM } from 'Types/icons'
import Button from 'Components/v2/Button'
import { kindENUM, typeENUM } from 'Components/v2/Button/Button.types'
import SVGIcon from 'Components/common/SVGIcon'

/**
 * Default ProductCard Component
 */
const ProductCard = ({
	id,
	type = ProductCardTypesENUM.large,
	componentSize = ComponentSizeENUM.medium,
	theme = ThemeENUM.primary,
	font = TypographyENUM.serif,
	onClick = () => jest.fn(),
	tags = [],
	productImage = '',
	orderDate = '',
	rating = 0,
	brandName = '',
	brandInfo = '',
	brandingImage = '',
	originalPrice,
	discountedPrice,
	reorderAction = () => jest.fn(),
	viewSimilarAction = () => jest.fn(),
	buyAction = () => jest.fn(),
	productName = '',
}: ProductCardTypes) => {
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
			>
				{type === ProductCardTypesENUM.ordered ? (
					<OrderedDate>
						Ordered <span>{orderDate}</span>
					</OrderedDate>
				) : (
					<LineFlex>
						{type !== ProductCardTypesENUM.imageLess && (
							<LineFlex hide={type === ProductCardTypesENUM.branding}>
								{tags.map((t) => (
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
						)}
						{/* <Wishlist/> */}
					</LineFlex>
				)}
				<LensImage src={productImage} alt="" cardType={type} />
				{/* <Swatch /> */}
				<div>
					<VerticalGap cardType={type} />
					<LineFlex>
						<ProductName cardType={type}>{productName}</ProductName>
						{type !== ProductCardTypesENUM.small &&
							type !== ProductCardTypesENUM.medium && (
								<LineFlex vertical align="flex-end">
									<NumberedStar
										id="rating-prod"
										rating={rating}
										icon={iconsENUM.starFilled}
										font={TypographyENUM.serif}
										componentSize={ComponentSizeENUM.small}
									></NumberedStar>
									{type === ProductCardTypesENUM.imageLess &&
										tags.map((t) => (
											<Tag
												id="tag-express"
												name={t.name}
												componentSize={ComponentSizeENUM.small}
												theme={ThemeENUM.primary}
												font={TypographyENUM.serif}
												key={t.name}
											></Tag>
										))}
								</LineFlex>
							)}
					</LineFlex>
					<VerticalGap cardType={type} />
					<LineFlex>
						<LineFlex vertical align="flex-start">
							<BrandName cardType={type}>{brandName}</BrandName>
							{type === ProductCardTypesENUM.imageLess && (
								<BrandInfo cardType={type}>{brandInfo}</BrandInfo>
							)}
						</LineFlex>
						<div>
							{originalPrice && (
								<Pricing
									id="pricing-card"
									amount={originalPrice?.toString()}
									special
									componentSize={ComponentSizeENUM.small}
								/>
							)}
							{discountedPrice && (
								<Pricing
									id="pricing-card"
									amount={discountedPrice?.toString()}
									special={false}
									componentSize={ComponentSizeENUM.small}
								/>
							)}
						</div>
					</LineFlex>
				</div>
				{type === ProductCardTypesENUM.ordered ? (
					<LineFlex>
						<Button
							buttonType={typeENUM.button}
							componentSize={ComponentSizeENUM.small}
							id="button"
							width="100"
							kind={kindENUM.border}
							leftIcon={iconsENUM.cross}
							onClick={viewSimilarAction}
							rightIcon={iconsENUM.backArrow}
							subText=""
							text="View similar"
							showLeftIcon={false}
							showChildren
							showRightIcon={false}
							theme={ThemeENUM.primary}
						>
							View similar
						</Button>
						<Button
							buttonType={typeENUM.button}
							componentSize={ComponentSizeENUM.small}
							id="button"
							width="100"
							kind={kindENUM.background}
							leftIcon={iconsENUM.cross}
							onClick={reorderAction}
							rightIcon={iconsENUM.backArrow}
							subText=""
							text="Re-order"
							showLeftIcon={false}
							showChildren
							showRightIcon={false}
							theme={ThemeENUM.primary}
						>
							Re-order
						</Button>
					</LineFlex>
				) : null}
			</ProductCardWrapper>
			{type === ProductCardTypesENUM.imageLess ? (
				<PurchaseBar>
					<LineFlex align="center">
						<SVGIcon icon={iconsENUM.addToCart} alt="" />
						<SVGIcon icon={iconsENUM.phone} alt="" />
						<Button
							buttonType={typeENUM.button}
							componentSize={ComponentSizeENUM.small}
							id="button"
							width="100"
							kind={kindENUM.background}
							leftIcon={iconsENUM.cross}
							onClick={buyAction}
							rightIcon={iconsENUM.backArrow}
							subText=""
							text="Buy Now"
							showLeftIcon={false}
							showChildren
							showRightIcon={false}
							theme={ThemeENUM.primary}
						>
							{originalPrice && (
								<Pricing
									id="pricing-card"
									amount={originalPrice?.toString()}
									special={false}
									componentSize={ComponentSizeENUM.small}
								/>
							)}
							{discountedPrice && (
								<Pricing
									id="pricing-card"
									amount={discountedPrice?.toString()}
									special
									componentSize={ComponentSizeENUM.small}
								/>
							)}
							<span>Buy Now</span>
						</Button>
					</LineFlex>
				</PurchaseBar>
			) : null}
		</>
	)
}

export default ProductCard
