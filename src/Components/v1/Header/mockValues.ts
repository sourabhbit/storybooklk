export const headerProps = {
	match: {
		path: '/',
		url: '/',
		params: {},
		isExact: true,
	},
	location: {
		pathname: '/',
		search: '',
		hash: '',
	},
	history: {
		length: 2,
		action: 'POP',
		location: {
			pathname: '/',
			search: '',
			hash: '',
		},
	},
	route: {
		routes: [
			{
				path: '/(HTO|hto)',
			},
			{
				path: '/(/*)?',
				exact: true,
			},
			{
				path: '/promo/:pagename(/*)?',
			},
			{
				path: '/(eyeglasses.html|sunglasses.html|premium-eyeglasses|premium-sunglasses)(/*)?',
				exact: true,
			},
			{
				path: '/catalog/:id(/*)?',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/category/:id(/*)?',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/catalog/category/view/:id?/:id?/:page?/:page?(/*)?',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/product/:id(/*)?',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/customer-feedback',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/catalog/product/view/:id?/:id?/:page?/:page?/:page?(/*)?',
				component: {
					compare: null,
					displayName: 'Connect(RedisMapping)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/compare-looks(/*)?',
			},
			{
				path: '/(frame-size|frame_size)',
			},
			{
				path: '/customer/account/resetpassword',
				exact: true,
			},
			{
				path: '/customer/account/forgotpassword',
				exact: true,
			},
			{
				path: '/customer/*',
			},
			{
				path: '/checkout/onepage/presaleslogin',
				component: {
					compare: null,
					displayName: 'Connect(PreSales)',
				},
			},
			{
				path: '/checkout/onepage/success/order-summary',
			},
			{
				path: '/checkout/onepage/success',
			},
			{
				path: '/checkout/onepage/uploadprescsms',
			},
			{
				path: '/checkout/onepage/retrypayment',
			},
			{
				path: '/(checkout/onepage|checkout/onepage/presales)',
			},
			{
				path: '/reviews',
			},
			{
				path: '/shop-instagram',
			},
			{
				path: '/editpower/options/view',
				component: {
					compare: null,
					displayName: 'Connect(EditPowerContainer)',
					'@@redial-hooks': {},
				},
			},
			{
				path: '/sales/order/(history/order-detail|return-details|return/products)/:id',
				component: {
					compare: null,
					displayName: 'Connect(RefundExchangeFallback)',
				},
			},
			{
				path: '/sales/order(/*)?',
			},
			{
				path: '/checkout/payment/qr/:id',
			},
			{
				path: '/checkout/payment/collect/:id',
				component: {
					compare: null,
				},
			},
			{
				path: '/checkout/payment/confirm',
				component: {
					compare: null,
				},
			},
			{
				path: '/support',
			},
			{
				path: '/home-try-on-program-*',
			},
			{
				path: '/lead-gen/user-detail',
				exact: true,
				component: {
					compare: null,
					displayName: 'Connect(LeadGen)',
				},
			},
			{
				path: '/lens-package-upgrade/:orderId/:itemId',
				component: {
					compare: null,
					displayName: 'Connect(LensPackageUpgrade)',
				},
			},
			{
				path: '/lens-package-upgrade/:orderId',
				component: {
					compare: null,
					displayName: 'Connect(LensPackageUpgrade)',
				},
			},
			{},
		],
	},
	redisCommonData: {
		GUEST_MSG: 'Hi, Specsy',
		SHOW_MORE_PAYMENT_OPTION_LIMIT: '4',
		PRODUCT_COUNT: '5',
		BOGO_OFFER_CONFIG:
			'{"ModalHeader":"Select one offer from below","GoldMembershipPrice":600,"GoldBannerImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/gold-strip.png","TextAddSecondSunWithGold":"Add 2nd Sunglasses Free with Gold Membership: ₹600/yr","TextAddSecondEyeWithGold":"Add 2nd Eyeglasses Free with Gold Membership: ₹600/yr","TextAddSecondSun":"Add 2nd Sunglasses Free","TextAddSecondEye":"Add 2nd Eyeglasses Free","TextSinglePair":"Buy Single Pair","Vincent Chase_Eye":"/eyeglasses/promotions/vc-jj-eyeglasses.html","Vincent Chase_Sun":"/sunglasses/promotions/buy-1-get-1.html","Vincent Chase Polarized_Eye":"/eyeglasses/promotions/vc-jj-eyeglasses.html","Vincent Chase Polarized_Sun":"/sunglasses/promotions/buy-1-get-1.html","John Jacobs_Eye":"/eyeglasses/brands/john-jacobs-eyeglasses.html","John Jacobs_Sun":"/sunglasses/brands/john-jacobs.html","sunAdded":{"singlePairImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/sun.jpg","withSunImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/sun-sun.jpg","withEyeImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/sun-eye.jpg"},"eyeAdded":{"singlePairImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/eye.jpg","withSunImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/eye-sun.jpg","withEyeImg":"https://static5.lenskart.com/images/cust_mailer/4-Dec-18/eye-eye.jpg"}}',
		NEW_CAPTURE_NUMBER_EXPIRY: '31536000000',
		CONFIG_CTA_DESKTOP:
			'{"CHECKOUT":{"mainText":"Proceed To Checkout","subText":"(You can submit your power at the end_v1)"},"PAYMENT":{"mainText":"Place order","subText":"(Submit Power in the Next Step)"}}',
		VC_RIMLESS: '',
		POST_CART_POWER:
			'{ "msite": { "eyePowerConfig": { "postPowerModal": "ON", "primaryHeading": "One price for All powers", "secondaryHeading": "Submit power after placing order via", "primaryBtn": "I will submit Power after Checkout", "primaryBtnSubText": "within 14 days", "primaryBtnNavLink": "/checkout/shipping", "secondaryBtn": "No, I want to submit power now", "secondaryBtnNavLink": "/checkout/power/prescription" } }, "desktop": {} }',
		BUY_ON_CALL_CONFIG:
			'{"aspectRatio":"1.0","showCloseIcon":true,"Eyeglasses":{"isShown":"ON","img":"//static.lenskart.com/media/mobile/images/buy_on_call_banner.png","contactNumber":"18001020767"},"Sunglasses":{"isShown":"ON","img":"//static.lenskart.com/media/mobile/images/buy_on_call_banner.png","contactNumber":"18001020767"},"Contact Lens":{"isShown":"ON","img":"//static.lenskart.com/media/desktop/img/CL_buy_on_call_bottomsheet.png","contactNumber":"8470007367"},"scrollPositionFromTop":"3900"}',
		DEFAULT_ADDRESS:
			'{"address": {"action": "NOT_INSERT","addressline1": "Lenskart Warehouse","addressline2": "Property No 29/24/2 25/2/1 30/4/1 5/1 6/1/1 6/1/2 Revenue Estate Of Village Begumpur Khatola Manesar","alternatePhone": "undefined","city": "GURUGRAM","comment": "undefined","country": "IN","email": "undefined","firstName": "Gold","floor": 0,"gender": "unknown","lastName": "User","phone": "undefined","phoneCode": "+91","postcode": 122004,"state": "HARYANA"}}',
		ENTER_POWER_MANUALLY: true,
		SHOW_TOLL_NUMBER:
			'{"enable":true,"number":"1800111111","image":"https://static.lenskart.com/media/mobile/images/phone_number.svg"}',
		PDP_PAGE_CONFIG: '{"desktop":{"productFAQs":"ON"},"msite":{}}',
		PDP_CTA_CONDITIONAL:
			'{"eyeWearExpertEnable": true, "freeEyeTestEnable": true, "buyOnAppEnable": true}',
		FACE_ANALYSIS:
			'{ "faceAnalysisConfig": { "title": "Your Face Analysis", "faceAnalysis": [{ "img": "https://static1.lenskart.com/media/mobile/img/icon-face-width.svg", "value": "My Face Width", "alt": "faceWidth" }, { "img": "https://static1.lenskart.com/media/mobile/img/icon-frame-width.svg", "value": "Frame Width that Fits Face", "alt": "frameWidth" }, { "key": "faceShape", "value": "<p class=\\"mr-b0\\">Your</p><p class=\\"mr-b0\\">Face Shape</p>" }, { "key": "recommendShape", "value": "<p class=\\"mr-b0\\">Recommended</p><p class=\\"mr-b0\\">Frame Shapes</p>" }], "faceAnalysisConfigBtn": "Show me frames in my size", "filters": [{ "showBtn": "OFF", "key": "1", "value": "Fits My Face" }, { "showBtn": "ON", "key": "2", "value": "My Face Width" }, { "showBtn": "ON", "key": "3", "value": "All Sizes" }], "labels": ["Frame Width", "Fits Face"], "range": { "eyeframe": [{ "min": "2", "max": "4" }], "sunglasses": [{ "min": "2", "max": "3" }] } }, "faceShapes": { "round": [{ "filterId": "11343", "name": "Wayfarer" }, { "filterId": "11345", "name": "Rectangle" } ], "diamond": [{ "filterId": "11345", "name": "Rectangle" }, { "filterId": "11346", "name": "Round" } ], "square": [{ "filterId": "11346", "name": "Round" }, { "filterId": "11348", "name": "Oval" } ], "oval": [{ "filterId": "11345", "name": "Rectangle" }, { "filterId": "11348", "name": "Round" } ], "heart": [{ "filterId": "11343", "name": "Wayfarer" }, { "filterId": "11345", "name": "Rectangle" } ] }, "home": { "redirectUrl": "/eyeglasses/promotions/vc-jj-eyeglasses.html", "categoryId": "7112" }, "listing": { "eyeframe": [{ "redirectUrl": "/eyeglasses/brands/vincent-chase-eyeglasses.html", "categoryId": "3194" }], "sunglasses": [{ "redirectUrl": "/sunglasses/collections/polarized-sunglasses.html", "categoryId": "3221" }] }, "pdp": { "eyeframe": [{ "redirectUrl": "/eyeglasses/brands/vincent-chase-eyeglasses.html", "categoryId": "3194" }], "sunglasses": [{ "redirectUrl": "/sunglasses/special/vincent-chase-bestsellers.html", "categoryId": "3909" }], "configBtn": { "cta1": "OK", "cta2": "RECOMMEND" } } }',
		LOYALTY_CONFIG:
			'{"goldPid":"128269","classificationsAllowed":"eyeframe,sunglasses","brandsAllowed":"Vincent Chase,John Jacobs,Vincent Chase Polarized","goldCartAddCTAText":"Add To Cart","goldSkipCTAText":"Skip","goldSliderBanner":"https://static5.lenskart.com/images/cust_mailer/22-Mar-19/3_New.png","goldCheckoutBanner":"https://static5.lenskart.com/images/cust_mailer/22-Mar-19/gold-checkout-block.jpg","goldTnCHtml":"","goldCartHoverHtml":"<span>Add membership for ₹600</span><br/><span>& choose 2nd pair for FREE</span>","goldCartKnowMoreImg":"https://static5.lenskart.com/images/cust_mailer/22-Mar-19/loyalty-dropdown-gif.gif","goldAddedPopUpHtml":"<div class=\\"gold-added-close\\" style=\\"font-size: 18px;\\">x</div><div><img class=\\"gold-logo\\" style=\\"margin-top: -20px;\\" src=\\"https://static1.lenskart.com/media/desktop/img/15-July-19/logo_lk_gold_aura.png\\"></div><div class=\\"gold-added-info\\" style=\\"font-size: 18px;\\"><span class=\\"gold-added-info-title\\">Gold membership added to cart!</span><br><span class=\\"gold-added-info-content\\">Please select 2nd Pair now</span><div><a href=\\"/loyalty\\" target=\\"_blank\\">Know More</a></div></div>"}',
		PLP_CONFIG:
			'{"enablePhoneNumberCapture":false,"enableFindMySize":false,"showProductsVisibleCounter":false,"enableBuyOnCall":true,"offerMsg":{"vincent-chase-ce-eyeframe":["1st Pair","with Lenses"],"john-jacobs-ce-eyeframe":["1st Pair","With Blue-Block Lenses"],"vincent-chase-vc-eyeframe":["1st Pair","with Lenses"],"vincent-chase-online-eyeframe":["1st Pair","with Lenses"],"vincent-chase-staff-pick-eyeframe":["1st Pair","with Lenses"],"john-jacobs-online-eyeframe":["1st Pair","with Blu Thin Lenses"],"fallon-colby-eyeframe":["1st Pair","with Lenses"]}}',
		hideDittoPhoneCapture: 'OFF',
		SHOW_CHAT_BOT: true,
		MSITE_SHOW_MORE_PAYMENT_OPTION: 'ON',
		REVIEW_CONFIG: '{ "review_min_character": "6" }',
		lensPackageTextConfig:
			'{"single_vision":{"title":"Powered Specs_sv","subtitle":"For distance or near vision <br>(Thin, anti-glare, blue-cut options)"},"zero_power":{"title":"Phone/PC Zero Power Eyeglasses","subtitle":"Block 98% of harmful rays<br>(Anti-glare and blue-cut options)"},"bifocal":{"title":"Bifocal Progressive","subtitle":"Bifocal and Progressives<br>(For two powers in same lenses)"},"tinted_sv":{"title":"Power Sunglasses","subtitle":"For Distance or Near Vision<br>(Green, Grey, Brown)"},"frame_only":{"title":"Frame Only","subtitle":"Buy Only Frame"},"without_power":{"title":"Without Power","subtitle":"Regular Sunglasses"},"sunglasses":{"title":"With Power","subtitle":"Prescription Sunglasses"}}',
		NEW_AUTH_CONFIG:
			'{"default":{"SKIP_BTN_TIMEOUT":"30","SKIP_PASSWORD_FOR_MAIL":"OFF","SKIP_EMAIL_TO_MOBILE_VERIFICATION":"OFF","SKIP_MOBILE_TO_EMAIL_VERIFICATION":"ON"},"checkout":{"SKIP_BTN_TIMEOUT":"30","SKIP_PASSWORD_FOR_MAIL":"OFF","SKIP_EMAIL_TO_MOBILE_VERIFICATION":"OFF","SKIP_MOBILE_TO_EMAIL_VERIFICATION":"ON"}}',
		GOOGLE_MAP_KEY: 'AIzaSyC5ZYpn_O6FnMwDCaG5npxnh5xCHd5kNaA',
		ADDTOCART_BUTTON_CONFIG:
			'{"Vincent Chase_Full Rim":{"1099":{"label":"IN JUST Rs.699 WITH LENSES","desc":"(with 1 Year Warranty & 14 Day Return)"},"999_1500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"Vincent Chase CE_Full Rim":{"999_1500":{"label":"BUY NOW","desc":"(with Zero Power Lenses)"}},"Vincent Chase CE_Half Rim":{"999_1500":{"label":"BUY NOW","desc":"(with Zero Power Lenses)"}},"Vincent Chase CE_Rimless":{"999_1500":{"label":"BUY NOW","desc":"(with Zero Power Lenses)"}},"Vincent Chase_Half Rim":{"1099":{"label":"IN JUST Rs.699 WITH LENSES","desc":"(with 1 Year Warranty & 14 Day Return)"},"1500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"Vincent Chase_Rimless":{"1500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"Mask_Full Rim":{"999":{"label":"IN JUST Rs.699 WITH LENSES","desc":"(with 6 Months Warranty & 14 Day Return)"}},"Mask_Half Rim":{"999":{"label":"IN JUST Rs.699 WITH LENSES","desc":"(with 6 Months Warranty & 14 Day Return)"}},"John Jacobs_Full Rim":{"3500_4500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"John Jacobs_Half Rim":{"3500_4500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"John Jacobs_Rimless":{"3500_4500":{"label":"BUY 1 GET 1 WITH GOLD MEMBERSHIP","desc":"(with 1 Year Warranty & 14 Day Return)"}},"Ray-Ban_Full Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Ray-Ban_Half Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Ray-Ban_Rimless":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Oakley_Full Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Oakley_Half Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Oakley_Rimless":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Vogue_Full Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Vogue_Half Rim":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}},"Vogue_Rimless":{"1000_5000":{"label":"ADD POWER & CHOOSE LENSES","desc":"(with 2 Year Warranty & 14 Day Return)"}}}',
		PRODUCT_OFFERID_CONFIG: {
			VCSUNOE: {
				pdp_ipl: false,
				new: {
					text2: '',
					text1: '',
				},
				repeat: {
					text2: '',
					text1: '',
				},
				default: {
					text1: '',
					text2: '',
				},
			},
			VCEYE: {
				new: {
					text1: '',
					text2: '',
				},
				repeat: {
					text2: '',
					text1: '',
				},
				pdp_ipl: false,
				default: {
					text2: '',
					text1: '',
				},
			},
			VCEYEOE: {
				default: {
					text1: '',
					text2: '',
				},
				pdp_ipl: false,
				repeat: {
					text1: '',
					text2: '',
				},
				new: {
					text2: '',
					text1: '',
				},
			},
		},
		PHONE_NUMBER_CAPTURE_CONFIG:
			'{"home":{"captureNumber":"OFF","captureNumberClose":"OFF","banner1":{"heading":"Try out frames on your face!","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","textNumberField":"Enter Mobile Number","CTA":"Proceed","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"},"banner2":{"heading":"Congratulations!","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","subHeading":"Get the Lenskart App and start trying frames on your face","subHeadingColor":"#a2a0a0","CTAText":"Download the App","CTAColor":"#02bac6","appLogoRating":"https://static1.lenskart.com/media/desktop/img/appdownload1.png","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"}},"collection":{"captureNumber":"OFF","captureNumberClose":"OFF","banner1":{"heading":"Avail Buy 1 Get 1 Free on all Frames","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","textNumberField":"Enter Mobile Number","CTA":"Proceed","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"},"banner2":{"heading":"Get the Lenskart App to avail offer!","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","subHeading":"Get the Lenskart App to use your LK Cash!","subHeadingColor":"#a2a0a0","CTAText":"Download the App","CTAColor":"#02bac6","appLogoRating":"https://static1.lenskart.com/media/desktop/img/appdownload1.png","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"}},"pdp":{"captureNumber":"OFF","captureNumberClose":"OFF","banner1":{"heading":"Avail Buy 1 Get 1 Free on all Frames","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","textNumberField":"Enter Mobile Number","CTA":"Proceed","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"},"banner2":{"heading":"Get the Lenskart App to avail offer!","headingColor":["#f8ac37","#dd166d"],"headingFallbackColor":"#dd166d","subHeading":"Get the Lenskart App to use your LK Cash!","subHeadingColor":"#a2a0a0","CTAText":"Download the App","CTAColor":"#02bac6","appLogoRating":"https://static1.lenskart.com/media/desktop/img/appdownload1.png","background":"https://static1.lenskart.com/media/desktop/img/13-Nov-19/Background-2.jpg"}}}',
		QR_CODE_SCAN_EXPIRE_TIME: '300',
		CART_CONFIG:
			'{ "goldCard": { "knowMoreLink": "https://www.lenskart.com/loyalty", "knowMoreBanner": "https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/img1RevisedBanner26thJAN.png", "addGoldCTA": "ON", "goldImage": "https://static.lenskart.com/media/mobile/images/cart/gold-image.svg" } }',
		MISSED_CALL_CONFIG:
			'{"Eyeglasses":{"isShown": "ON", "contactNumberDisplay":"1800-111-111"},"Sunglasses":{"isShown": "ON",  "contactNumberDisplay":"1800-111-111"},"Contact Lens":{"isShown": "ON",  "contactNumberDisplay":"+91 847-000-7367"}}',
		META_DATA:
			'{"metaName":{"description":"ShoponlineforSunglasses,EyeglassesandContactLensesformen&womenandGetupto18%Discountatlenskart.com.✓FREEshipping✓CashonDelivery✓14DaysReturn","keywords":"Onlineshopping,Eyewear,ContactLenses","robots":"INDEX,FOLLOW","twitter:card":"summary","twitter:site":"@Lenskart_com","twitter:title":"Lenskart.com®-FirstEyeglassesFrameFREE","twitter:description":"ShoponlineforSunglasses,EyeglassesandContactLensesforMen,Women&KidsandGetupto50%FlatDiscountatLenskart.ae✓FREEshipping✓CashonDelivery✓14DaysReturn","twitter:image":"//static.Lenskart.ae/media/mobile/images/lenskart_icon_144X144.png"},"metaProperty":{"og:type":"website","og:title":"Lenskart.ae®","og:site_name":"Lenskart.ae","og:image":"//static.Lenskart.ae/media/mobile/images/lenskart_icon_144X144.png","og:url":"/","og:description":"ShoponlineforSunglasses,EyeglassesandContactLensesforMen,Women&KidsandGetupto50%FlatDiscountatLenskart.ae✓FREEshipping✓CashonDelivery✓14DaysReturn","lenskartwebsite:price:currency":"INR"}}',
		APP_DOWNLOAD_PUSH_CONFIG:
			'{"header":{"appDownloadPush":"OFF","actionText":"Download Lenskart App","offerText":"Buy 1 Get 1 Free","buttonText":"Install App","pages":["home","col","cat","prod"]},"listing":{"appDownloadPush":"OFF","offerText":"App Only Offer","buttonText":"Buy On App","classification":["eyeframe","sunglasses","non_power_reading"]},"pdp":{"appDownloadPush":"OFF","offerText":"App Only Offer","buttonText":"Buy On App","classification":["eyeframe","sunglasses","non_power_reading"]},"discountPercent":5}',
		ELIGIBILITY_STATUS_HISTORY:
			'{"cod":["delivered"], "others": ["complete"]}',
		CHECKOUT_PAGE_CONFIG:
			'{"desktop":{"checkoutInfoBlogEnabled":"OFF","discountCouponEnabled":"OFF","productFaqsEnabled":"ON"},"msite":{}, "common": {"bogoExcessedMessage":"Dear <Name>, Monthly or Yearly limit exceeded for you to get the Buy One Get One free under GOLD Membership. Monthly limit is 5 and yearly limit is 12.", "enableLearnMore": true,"TAClink": "https://www.lenskart.com/gold-membership-app"}}',
		TAT_INFO: 'Note: Bifocal/progressive powers may take upto 12 days.',
		SHOW_MORE_PAYMENT_OPTION: 'ON',
		FRAME_SIZE_KEY_MSITE:
			'9235f53b0d1753253nf799b2712482fb4c05a8224a8ua885d07502e0ea81e3fb',
		HIDE_RECOMMENDED_PRODUCTS: 'OFF',
		PDP_CTA_CONFIG:
			'[{ "enable": "ON", "buttonName": [{ "img": "https://static1.lenskart.com/media/mobile/images/whatsappcta.png", "CTA": "EYEWEAR EXPERT", "title": "EyewearExpert" }, { "img": "https://static1.lenskart.com/media/mobile/images/pdp-btn/NearbyStore.png", "CTA": "FREE EYE TEST", "title": "nearByStore" }, { "img": "https://static1.lenskart.com/media/mobile/images/pdp-btn/BuyOnApp.png", "CTA": "BUY ON APP", "title": "butOnApp" }] }, { "buyNowCTA": [{ "eyeframe": "SELECT LENSES", "sunglass": "BUY NOW", "contact_lens": "BUY NOW", "default": "BUY NOW" }] }]',
		CONFIG_CTA_MSITE:
			'{ "CHECKOUT": { "mainText": "CONTINUE AND SUBMIT POWER", "subText": "(You can submit your power at the end)" }, "PAYMENT": { "mainText": "Place order", "subText": "(And Submit Power At The End)" } }',
		DISABLE_BUY_CALL: 'OFF',
		SORT_PACKAGES_BY_PRICE_DESC: 'ON',
		LKCashEnabled: 'ON',
		FRESHBOT_CONFIG:
			'{"enabled":"ON","needHelpListingEnabled":"OFF","timeOut":4000}',
		SUBSCRIPTION_CONFIG:
			'{"areAllExpanded":false,"defaultSelectedPkgId":"oneTimeOrder","subscriptionInfo":[{"title":"What is Subscription?","desc":["Automatic reminders & Help in placing next order when your Contact Lens Supply runs low"]},{"title":"Benefits:","desc":["Pay later for your Future Deliveries","Special Subscription Discounts","Cancel Subscription Anytime","Auto reminder and Reorder after confirmation","No Extra Charges"]}]}',
		PHONE_NUMBER_CONFIG:
			'{"enable": true, "imgUrl": "https://static.lenskart.com/media/mobile/images/phone_number.svg"}',
		STORE_FRAME_SIZE: 'ON',
		LENSKART_PROMISE: '[true, true, true, true]',
		TRY_ON_DESKTOP:
			'{"mainText":"3D Try On","subText1":"Make a video to try glasses on yourself from all angles","subText2":"Try 1000s of frames on your face and compare looks","btnText":"Get Started"}',
		GOLD_TIER:
			'{ "three65Enable": "ON", "savings": "OFF", "defaultTierName": "gold_original", "RENEW_GOLD_CTA": { "gold_pro": 120, "gold_original": 120 }}',
		TRY_FRAMES_3D_BANNER: 'OFF',
		PRESCRIPTION_MODAL: 'ON',
		APP_DOWNLOAD_ONELINK:
			'https://lenskart.onelink.me/747387224/d9cff77b?pid=mobile_web_ditto_trip',
		SUPPORT_EMAIL_ID: 'support@lenskart.com',
		SPRINKLR_BOT_CONFIG:
			'{"desktop_enabled":"ON","msite_enabled":"ON","needHelpListingEnabledDesktop":"ON","needHelpListingEnabledMsite":"ON","iosNew":"ON","androidNew":"ON","timeOut":5000}',
		OFFLINE_ORDER_NUMBER: '18001020767',
		NEW_CAPTURE_NUMBER_CLOSE_EXPIRY: '2592000000',
		BOGO_WORKFLOW: 'OFF',
		ENABLE_EMAIL_US: 'OFF',
		isEmailMandatoryForDitto: 'OFF',
		AVAILABLE_NEIGHBOUR_COUNTRIES: '{"availableCountries":[]}',
		VC_HALF_RIM: '',
		GOLD_MEMBERSHIP_CONFIG:
			'{"showClGoldBanner":false,"eyeSunBannerPath":"https://static5.lenskart.com/images/cust_mailer/22-Mar-19/gold-cart-thin-strip.jpg","clBannerPath":""}',
		SHOW_EYE_TEST_BANNER:
			'{"enable":true,"image":"https://static.lenskart.com/media/mobile/images/HTO_banner_pdp.jpeg"}',
		FRAME_SIZE_KEY_DESKTOP:
			'129d50a00cf9b34b1c9b4603t6945e74369b68a8e75ed60263f423bee01dbc91',
		BANNER_IMAGE:
			'{"signUpUrl": "https://static1.lenskart.com/media/desktop/img/sign-up.png"}',
		PDP_CONFIG:
			'{"showTAH":{"clsfn":"eyeframe,sunglasses","brands":"Vincent Chase, John Jacobs"},"productFAQS":{"desktop":"ON"},"showPDPRich":{"msite":"ON","desktop":"ON"},"showTASText":"TRY AT STORE","showTAS":{"Eyeglasses":{"Vincent Chase":"ON","John Jacobs":"ON"},"Sunglasses":{"Vincent Chase":"ON","John Jacobs":"ON"},"Contact Lens":{"Bausch & Lomb":"OFF"}},"showBookNowStrip":false,"showTAHText":"TRY AT HOME","BuyOnApp":{"showBuyOnApp":{"type":"Eyeglasses,Sunglasses","subText":"Get Additional 10% off"},"showBuyNow":{"type":"Eyeglasses, Sunglasses"},"showTBYB":{"clsfn":"eyeframe,sunglasses","brands":"Vincent Chase, John Jacobs","text":"TRY NOW","configText":{"heading":"Try Before You Buy","modalContent":[{"img":{"imageUrl":"https://static.lenskart.com/media/mobile/images/img_try3d.png","imageAlt":"try in 3d"},"title":"Try in 3D","subText":"Try frame & view from all angles","redirection":"/compare-looks"},{"img":{"imageUrl":"https://static.lenskart.com/media/mobile/images/img_tah.png","imageAlt":"Try at Home"},"title":"Try at Home","subText":"200+ bestseller frames at home","redirection":"//www.lenskart.com/try-at-home/"},{"img":{"imageUrl":"https://static.lenskart.com/media/mobile/images/img_tas.png","imageAlt":"Try at Store"},"title":"Try at Store","subText":"Locate a Lenskart store near you","redirection":"//www.lenskart.com/optical-store/"}]}}},"homeTryOn":{"pdp":{"heading":"Cant make a decision yet?","sub_text_1":"How about","sub_text_2":"Home Try On","sub_text_3":"Trial of 100+ best selling<br/> frames | Convenience fee of <span class=\\"text-color_blackrobotofw400\\">FREE</span><br /> <a href=\\"//www.lenskart.com/try-at-home/\\" target=\\"_blank\\" class=\\"fw400text-topaz\\">Book Now</a> or Call us at <a href=\\"tel: 1800-102-6886\\" class=\\"fw400text-topaz\\">1800-102-6886</a>","logo":"https://static2.lenskart.com/media/mobile/universal/assets/home_try_on.png"}},"showReserveAtStore":{"enabled":true,"cta":"Nearby Store"}}',
		DITTO_CONFIG:
			'{"isDittoEnableGlobal":"ON","isCatDittoView":"ON","isDittoPDPDefaultView":"ON","howDoILook":"ON"}',
		SKIP_COATINGS_STEP: 'OFF',
		SUCCESS_REFER_EARN:
			'{"isEnable":true,"banner":"//static.lenskart.com/media/desktop/img/success-refer-earn.jpg","url":"//www.lenskart.com/refer-and-earn-paytm","cta":"LEARN MORE"}',
		ShOW_TRY_ON: true,
		USER_SAVED_CARD: 'ON',
		CATEGORY_PAGE_SIZE_COUNT: '15',
		BRAND_PRICE_APP_OFFER:
			'{"showBrandSpecific":"ON","Vincent Chase_eyeframe":{"999_2500":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"John Jacobs_eyeframe":{"3000_6000":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"John Jacobs JJ_eyeframe":{"2000_3000":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"John Jacobs_sunglasses":{"3000_6000":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"John Jacobs JJ_sunglasses":{"1500_6000":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"Ray-Ban_eyeframe":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Ray-Ban_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Oakley_eyeframe":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Oakley_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Carrera_eyeframe":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Carrera_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Tommy Hilfiger_eyeframe":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Tommy Hilfiger_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"French Connection_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Fossil_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Vogue_eyeframe":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Vogue_sunglasses":{"2000_15000":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Vincent Chase VC_eyeframe":{"1750":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"Avail Buy 1 Get 1 Free","lkcashpercentage":0}},"Vincent Chase CE_eyeframe":{"999":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0},"1500":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Mask_eyeframe":{"1750":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"Fallon Colby_eyeframe":{"1750":{"listingPageMessage":"Avail Buy 1 Get 1 Free","pdpPageMessage":"Avail Buy 1 Get 1 Free","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"Vincent Chase_sunglasses":{"899":{"listingPageMessage":"Buy 2 at Rs.1199","pdpPageMessage":"Buy 2 at Rs.1199","buyNowMessage":"(Buy 2 at Rs.1199)","lkcashpercentage":0},"999":{"listingPageMessage":"Buy 2 at Rs.1399","pdpPageMessage":"Buy 2 at Rs.1399","buyNowMessage":"(Buy 2 at Rs.1399)","lkcashpercentage":0}},"Vincent Chase Polarized_sunglasses":{"999":{"listingPageMessage":"Buy 2 at Rs.1399","pdpPageMessage":"Buy 2 at Rs.1399","buyNowMessage":"(Buy 2 at Rs.1399)","lkcashpercentage":0}},"Vincent Chase VC_sunglasses":{"0_700":{"listingPageMessage":"End of Season Sale","pdpPageMessage":"End of Season Sale","buyNowMessage":"(End of Season Sale)","lkcashpercentage":0}},"Mask_sunglasses":{"0_700":{"listingPageMessage":"End of Season Sale","pdpPageMessage":"End of Season Sale","buyNowMessage":"(End of Season Sale)","lkcashpercentage":0}},"Fallon Colby_sunglasses":{"0_700":{"listingPageMessage":"End of Season Sale","pdpPageMessage":"End of Season Sale","buyNowMessage":"(End of Season Sale)","lkcashpercentage":0}},"Vincent Chase Kids_sunglasses":{"0_999":{"listingPageMessage":"(Avail Buy 1 Get 1 Free)","pdpPageMessage":"(Avail Buy 1 Get 1 Free)","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"Vincent Chase Kids_eyeframe":{"0_1500":{"listingPageMessage":"(Avail Buy 1 Get 1 Free)","pdpPageMessage":"(Avail Buy 1 Get 1 Free)","buyNowMessage":"(Avail Buy 1 Get 1 Free)","lkcashpercentage":0}},"ThinOptics_non_power_reading":{"849":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}},"Vincent Chase_non_power_reading":{"199_899":{"listingPageMessage":"Extra Rs.50 Off","pdpPageMessage":"Extra Rs.50 Off","buyNowMessage":"Extra Rs.50 Off","lkcashpercentage":0}}}',
		POWER_STATUS_MESSAGE:
			'{   "powerUploadText": {     "message": "Prescription uploaded, we might call within 24hrs & assist you if needed",     "icon": "https://static.lenskart.com/media/mobile/universal/assets/power-upload.svg"   },     "dontKnowPowerText": {       "message": "Since you don’t know your power, we will call within 24hrs & assist you",       "icon": "https://static.lenskart.com/media/mobile/universal/assets/dont-know-power1.svg"     }   }',
		SHIPPING_ADDRESS_CONFIG:
			'{"warning_enable": true,"alt_phone_number": true,"order_comments_enable": true,"comments_enable": true,"gift_wrap_enable": true}',
		FOOTER_DATA:
			'{"desktop":{"mainSection":[{"sectionTitle":"Services","sectionChildren":[{"name":"Store Locator","redirectUrl":"https://www.lenskart.com/optical-store","isNewTab":true},{"name":"Enter My Power","redirectUrl":"javascript:void(0);","isNewTab":true},{"name":"Buying Guide","redirectUrl":"https://www.lenskart.com/buying-guide","isNewTab":true},{"name":"Frame Size","redirectUrl":"https://www.lenskart.com/frame-size-guide","isNewTab":true}]},{"sectionTitle":"About Us","sectionChildren":[{"name":"We Are Hiring","redirectUrl":"https://careers.lenskart.com","isNewTab":true},{"name":"Refer & Earn","redirectUrl":"https://www.lenskart.com/paytm-referral","isNewTab":true},{"name":"About Us","redirectUrl":"https://www.lenskart.com/about-us.html","isNewTab":true},{"name":"Lenskart Coupons","redirectUrl":"https://www.lenskart.com/offers","isNewTab":true}]},{"sectionTitle":"Help","sectionChildren":[{"name":"FAQ\'s","redirectUrl":"https://www.lenskart.com/gfaq","isNewTab":true},{"name":"Site Map","redirectUrl":"https://www.lenskart.com/catalog/seo_sitemap/category","isNewTab":true}]}],"bottomRow":[{"name":"T & C","redirectUrl":"https://www.lenskart.com/terms-and-conditions","isNewTab":true},{"name":"Privacy","redirectUrl":"https://www.lenskart.com/privacy-policy","isNewTab":true},{"name":"Disclaimer","redirectUrl":"https://www.lenskart.com/disclaimer.html","isNewTab":true}],"socialLinks":[{"name":"facebook","redirectUrl":"https://www.facebook.com/Lenskartindia","isNewTab":true,"class":"fa fa-facebook fa-lg"},{"name":"instagram","redirectUrl":"https://instagram.com/lenskart/","isNewTab":true,"class":"fa fa-instagram fa-lg"},{"name":"twitter","redirectUrl":"https://twitter.com/Lenskart_com","isNewTab":true,"class":"fa fa-twitter fa-lg"}]},"mobile":{"moreAbout":[{"name":"Reviews","redirectUrl":"/reviews","isNewTab":false},{"name":"Refer And Earn","redirectUrl":"/connect-and-earn-lkcash","isNewTab":false},{"name":"Store Locator","redirectUrl":"https://stores.lenskart.com/","isNewTab":false},{"name":"About Us","redirectUrl":"/about-us.html","isNewTab":false},{"name":"FAQ","redirectUrl":"/gfaq","isNewTab":false},{"name":"T & C","redirectUrl":"/terms-and-conditions","isNewTab":false},{"name":"Be A Franchise","redirectUrl":"/franchise_enquiry","isNewTab":false},{"name":"Buying Guide","redirectUrl":"/buying-guide","isNewTab":false},{"name":"Download App","redirectUrl":"/mobile-app","isNewTab":false},{"name":"Frame Size","redirectUrl":"/frame-size","isNewTab":false},{"name":"Disclaimer","redirectUrl":"/disclaimer","isNewTab":false},{"name":"We Are Hiring","redirectUrl":"https://careers.lenskart.com/","isNewTab":false},{"name":"Privacy","redirectUrl":"/privacy-policy","isNewTab":false}],"socialLinks":[{"name":"facebook","redirectUrl":"//www.facebook.com/Lenskartindia","isNewTab":true,"class":"icon-facebook-squared"},{"name":"instagram","redirectUrl":"//www.instagram.com/lenskart/","isNewTab":true,"class":"icon-instagram"},{"name":"pinterest","redirectUrl":"//in.pinterest.com/lenskartindia/","isNewTab":true,"class":"icon-pinterest-circled"},{"name":"twitter","redirectUrl":"//twitter.com/Lenskart_com","isNewTab":true,"class":"icon-twitter"}]}}',
		ORDER_LISTING_PAGESIZE_MOBIL: 4,
		CONTACTS_OFFER:
			'{"buy_option_offer":"FREE 120 ML LENS SOLUTION ON PURCHASE OF TWO BOXES","first_solution_offer":"FREE WITH 2 BOXES","cart_offer":"FREE 120 ML LENS SOLUTION ON PURCHASE OF TWO BOXES"}',
		IPL_OFFER_CONFIG:
			'{ "AR": "OFF", "enable_3D": "ON", "unlockSuccessConfig": { "unlock_text": "Your offer is unlocked!", "try_glassess_text": "Now lets try out few glasses", "camera_permission_text": "(we will need camera permission for this)", "try_glassess_cta": "Try Glassess" }, "formConfig": { "alreadyAccountText": "Oops! You already have an account with us.", "showEmail": true, "showGender": true, "showName": true, "showPhone": true, "emailMandatory": true, "phoneMandatory": true, "genderMandatory": false, "nameMandatory": false }, "defaultCategory": { "offer_text": "First time only: Eyeglasses 2 for Rs 600 (MRP: Rs 900) | New Gold member exclusive", "cat_name": "Eyeglasses", "cat_big_banner": "https://static1.lenskart.com/media/desktop/img/Sep21/eye999.jpeg", "cat_banner": "https://static.lenskart.com/media/mobile/images/offer/eyeglasses.png", "cat_PLP_url": "https://www.lenskart.com/eyeglasses/promotions/eyeglasses-starting-rs-999.html", "cat_ar_url": "https://www.lenskart.com/premium-eyeglasses/AR" }, "offerCategory": [{ "offer_text": "First time only: Eyeglasses 2 for Rs 600 (MRP: Rs 900) | New Gold member exclusive", "cat_name": "Eyeglasses", "cat_big_banner": "https://static1.lenskart.com/media/desktop/img/Sep21/eye999.jpeg", "cat_banner": "https://static.lenskart.com/media/mobile/images/offer/eyeglasses.png", "cat_PLP_url": "https://www.lenskart.com/eyeglasses/promotions/eyeglasses-starting-rs-999.html", "cat_ar_url": "https://www.lenskart.com/premium-eyeglasses/ar-frames" }, { "offer_text": "Sunglasses 2 for Rs 600 (MRP: Rs 900) | New Gold member exclusive", "cat_name": "Sunglasses", "cat_big_banner": "https://static1.lenskart.com/media/desktop/img/Sep21/eye999.jpeg", "cat_banner": "https://static.lenskart.com/media/mobile/images/offer/sunglasses.png", "cat_PLP_url": "https://www.lenskart.com/sunglasses/promotions/mega-sunglasses-sale.html", "cat_ar_url": "https://www.lenskart.com/premium-sunglasses/AR" }]}',
		COLORED_LENS_IMAGES:
			'[{"colorId": 122368, "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-amazing-olive-color-contact-lens-1-lens-box_aqualens-amazing-olive-color-contact-lens-1-lens-box_122368_1_1.jpg", "name": "olive"}, {"colorId": 122367, "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//a/q/aqualens-fierce-green-color-contact-lens-1-lens-box_aqualens-fierce-green-color-contact-lens-1-lens-box_aqualens-fierce-green-color-contact-lens-1-lens-box_122367_desktop_img.jpg", name: "fierce green"}, {"colorId": 122369, "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-flirty-blue-color-contact-lens-(1-lens-per-box)_122369_10_03_2022.jpg", "name": "flirty blue"}, {"colorId": 122371, "imageUrl": "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//a/i/aquacolor-misty-white-color-contact-lens-(1-lens-per-box)_122371_10_03_2022.jpg", "name": "misty white"}]',
		BANNER_OFFER_CONFIG:
			'{"plp_banners":[{"category":"/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html","desktop":[{"index":3,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":6,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":9,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"}],"mobile":[{"index":3,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":6,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":9,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"}]},{"category":"/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html","desktop":[{"index":3,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":6,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":9,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"}],"mobile":[{"index":3,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":6,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"},{"index":9,"banner_url":"https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg","banner_url_link":"https://www.lenskart.com"}]}]}',
		BOGO_BANNER_DETAILS:
			'{"show_bogo_banner":"ON","bogo_banner_image":"https://static5.lenskart.com/images/cust_mailer/22-Mar-19/mblu1.jpg","GET_BOGO_DETAILS":{"Vincent Chase":[{"img":"https://static1.lenskart.com/media/desktop/img/4-July-19/carteye.jpg","url":"/eyeglasses/promotions/vc-jj-eyeglasses.html"},{"img":"https://static5.lenskart.com/images/cust_mailer/PDP3.jpg","url":"/sunglasses/promotions/buy-1-get-1.html"}],"Vincent Chase Polarized":[{"img":"https://static1.lenskart.com/media/desktop/img/eyebanner_app_cart_18042019_finalorange.jpg","url":"/eyeglasses/promotions/vc-jj-eyeglasses.html"},{"img":"https://static1.lenskart.com/media/desktop/img/sunbanner_app_cart_18042019_finalorange.jpg","url":"/sunglasses/promotions/buy-1-get-1.html"}],"John Jacobs":[{"img":"https://static1.lenskart.com/media/desktop/img/eyebanner_app_cart_18042019_finalorange.jpg","url":"/eyeglasses/brands/john-jacobs-eyeglasses.html"},{"img":"https://static1.lenskart.com/media/desktop/img/sunbanner_app_cart_18042019_finalorange.jpg","url":"/sunglasses/brands/john-jacobs.html"}]}}',
		LISTING_PAGE_SIZE: '15',
		BIN_CONFIG:
			'{"applyOffer":"ON","tabs":{"step1":false,"step2":true,"step3":true},"bestOffer":"Checking for best offers applicable on your card","offerAvailed":"You have the best offer already applied on your Cart","timer":"3","offerBanner":"https://static1.lenskart.com/media/mobile/images/avail-offers.png"}',
		WHITELISTED_URL_FOR_SEO:
			'["/eyeglasses/brands/vintage.html","/sunglasses/brands/carrera-sunglasses/ca-6000-r.html","/eyeglasses/brands/carrera-eyeglasses/rimless.html","/eyeglasses/brands/boss-orange-eyeglasses/bo-0068.html","/sunglasses/brands/carrera-sunglasses/carrera-6000-mt.html","/sunglasses/brands/ray-ban-sunglasses/rb8310.html","/eyewear/brands/dakota-smith.html","/sunglasses/brands/ray-ban-sunglasses/rb4210.html","/spectacles-718/brands/excellent.html","/sunglasses/brands/ray-ban-sunglasses/rb3523.html","/eyeglasses/brands/carrera-eyeglasses/ca5524.html","/sunglasses/brands/ray-ban-sunglasses/rb4168.html","/sunglasses/brands/ray-ban-sunglasses/rb8041.html","/sunglasses/brands/ray-ban-sunglasses/rb4208.html","/eyeglasses/brands/john-jacobs-eyeglasses/bull-horn-collection.html","/sunglasses/brands/ray-ban-sunglasses/rb8305.html","/eyeglasses/brands/carrera-eyeglasses/ca5504-bxh.html","/sunglasses/brands/ray-ban-sunglasses/rb8052.html","/sunglasses/brands/ray-ban-sunglasses/rb8055.html","/eyeglasses/brands/john-jacobs-eyeglasses/classic-wood.html","/eyeglasses/brands/john-jacobs-eyeglasses/madison-avenue.html","/eyeglasses/brands/vincent-chase-eyeglasses/evil-eye.html","/sunglasses/brands/john-jacobs/madison-avenue.html","/sunglasses/brands/ray-ban-sunglasses/rb4176.html","/sunglasses/brands/vogue-sunglasses/vo2729.html","/eyeglasses/brands/john-jacobs-eyeglasses/shibuya-crossing.html","/sunglasses/brands/ray-ban-sunglasses/rb7060.html","/sunglasses/brands/ray-ban-sunglasses/rb4151.html","/sunglasses/brands/ray-ban-sunglasses/rb4196.html","/sunglasses/brands/ray-ban-sunglasses/women.html","/eyewear/brands/luxury-brands.html","/eyewear/brands/flying-machine.html","/sunglasses/brands/ray-ban-sunglasses/rb3471.html","/eyeglasses/brands/boss-orange-eyeglasses/bo-0054.html","/eyeglasses/brands/boss-orange-eyeglasses/bo-0110.html","/sunglasses/brands/carrera-sunglasses/carrera-59.html","/eyeglasses/brands/boss-orange-eyeglasses/bo-0111.html","/sunglasses/brands/ray-ban-sunglasses/rb3530.html","/sunglasses/brands/ray-ban-sunglasses/rj9057s.html","/eyeglasses/brands/vincent-chase-eyeglasses/le-cirque-collection.html","/sunglasses/brands/carrera-sunglasses/carrera-57.html","/sunglasses/brands/ray-ban-sunglasses/rb8054.html","/eyeglasses/brands/carrera-eyeglasses/ca7580.html","/eyeglasses/brands/vogue-eyeglasses/vo3953.html","/eyewear/brands/mtv.html","/brands/boss-orange.html","/eyewear/brands/mara-boss.html","/black-half-rim-rectangle-medium-size-52-john-jacobs-shibuya-crossing-jj-4424-c1-eyeglasses.html","/black-full-rim-rectangle-medium-size-52-john-jacobs-impressionist-jj-2185-c7-eyeglasses.html","/black-wooden-full-rim-wayfarer-medium-size-54-john-jacobs-madison-avenue-jj-k-8055-c6-eyeglasses.html","/john-jacobs-jj-4345-purple-eyeglasses.html","/black-rimless-rectangle-medium-size-54-john-jacobs-supreme-steel-jj-1342-n-1013-eyeglasses.html","/matte-black-red-full-rim-wayfarer-medium-size-55-john-jacobs-the-bold-series-jj4359-c2-eyeglasses.html","/black-full-rim-rectangle-medium-size-52-john-jacobs-bond-street-jj-e10472-c1-eyeglasses.html","/silver-rimless-rectangle-medium-size-54-john-jacobs-khardung-la-jj-1343-n-1010-eyeglasses.html","/john-jacobs-slim-jj-4349-matte-purple-m2m2eo-eyeglasses.html","/john-jacobs-slim-jj-4349-maroon-s2s2eo-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-54-john-jacobs-khardung-la-jj-1343-n-1014-eyeglasses.html","/john-jacobs-jj-4346-black-red-eyeglasses.html","/john-jacobs-jj-4345-silver-yellow-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-shibuya-crossing-jj-e10365-c5-eyeglasses.html","/tortoise-sea-green-full-rim-cat-eye-medium-size-53-john-jacobs-kat-eye-jj-e10473-c3-eyeglasses.html","/john-jacobs-jj-4349-gunmetal-blue-eyeglasses.html","/tortoise-full-rim-round-medium-size-51-john-jacobs-abbey-road-jj4416-c6-eyeglasses.html","/john-jacobs-8825-tortoise-brown-c1-eyeglasses.html","/gunmetal-black-rimless-rectangle-large-size-56-john-jacobs-shibuya-crossing-jj-p-14-8735-c011-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-shibuya-crossing-jj-e10365-c3-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-shibuya-crossing-jj-4427-c1-eyeglasses.html","/matte-black-full-rim-cat-eye-medium-size-53-john-jacobs-kat-eye-jj-4400-c3-eyeglasses.html","/matte-black-brown-half-rim-rectangle-medium-size-55-john-jacobs-code-black-jj-4447-c2-eyeglasses.html","/john-jacobs-jj-1346-blue-2020-wayfarer-eyeglasses.html","/black-rimless-rectangle-large-size-56-john-jacobs-shibuya-crossing-jj-p-14-8735-c011-eyeglasses.html","/matte-black-brown-wooden-full-rim-wayfarer-medium-size-54-john-jacobs-madison-avenue-jj-k-8055-c6a-eyeglasses.html","/black-golden-full-rim-cat-eye-medium-size-52-john-jacobs-abbey-road-jj-8788-c8-eyeglasses.html","/john-jacobs-jj-4345-pink-eyeglasses.html","/half-rim-rectangle-medium-size-52-john-jacobs-titanium-jj-4435-c3-eyeglasses.html","/john-jacobs-jj-1317-black-men-s-eyeglasses.html","/grey-black-tortoise-full-rim-cat-eye-medium-size-52-john-jacobs-kat-eye-jj-e10475-c3-eyeglasses.html","/black-wooden-full-rim-wayfarer-small-size-49-john-jacobs-madison-avenue-jj-4412-c5-eyeglasses.html","/golden-rimless-rectangle-small-size-49-john-jacobs-titanium-jj-1405-c4-eyeglasses.html","/matte-gunmetal-blue-half-rim-rectangle-medium-size-55-john-jacobs-titanium-jj-4447-c4-eyeglasses.html","/eyeglasses/brands/john-jacobs-eyeglasses/bull-horn-collection.html","/matte-black-rimless-rectangle-medium-size-54-john-jacobs-khardung-la-jj-1342-n-1011-eyeglasses.html","/john-jacobs-jj-1353-matte-black-red-vovoeo-wayfarer-eyeglasses.html","/john-jacobs-jj-4346-matte-brown-c2c2eo-eyeglasses.html","/matte-purple-full-rim-cat-eye-medium-size-50-john-jacobs-abbey-road-jj-v9143-c5-eyeglasses.html","/blue-full-rim-rectangle-medium-size-55-john-jacobs-slim-jj-4346-c9-eyeglasses.html","/matte-grey-full-rim-rectangle-large-size-56-john-jacobs-slim-jj-4463-c4-eyeglasses.html","/john-jacobs-jj-1348-black-grey-design-1027-wayfarer-eyeglasses.html","/gunmetal-half-rim-rectangle-medium-size-53-john-jacobs-titanium-jj-e10019-c2-eyeglasses.html","/john-jacobs-jj-1353-matte-black-blue-uouoeo-wayfarer-eyeglasses.html","/john-jacobs-jj-1357-black-1010eo-eyeglasses.html","/john-jacobs-jj-4345-matte-blue-green-i2o2eo-eyeglasses.html","/black-half-rim-rectangle-medium-size-53-john-jacobs-titanium-jj-4432-c2-eyeglasses.html","/black-full-rim-wayfarer-small-size-49-john-jacobs-madison-avenue-jj-4412-c6-eyeglasses.html","/brown-tortoise-full-rim-cat-eye-medium-size-53-john-jacobs-kat-eye-jj-e10474-c3-eyeglasses.html","/black-rimless-rectangle-medium-size-54-john-jacobs-khardung-la-jj-1342-n-1011-eyeglasses.html","/indigo-blue-full-rim-cat-eye-medium-size-52-john-jacobs-kat-eye-jj-e10475-c4-eyeglasses.html","/john-jacobs-jj-1041-gunmetal-5050-eyeglasses.html","/golden-half-rim-rectangle-medium-size-52-john-jacobs-shibuya-crossing-jj-4424-c4-eyeglasses.html","/matte-blue-full-rim-wayfarer-medium-size-54-john-jacobs-slim-jj-4355-c2-eyeglasses.html","/matte-grey-transparent-full-rim-wayfarer-medium-size-54-john-jacobs-slim-jj-4465-c4-eyeglasses.html","/john-jacobs-jj-4346-matte-black-blue-v1x1eo-eyeglasses.html","/john-jacobs-jj-1357-matte-black-1111eo-eyeglasses.html","/black-blue-full-rim-rectangle-medium-size-54-john-jacobs-shibuya-crossing-jj-e10106-c1-eyeglasses.html","/matte-gunmetal-half-rim-rectangle-medium-size-54-john-jacobs-shibuya-crossing-jj-0040-do20-eyeglasses.html","/gunmetal-half-rim-rectangle-medium-size-52-john-jacobs-shibuya-crossing-jj-4424-c3-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-shibuya-crossing-jj-e10365-c2-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-51-john-jacobs-khardung-la-jj-e10369-c4-eyeglasses.html","/john-jacobs-jj-s10845-c2-sunglasses.html","/john-jacobs-jj-s10845-c3-sunglasses.html","/black-full-rim-cat-eye-medium-size-53-john-jacobs-kat-eye-jj-e10474-c1-eyeglasses.html","/polish-black-rimless-rectangle-medium-size-54-john-jacobs-supreme-steel-jj-1342-n-1012-eyeglasses.html","/john-jacobs-jj-4346-blue-pink-eyeglasses.html","/black-brown-full-rim-rectangle-medium-size-52-john-jacobs-bond-street-jj-e10472-c4-eyeglasses.html","/john-jacobs-jj-4345-matte-blue-i2i2eo-eyeglasses.html","/blue-full-rim-rectangle-medium-size-53-john-jacobs-bond-street-jj-e10015-c3-eyeglasses.html","/tortoise-brown-wooden-full-rim-wayfarer-medium-size-54-john-jacobs-madison-avenue-jj-k-8055-c135-eyeglasses.html","/black-half-rim-rectangle-medium-size-52-john-jacobs-shibuya-crossing-jj-4424-c2-eyeglasses.html","/matte-black-rimless-rectangle-medium-size-54-john-jacobs-khardung-la-jj-1343-n-1012-eyeglasses.html","/john-jacobs-jj-1353-maroon-1043-cat-eye-women-s-eyeglasses.html","/matte-purple-transparent-full-rim-wayfarer-medium-size-53-john-jacobs-slim-jj-4464-c2-eyeglasses.html","/matte-black-full-rim-cat-eye-medium-size-54-john-jacobs-slim-jj-4356-c1-eyeglasses.html","/brown-tortoise-full-rim-cat-eye-medium-size-53-john-jacobs-kat-eye-jj-4400-c5-eyeglasses.html","/eyeglasses/brands/john-jacobs-eyeglasses/classic-wood.html","/half-rim-rectangle-medium-size-52-john-jacobs-titanium-jj-e10018-c3-eyeglasses.html","/john-jacobs-jj-1353-matte-black-green-i1i1eo-wayfarer-eyeglasses.html","/eyeglasses/brands/john-jacobs-eyeglasses/madison-avenue.html","/sunglasses/brands/john-jacobs/madison-avenue.html","/john-jacobs-jj-1351-black-red-1030-wayfarer-eyeglasses.html","/silver-rimless-rectangle-medium-size-53-john-jacobs-shibuya-crossing-jj-e10365-c6-eyeglasses.html","/gunmetal-red-rimless-rectangle-large-size-56-john-jacobs-shibuya-crossing-jj-p-14-8735-c004-eyeglasses.html","/eyeglasses/brands/john-jacobs-eyeglasses/shibuya-crossing.html","/matte-gunmetal-blue-full-rim-rectangle-medium-size-53-john-jacobs-titanium-jj-4445-c5-eyeglasses.html","/john-jacobs-jj-1307-black-1010-eyeglasses.html","/matte-purple-full-rim-cat-eye-medium-size-54-john-jacobs-slim-jj4356-c5-eyeglasses.html","/blue-purple-full-rim-round-medium-size-51-john-jacobs-abbey-road-jj4416-c3-eyeglasses.html","/blue-transparent-full-rim-rectangle-medium-size-54-john-jacobs-tr-flex-jj-1448-c6-eyeglasses.html","/gunmetal-black-rimless-rectangle-large-size-56-john-jacobs-fiber-steel-jj-p-14-8735-c009-eyeglasses.html","/black-full-rim-cat-eye-medium-size-52-john-jacobs-kat-eye-jj-e10475-c1-eyeglasses.html","/brown-blue-full-rim-rectangle-medium-size-54-john-jacobs-jj-n-1017-c6-eyeglasses.html","/matte-black-full-rim-rectangle-medium-size-53-john-jacobs-studio-moda-jj-4408-c2-eyeglasses.html","/john-jacobs-p-12-1326-silver-c005-eyeglasses.html","/black-maroon-full-rim-cat-eye-medium-size-52-john-jacobs-kat-eye-jj-4409-c1-eyeglasses.html","/maroon-blue-black-full-rim-rectangle-medium-size-52-john-jacobs-jj-n-1002-c4-eyeglasses.html","/matte-black-red-full-rim-rectangle-medium-size-53-john-jacobs-jj-0014-eyeglasses.html","/john-jacobs-slim-jj-4349-matte-green-o2o2eo-eyeglasses.html","/john-jacobs-jj-1312-black-maroon-c3-eyeglasses.html","/maroon-full-rim-rectangle-large-size-56-john-jacobs-slim-jj-1149-c4-eyeglasses.html","/john-jacobs-jj-1358-matte-black-1111eo-eyeglasses.html","/john-jacobs-jj-4348-black-v1v1eo-wayfarer-eyeglasses.html","/john-jacobs-8845-tortoise-c3-wayfarer-eyeglasses.html","/gunmetal-black-rimless-rectangle-large-size-56-john-jacobs-shibuya-crossing-jj-p-14-8735-c006-eyeglasses.html","/matte-brown-yellow-full-rim-rectangle-large-size-56-john-jacobs-titanium-jj-jj6006-titanium-eyeglasses.html","/john-jacobs-jj-6010-silver-aoaoeo-eyeglasses.html","/john-jacobs-1149-matte-grey-c2-eyeglasses.html","/john-jacobs-jj-1358-black-1010eo-eyeglasses.html","/matte-gunmatel-black-half-rim-rectangle-medium-size-55-john-jacobs-shibuya-crossing-jj-0034-do10-eyeglasses.html","/john-jacobs-jj-1360-black-1010eo-wayfarer-eyeglasses.html","/golden-full-rim-round-medium-size-46-john-jacobs-jj-870-eyeglasses.html","/john-jacobs-jj-4352-matte-gunmetal-light-green-eyeglasses.html","/matte-black-full-rim-rectangle-medium-size-53-john-jacobs-jj-0015-eyeglasses.html","/john-jacobs-jj-1329-black-pink-brown-eyeglasses.html","/john-jacobs-jj-4345-matte-black-grey-v1w1eo-eyeglasses.html","/john-jacobs-jj-1355-matte-black-1110eo-wayfarer-eyeglasses.html","/john-jacobs-jj-1360-matte-black-1111eo-wayfarer-eyeglasses.html","/golden-black-rimless-rectangle-medium-size-53-john-jacobs-supreme-steel-jj-0033-9010-eyeglasses.html","/john-jacobs-jj-1350-tortoise-coco-wayfarer-eyeglasses.html","/matte-black-grey-half-rim-rectangle-medium-size-55-john-jacobs-shibuya-crossing-jj-0034-1050-eyeglasses.html","/john-jacobs-jj-4344-black-purple-eyeglasses.html","/john-jacobs-jj-1329-tortoise-eyeglasses.html","/grey-transparent-orange-full-rim-cat-eye-medium-size-52-john-jacobs-kat-eye-jj-4409-c3-eyeglasses.html","/john-jacobs-jj-1309-black-c1-eyeglasses.html","/golden-brown-rimless-rectangle-medium-size-54-john-jacobs-shibuya-crossing-jj-0024-c3-eyeglasses.html","/blue-brown-wooden-full-rim-rectangle-medium-size-54-john-jacobs-madison-avenue-jj-k-8009-c315-eyeglasses.html","/john-jacobs-p-307-blk-white-line-c04-eyeglasses.html","/brown-rimless-rectangle-medium-size-54-john-jacobs-titanium-n-1122-c15-eyeglasses.html","/grey-half-rim-rectangle-medium-size-52-john-jacobs-titanium-jj-4435-c2-eyeglasses.html","/john-jacobs-jj-4345-matte-black-sky-blue-v1c6-eyeglasses.html","/matte-black-grey-full-rim-rectangle-medium-size-52-john-jacobs-jj-u-8023-c-09-eyeglasses.html","/blue-rimless-rectangle-medium-size-54-john-jacobs-titanium-n-1122-c8-eyeglasses.html","/black-grey-wooden-gunmetal-full-rim-rectangle-large-size-57-john-jacobs-the-royal-mile-wd0157-3-eyeglasses.html","/brown-wooden-full-rim-rectangle-medium-size-54-john-jacobs-studio-moda-jj-6022-c2-eyeglasses.html","/full-rim-round-small-size-46-john-jacobs-jj-870-eyeglasses.html","/matte-black-wooden-full-rim-wayfarer-small-size-49-john-jacobs-madison-avenue-jj-k-8001-c6a-eyeglasses.html","/golden-brown-full-rim-round-small-size-46-john-jacobs-abbey-road-jj-k-9022-c4-eyeglasses.html","/silver-matte-black-full-rim-wayfarer-medium-size-50-john-jacobs-abbey-road-jj-k9079-c2-eyeglasses.html","/matte-black-full-rim-rectangle-medium-size-52-john-jacobs-jj-2109-c99-eyeglasses.html","/matte-black-tortoise-full-rim-wayfarer-medium-size-54-john-jacobs-slim-jj-4355-c6-eyeglasses.html","/black-full-rim-rectangle-medium-size-54-john-jacobs-titanium-jj-e10197-c2-eyeglasses.html","/brown-wooden-gunmetal-full-rim-rectangle-large-size-57-john-jacobs-the-royal-mile-wd0157-2-eyeglasses.html","/matte-black-red-full-rim-rectangle-medium-size-54-john-jacobs-the-bold-series-jj4358-c3-eyeglasses.html","/black-rimless-rectangle-medium-size-54-john-jacobs-titanium-n-1122-c7-eyeglasses.html","/black-rimless-rectangle-medium-size-50-john-jacobs-titanium-jj-s-3184-c7-eyeglasses.html","/black-wooden-full-rim-wayfarer-medium-size-51-john-jacobs-madison-avenue-jj-k-8072-c6-eyeglasses.html","/brown-rimless-rectangle-medium-size-52-john-jacobs-titanium-bn-367-c15-eyeglasses.html","/gunmetal-black-full-rim-rectangle-medium-size-53-john-jacobs-abbey-road-jj-8991-c4-eyeglasses.html","/blue-full-rim-rectangle-medium-size-53-john-jacobs-jj-al-3002-c3-eyeglasses.html","/john-jacobs-k-88006-tortoise-brown-wooden-c135-eyeglasses.html","/matte-black-sky-blue-full-rim-rectangle-medium-size-52-john-jacobs-jj-0011-eyeglasses.html","/john-jacobs-jj-1319-tortoise-eyeglasses.html","/john-jacobs-jj-4344-blue-eyeglasses.html","/john-jacobs-8876-black-brown-c2-eyeglasses.html","/john-jacobs-jj-1346-black-blue-1020-wayfarer-eyeglasses.html","/john-jacobs-jj-1347-black-brown-design-1025-wayfarer-eyeglasses.html","/dark-brown-wooden-full-rim-round-small-size-49-john-jacobs-the-royal-mile-oh1094w-15-eyeglasses.html","/john-jacobs-jj-1340-copper-brown-1010-eyeglasses.html","/brown-black-wooden-full-rim-rectangle-medium-size-55-john-jacobs-the-royal-mile-oh1129w-24-eyeglasses.html","/john-jacobs-jj-1344-black-white-1060-eyeglasses.html","/matte-black-yellow-full-rim-rectangle-medium-size-54-john-jacobs-jj-n-1005-c4-eyeglasses.html","/black-wooden-full-rim-rectangle-medium-size-54-john-jacobs-madison-avenue-jj-k-8090-c6a-eyeglasses.html","/gunmetal-black-rimless-rectangle-medium-size-52-john-jacobs-titanium-jj-ch-14-7575-c4-eyeglasses.html","/purple-blue-grey-full-rim-rectangle-medium-size-54-john-jacobs-jj-n-1017-c5-eyeglasses.html","/john-jacobs-jj-1353-black-white-1060-cat-eye-women-s-eyeglasses.html","/matte-black-orange-full-rim-rectangle-medium-size-54-john-jacobs-studio-moda-jj-4406-c1-eyeglasses.html","/blue-rimless-rectangle-medium-size-53-john-jacobs-titanium-jj-n1122-006f-eyeglasses.html","/john-jacobs-jj-6007-golden-9090eo-eyeglasses.html","/black-rimless-rectangle-medium-size-53-john-jacobs-titanium-jj-p-14-3225-c002b-eyeglasses.html","/john-jacobs-slim-jj-4350-matte-green-o2o2eo-wayfarer-women-s-eyeglasses.html","/gunmetal-black-full-rim-round-small-size-45-john-jacobs-abbey-road-jj-5028-2000-eyeglasses.html","/matte-black-full-rim-rectangle-medium-size-52-john-jacobs-jj-u-8057-col-32-eyeglasses.html","/john-jacobs-jj-1350-black-white-1060-wayfarer-eyeglasses.html","/john-jacobs-ultem-n-1008-matte-black-white-c3-eyeglasses.html","/john-jacobs-jj-6005-brown-popoeo-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-titanium-n1122-003c-eyeglasses.html","/matte-black-green-full-rim-rectangle-medium-size-54-john-jacobs-jj-0009-xxxx-eyeglasses.html","/john-jacobs-jj-1308-black-tortoise-c4-wayfarer-eyeglasses.html","/john-jacobs-8861-black-c1-eyeglasses.html","/john-jacobs-jj-0015-brown-maroon-eyeglasses.html","/golden-rimless-rectangle-medium-size-52-john-jacobs-titanium-jj-p-14-1259-c001a-eyeglasses.html","/john-jacobs-jj-1337-black-tortoise-coco-men-s-eyeglasses.html","/matte-brown-design-wooden-full-rim-rectangle-medium-size-55-john-jacobs-the-royal-mile-wd0133-32-eyeglasses.html","/brown-wooden-full-rim-round-small-size-49-john-jacobs-the-royal-mile-oh1094w-12-eyeglasses.html","/dark-brown-wooden-full-rim-rectangle-medium-size-55-john-jacobs-the-royal-mile-oh1129w-26-eyeglasses.html","/blue-rimless-rectangle-medium-size-53-john-jacobs-titanium-jj-0019-titanium-2020-eyeglasses.html","/matte-black-yellow-full-rim-rectangle-medium-size-53-john-jacobs-jj-0015-eyeglasses.html","/john-jacobs-jj-1305-maroon-brown-4040-eyeglasses.html","/john-jacobs-jj-1318-black-blue-grey-men-s-eyeglasses.html","/john-jacobs-110669-dark-maroon-design-c149-eyeglasses.html","/matte-black-grey-full-rim-rectangle-medium-size-54-john-jacobs-jj-n-1008-c8-eyeglasses.html","/gunmetal-black-full-rim-rectangle-medium-size-53-john-jacobs-abbey-road-jj-8991-c3-eyeglasses.html","/john-jacobs-p-12-1326-brown-golden-c004-eyeglasses.html","/brown-golden-full-rim-rectangle-medium-size-53-john-jacobs-bond-street-jj-e10016-c4-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-53-john-jacobs-titanium-jj-n-1122-eyeglasses.html","/golden-tortoise-full-rim-wayfarer-small-size-45-john-jacobs-abbey-road-jj-k9026-c3-eyeglasses.html","/black-wooden-full-rim-wayfarer-small-size-49-john-jacobs-madison-avenue-jj-k-8001-c6-eyeglasses.html","/brown-golden-full-rim-cat-eye-medium-size-52-john-jacobs-abbey-road-jj-8788-c4-eyeglasses.html","/tortoise-blue-full-rim-rectangle-medium-size-52-john-jacobs-jj-n-1021-c3-eyeglasses.html","/matte-black-light-green-half-rim-rectangle-medium-size-54-john-jacobs-titanium-jj-jj6005-titanium-eyeglasses.html","/purple-black-blue-full-rim-rectangle-medium-size-55-john-jacobs-jj-n-1013-c4-eyeglasses.html","/matte-black-red-full-rim-cat-eye-medium-size-54-john-jacobs-slim-jj4356-c2-eyeglasses.html","/john-jacobs-jj-1326-grey-eyeglasses.html","/brown-black-cream-full-rim-round-medium-size-50-john-jacobs-abbey-road-jj-pa875-c5-eyeglasses.html","/full-rim-rectangle-medium-size-53-john-jacobs-studio-moda-jj-4408-c4-eyeglasses.html","/black-transparent-full-rim-oval-medium-size-53-john-jacobs-kat-eye-jj-2179-c12-eyeglasses.html","/john-jacobs-1056-black-red-c5-eyeglasses.html","/black-half-rim-rectangle-medium-size-55-john-jacobs-titanium-jj-e10195-c1-eyeglasses.html","/john-jacobs-jj-1327-brown-cream-black-design-eyeglasses.html","/john-jacobs-ultem-n-1024-matte-black-sky-blue-c4-eyeglasses.html","/john-jacobs-8845-black-c1-wayfarer-eyeglasses.html","/john-jacobs-jj-6008-matte-black-sky-blue-1111eo-eyeglasses.html","/black-wooden-full-rim-round-medium-size-52-john-jacobs-madison-avenue-jj-k9090-c2-eyeglasses.html","/black-brown-wooden-full-rim-rectangle-medium-size-53-john-jacobs-madison-avenue-jj-k-8092-c6-eyeglasses.html","/john-jacobs-jj-4343-matte-black-eyeglasses.html","/blue-full-rim-rectangle-medium-size-52-john-jacobs-jj-n-1009-c4-eyeglasses.html","/purple-silver-full-rim-cat-eye-medium-size-54-john-jacobs-abbey-road-jj-6708-c8-eyeglasses.html","/john-jacobs-jj-1343-blue-1020-eyeglasses.html","/gunmetal-rimless-rectangle-medium-size-54-john-jacobs-titanium-n-1122-c2-eyeglasses.html","/john-jacobs-8845-black-c1-eyeglasses.html","/silver-black-full-rim-wayfarer-medium-size-50-john-jacobs-abbey-road-jj-k9079-c1-eyeglasses.html","/silver-white-rimless-rectangle-medium-size-52-john-jacobs-titanium-jj-n1172-c005-eyeglasses.html","/tortoise-full-rim-rectangle-medium-size-53-john-jacobs-studio-moda-jj-4408-c3-eyeglasses.html","/matte-black-sky-blue-blue-full-rim-rectangle-medium-size-54-john-jacobs-jj-0013-eyeglasses.html"]',
		SOCIAL_LOGIN:
			'[{"enable": true, "link": "https://www.facebook.com/Lenskartindia", "Socialnetwork": "facebook", "logo": "fa fa-facebook fa-lg"}, {"enable": true, "link": "https://instagram.com/lenskart/", "Socialnetwork": "instagram", "logo": "fa fa-instagram fa-lg"}, {"enable": true, "link": "https://twitter.com/Lenskart_com", "Socialnetwork": "twitter", "logo": "fa fa-twitter fa-lg"}, {"enable": true, "link": "https://in.pinterest.com/lenskartindia/", "Socialnetwork": "pinterest", "logo": "fa fa-pinterest fa-lg"}]',
		PRODUCTS_GST:
			'{"eyeframe":"12","sunglasses":"18","contact_lens":"0","contact_lens_solution":"0","non_power_reading":"12","accessories_revenue":"18","loyalty_services":"18","sunglasses_Vincent Chase Online":"18","sunglasses_John Jacobs JJ":"18","sunglasses_Fallon Colby":"18","sunglasses_Mask":"18","sunglasses_Lenskart TOI Special":"0","eyeframe_Vincent Chase Staff Pick":"0","eyeframe_Ray-Ban":"0"}',
		lenskartGoldBanner:
			'{"showLenskartExclOffer":false,"showLenskartGoldBanner":true,"lenskartExclOfferBanner":"https://static.lenskart.com/media/mobile/images/banner-pair-choice.png","lenskartGoldImg":"https://static1.lenskart.com/media/desktop/img/4-July-19/pdp-offer.jpg","headerOfferImg":"https://static5.lenskart.com/images/cust_mailer/11thmay2019/Gold_Hero_Image.jpg","contentOfferImg":"https://static1.lenskart.com/media/desktop/img/4-July-19/gold-bottom.jpg","topCtaText":"Add Membership for Rs.600","bottomCtaText":"I dont want Membership","offerInfo":"","offerAds":"","offerNote":"2nd Pair to be bought in same transaction. <br/> Not applicable on Ray-Ban, Oakley, Vogue, Carrera, etc."}',
		PLP_COLUMN: '3',
		LENSKART_PROMISE_ICONS:
			'[{ "icon": "https://static.lenskart.com/media/mobile/universal/assets/return.svg", "text1": "14 Days", "text2": "Free Return", "text3": "" }, { "icon": "https://static.lenskart.com/media/mobile/universal/assets/year_extended.svg", "text1": "1 Year", "text2": "Warranty", "text3": "" }, { "icon": "https://static.lenskart.com/media/mobile/universal/assets/free_shipping.svg", "text1": "Free Shipping", "text2": "In India", "text3": "" }, { "icon": "https://static.lenskart.com/media/desktop/img/site-images/ic_exchange.svg", "text1": "Exchange At", "text2": "Our Stores", "text3": "" }]',
		SECURE_CARD_CHECKBOX: '{"enable": true}',
		EXCHANGE_CONFIG:
			'{"EXCHANGE_FREE_TEXT":"FREE FOR EXCHANGE", "EXCHANGE_TEXT": "EXCHANGE PRICE"}',
		MISSCALL_CONFIG:
			'{"default":{"title":"We will call you back in 15 mins","subTextHtml":"Give a miss call to <a href=\\"tel:18001020767\\" class=\\"text-topaz\\">18001020767 </a> by tapping below,<br/>we will call you back in 15 mins and assist you<br/>in placing order","enabled”:false,”ctaText":"GIVE MISSED CALL","callbackPhoneNumber":"18001020767"},"contact_lens":{"title":"We will call you back in 15 mins","subTextHtml":"Give a miss call to <a href=\\"tel:8470007367\\" class=\\"text-topaz\\">8470007367</a> by tapping below,<br/>we will call you back in 15 mins and assist you<br/>in placing order","enabled”:false,”ctaText":"GIVE MISSED CALL","callbackPhoneNumber":"8470007367"}}',
		DEFAULT_PRODUCT_HELMET_DATA: {
			description: 'Good product',
			aggregateRating: {
				'@type': 'AggregateRating',
				ratingCount: 1,
				ratingValue: '4',
				itemReviewed: {
					name: 'Anonymous',
					'@type': 'Organization',
				},
				reviewCount: 1,
			},
			sku: 'Lenskart',
			image: 'https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg',
			review: {
				author: {
					'@type': 'Person',
					name: 'Anonymous',
				},
				reviewRating: {
					'@type': 'Rating',
					ratingValue: '4',
					bestRating: '5',
				},
				'@type': 'Review',
			},
			mpn: '999999',
			brandName: 'Lenskart',
			url: 'https://www.lenskart.com',
		},
		POLICY_IMAGE:
			'{"image":"https://static1.lenskart.com/media/desktop/img/all-assurance-offering.png"}',
		SUCCESS_IMAGE:
			'{"imageUrl": "https://static.lenskart.com/media/wysiwyg/sccess/sccess-logo.jpg"}',
		ENABLE_FRESHWORKS: 'OFF',
		SL_EXCEEDED_MESSAGE: 'You have exceeded limit of saving products: 50',
		EMPTY_CART_LINKS:
			'[{"name": "Eyeglasses", "link": "/eyeglasses.html"},{"name": "Sunglasses", "link": "/sunglasses.html"}, {"name": "Contact Lenses", "link": "/contact-lenses.html"}]',
		ENABLE_FRESHWORKS_DESKTOP: 'OFF',
		ORDER_LISTING_PAGESIZE_MOBILE: 4,
		CART_UPI_CONFIG:
			'{ "responseRedirection": "5000", "BottomSheetErrMsgDelay": "2000", "timerLoaderDelay": "300", "upiPaymentStatusRequest": "5000", "INTENT": { "android": "ON", "ios": "OFF" }, "COLLECT": { "android": "ON", "ios": "ON" }, "gPay": { "android": "ON", "ios": "ON" } }',
		HOME_EYE_CHECKUP_AND_MANUALLY: true,
		BUY_ON_CALL_WIDGET:
			'{"enable_new_flow":true,"buyonchat":true,"buyonchat_link":"https://api.whatsapp.com/send?phone=918929853854&text=Hi Lenskart, help me get started!","title":"Buy on Chat","pdpbuyonchat_text":"Buy on Chat","pdpbuyonchat_icon":"https://static1.lenskart.com/media/mobile/images/small-whatsapp.png","description":"Tap to whatsapp our eyewear expert","icon":"https://static1.lenskart.com/media/mobile/images/whatsapp-gogreen.png","floating_image":"https://static1.lenskart.com/media/desktop/img/buyonchat1.png","enabled":true,"eyeglasses":{"tel":"18001020767"},"sunglasses":{"tel":"18001020767"},"contact_lens":{"tel":"8470007367"},"cta":{"isShown":true,"text":"Help?","icon":"https://static.lenskart.com/media/desktop/img/09-jan-20/call_icon.png","iconGreen":"https://static.lenskart.com/media/mobile/images/call_icon_green.png","whatsappIcon":"https://static1.lenskart.com/media/mobile/images/whatsapp-smallicon.png","whatsappIconGreen":"https://static.lenskart.com/media/mobile/images/whatsapp-smallicon-green.png" }}',
		HOST_COUNTRY: false,
		LK_CONFIG_MESSAGE: 'Use LKCash on your order to get instant discount',
		TAX_HIDE: false,
		SHOW_MISSED_CALL_NUMBER: true,
		SHOW_HIDE_LENSKART_GOLDBANNER:
			'{"showLenskartGoldBanner":"ON","lenskartGoldImg":"https://static1.lenskart.com/media/desktop/img/4-July-19/cartchange.jpg"}',
		frameSizeConfig:
			'{"enabled":true,"disabledUrl":"/frame-size-guide","showSizeStrip":true,"showSizeStripText":"Retry","storeAndUseSize":false,"showFilterCheckOnResult":false,"filterCheckBoxText":"Filter Frames for my size","skipButtonText":"Skip and shop for frames in all sizes","showFrameSizeButtonInPlp":false,"showFrameSizeToggleInPlp":true,"plpToggleShowAllText":"Show All Size Frames","showFrameSizeButtonInPdp":true,"frameSizeBannerInPdp":"https://static1.lenskart.com/media/desktop/img/4-Oct-19/strip_banner_pdp2.jpg","defaultEyeframeCategoryLink":"/eyeglasses/promotions/vincent-chase-online-499.html","defaultSunglassCategoryLink":"/sunglasses/special/vincent-chase-bestsellers.html","showSingleCtaInHomeFlow":false,"homeFlowCTA":"Continue Shopping","homeFlowCtaLink":"/","resultConfig":{"eyeframe":{"small":48,"medium":56,"smallFaceWidth":132,"mediumFaceWidth":138},"sunglass":{"small":48,"medium":56,"smallFaceWidth":132,"mediumFaceWidth":138}}}',
		RECENT_VIEWED_TITLE: 'Recently Viewed Products',
		ORDER_STATUS:
			'{"deliveryETA":20,"payNow":{"cod":{"header":"Complete Payment Online","description":"Stay safe during Covid 19, avoid cash"},"pendingPayment":{"header":"Complete Your Payment","description":"Order will be processed after payment"}},"autoExpandedStatuses":[]}',
		AR_CONFIG:
			'{"formConfig": {"emailMandatory":true,"genderMandatory":true,"nameMandatory":true,"phoneMandatory":true,"showEmail":true,"showGender":true,"showName":true,"showPhone":true,"showLocation":false,"autoSumbit":false},"productCount": "205","categoryId":{"default":"8539","premium":"8539","bestSellers":"8539","newArrivals":"8539"}}',
		MSITE_SHOW_MORE_PAYMENT_OPTION_LIMIT: '4',
		SHOW_DELIVERY: false,
		YOTPO_WIDGETS_CONFIG:
			'{ "desktop": { "home": ["instagram"], "pdp": ["instagram", "reviews"], "reviews": ["instagram", "testimonial"], "shop": ["instagram"] }, "msite": { "home": ["instagram"], "pdp": ["instagram", "reviews"], "reviews": ["instagram", "testimonial"], "shop": ["instagram"] } }',
		AVAILABLE_COUNTRY_CODE:
			'{"otherCountryCode": [ "+971","+91","+65", "+1"]}',
		RBI_POLICY_MARKETPLACE_CONFIG:
			'{"msitedkLogo":"https://static1.lenskart.com/media/mobile/images/dealskart_logo_v2.png","desktopdkLogo":"https://static5.lenskart.com/images/cust_mailer/29-Jan-19/dealskart_logo_v2.png","desktopcheckoutdkLogo":"https://static.lenskart.com/media/desktop/img/checkout_Dealskart_logo.png","listing":"OFF","category":"OFF","pdp":"OFF","success":"OFF","checkout":"OFF"}',
		BLUE_CUT_LOGO:
			'https://static3.lenskart.com/media/desktop/img/blu_logo.png',
		PRODUCT_FAQS:
			'{"productTabIsEnable":true,"CheckoutStepOneIsEnable":true}',
		PACKAGES_CONFIG:
			'{ "checkOfferFieldPrices": "false", "showPrescInfoScreen": false, "showAddOnsScreen": "true", "showPostPowerInfoScreen": "OFF", "offerText": "", "bannerConfig": { "isVisible": "false", "primaryText": "Hi,You are a GOLD Member!", "secondaryText": "You are eligible for Buy 1 Get 1 offer on this order!" }, "isExpandedByDefault": "true", "isPreSelected": "true", "displayBogoTabs": "false", "defaultSelectedTabId": "buy2", "buy2PriceOfferText": "Frame + Lens", "tabConfig": [{ "id": "buy1", "title": "Buy 1", "subtitle": "No Offer" }, { "id": "buy2", "title": "Buy 2", "subtitle": "Buy 1 Get 1 Free" } ], "verticalUiConfig": { "isEnabled": "true", "bluecutLogoUrl": "https://static2.lenskart.com/media/mobile/universal/assets/blu_logo.png", "sortOrder": "DESCENDING" } }',
		CL_SURVEY:
			'{"landingPageImg":"https://static5.lenskart.com/images/cust_mailer/12-Feb-19/Aqualens_main.jpg","successPageImg":"https://static5.lenskart.com/images/cust_mailer/7-Jan-19/reward_screen.png","productId":"134722","isClSolution":false}',
		FRESHDESK_WIDGET_KEY: '13000000125',
		timerForWalletResendOTP: '5000',
		SHOW_BUY_ON_CHAT:
			'{"enableForFloating":true,"enableForPDP":true,"number":"918929853854","content":"Hi Lenskart, help me get started! I am on PDP page of mobile site. I need help with product ID: ","image":"https://static1.lenskart.com/media/desktop/img/buyonchat1.png"}',
		WHATSAPP_OPTIN:
			'{"Desktop":{"Login":{"showWidget":true,"message":"Get updates on Whatsapp","toggle":"ON"},"Register":{"showWidget":true,"message":"Get updates on Whatsapp","toggle":"ON"},"Success":{"showWidget":true,"message":"Receive order updates on your Whatsapp","toggle":"ON"},"OrderList":{"showWidget":true,"message":"Get Order Updates on WhatsApp"}},"Mobile":{"Login":{"showWidget":true,"message":"Get updates on Whatsapp","toggle":"ON"},"Success":{"showWidget":true,"message":"Receive order updates on your Whatsapp"},"OrderList":{"showWidget":true,"message":"Get Order Updates on WhatsApp"}}}',
		ORDER_LISTING_PAGESIZE_DESKTOP: 5,
	},
	utmMapping: {
		utmcsr: 'utm_source',
		utmcmd: 'utm_medium',
		utmccn: 'utm_campaign',
		utmctr: 'utm_term',
		utmcct: 'utm_content',
	},
	loginStatus: false,
	wishlistTrue: false,
	mainNavigationData: {
		header: {
			menu: [
				{
					Eyeglasses: {
						url: '/eyeglasses.html',
						img: 'https://static.lenskart.com/media/desktop/img/BannerHover.png',
						imgUrl: 'https://www.lenskart.com/cms-candyland',
						imgAlt: 'Banner image',
						categoryId: '',
						type: 'three-col-layout',
						data: [
							{
								gender: {
									url: '/eyeglasses/gender.html',
									categoryId: '3266',
									submenu: [
										{
											men: {
												img: 'https://static.lenskart.com/media/desktop/img/men_pic.png',
												url: '/eyeglasses/gender/mens-eyeglasses.html',
												categoryId: '2458',
												category: {
													url: '/eyeglasses/collections.html',
													categoryId: '3432',
													submenu: [
														{
															title: 'CLASSIC EYEGLASSES',
															subtext:
																'starting from <strong>₹999</strong>',
															url: '/eyeglasses.html',
															categoryId: '',
															submenu: [
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '8416',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/eyeglasses/promotions/new-arrivals-classic-eyeglasses.html',
																					categoryId:
																						'7951',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				'Lenskart BLU lenses':
																					{
																						url: 'https://www.lenskart.com/cms-blu-smartphone-lenses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				Trending: {
																					url: '/eyeglasses/collections/trending-classic.html',
																					categoryId:
																						'7829',
																				},
																			},
																			{
																				'Tinted Eyeglasses':
																					{
																						url: 'https://www.lenskart.com/search?q=Tinted%20eyeglasses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				'Computer Eyeglasses':
																					{
																						url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
																						categoryId:
																							'3887',
																					},
																			},
																		],
																	},
																},
																{
																	'Frame Type': {
																		url: '',
																		submenu: [
																			{
																				'Rectangle Frames':
																					{
																						url: 'eyeglasses/brands/vincent-chase-eyeglasses/rectangle.html',
																						categoryId:
																							'5591',
																					},
																			},
																			{
																				'Wayfarer Frames': {
																					url: 'eyeglasses/brands/vincent-chase-eyeglasses/wayfarer.html',
																					categoryId:
																						'5592',
																				},
																			},
																			{
																				'Round Frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/vc-round-eyeglasses.html',
																					categoryId:
																						'7846',
																				},
																			},
																			{
																				'Aviator Frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/aviator.html',
																					categoryId:
																						'6647',
																				},
																			},
																			{
																				'Cat-Eye Frames': {
																					url: 'eyeglasses/brands/vincent-chase-eyeglasses/cat-eye.html',
																					categoryId:
																						'5593',
																				},
																			},
																			{
																				'Rimless Frames': {
																					url: '/eyeglasses/marketing/vincent-chase-rimless.html',
																					categoryId:
																						'8182',
																				},
																			},
																			{
																				'Half Rim frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/half-rim.html',
																					categoryId:
																						'5589',
																				},
																			},
																		],
																	},
																},
																{
																	Collection: {
																		url: '',
																		submenu: [
																			{
																				Candyland: {
																					url: '/eyeglasses/promotions/candyland-vc-eye.html',
																					categoryId:
																						'8864',
																				},
																			},
																			{
																				'Air Flex Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-flex.html',
																						categoryId:
																							'7758',
																					},
																			},
																			{
																				'Classic Acetate Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/classic-acetate.html',
																						categoryId:
																							'8802',
																					},
																			},
																			{
																				'Air Signia Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-signia.html',
																						categoryId:
																							'8167',
																					},
																			},
																			{
																				'Sleek Steel Collection':
																					{
																						url: '/eyeglasses/collections/sleek-steel.html',
																						categoryId:
																							'8573',
																					},
																			},
																			{
																				'Air Silicon Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-silicon.html',
																						categoryId:
																							'8171',
																					},
																			},
																			{
																				'Blend Edit Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/blend-edit.html',
																						categoryId:
																							'8803',
																					},
																			},
																			{
																				'Air Clip On Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-clip-on.html',
																						categoryId:
																							'8172',
																					},
																			},
																			{
																				'HD Acetate Collection':
																					{
																						url: '/eyeglasses/collections/hd-acetate.html',
																						categoryId:
																							'7924',
																					},
																			},
																		],
																	},
																},
																{
																	Brands: {
																		url: '',
																		submenu: [
																			{
																				'Vincent Chase': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				'John Jacobs': {
																					url: '/eyeglasses/brands/john-jacobs-eyeglasses.html',
																					categoryId:
																						'3389',
																				},
																			},
																			{
																				'Ray-Ban': {
																					url: '/eyeglasses/brands/ray-ban-eyeglasses.html',
																					categoryId:
																						'2785',
																				},
																			},
																			{
																				Carrera: {
																					url: '/eyeglasses/brands/carrera-eyeglasses.html',
																					categoryId:
																						'3335',
																				},
																			},
																			{
																				Oakley: {
																					url: '/eyeglasses/brands/oakley-eyeglasses.html',
																					categoryId:
																						'2784',
																				},
																			},
																			{
																				Vogue: {
																					url: '/eyeglasses/brands/vogue-eyeglasses.html',
																					categoryId:
																						'2786',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'PREMIUM EYEGLASSES',
															subtext:
																'starting from <strong>₹3000</strong>',
															url: '/eyeglasses/collections/premium-eyeglasses.html',
															categoryId: '3226',
															submenu: [
																{
																	Brands: {
																		url: '',
																		categoryId: '2459',
																		submenu: [
																			{
																				'Ray-Ban': {
																					url: '/eyeglasses/brands/ray-ban-eyeglasses.html',
																					categoryId:
																						'2785',
																				},
																			},
																			{
																				'John Jacobs': {
																					url: '/eyeglasses/brands/john-jacobs-eyeglasses.html',
																					categoryId:
																						'3389',
																				},
																			},
																			{
																				'Vincent Chase': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				Carrera: {
																					url: '/eyeglasses/brands/carrera-eyeglasses.html',
																					categoryId:
																						'3335',
																				},
																			},
																			{
																				Oakley: {
																					url: '/eyeglasses/brands/oakley-eyeglasses.html',
																					categoryId:
																						'2784',
																				},
																			},
																			{
																				Vogue: {
																					url: '/eyeglasses/brands/vogue-eyeglasses.html',
																					categoryId:
																						'2786',
																				},
																			},
																		],
																	},
																},
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '3389',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/eyeglasses/promotions/new-arrivals.html',
																					categoryId:
																						'7949',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/eyeglasses/marketing/bestsellers-premium-eyeglasses.html',
																					categoryId:
																						'8080',
																				},
																			},
																			{
																				'Lenskart BLU lenses':
																					{
																						url: 'https://www.lenskart.com/cms-blu-smartphone-lenses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				Trending: {
																					url: '/eyeglasses/marketing/bestsellers-premium-eyeglasses.html',
																					categoryId:
																						'8080',
																				},
																			},
																		],
																	},
																},
																{
																	'Frame Shape': {
																		url: '',
																		categoryId: '3389',
																		submenu: [
																			{
																				'Rectangle Frames':
																					{
																						url: '/eyeglasses/collections/premium-eyeglasses/rectangle.html',
																						categoryId:
																							'4755',
																					},
																			},
																			{
																				'Round Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/round.html',
																					categoryId:
																						'7818',
																				},
																			},
																			{
																				'Square Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/wayfarer.html',
																					categoryId:
																						'4754',
																				},
																			},
																			{
																				'Aviator Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/aviator.html',
																					categoryId:
																						'7817',
																				},
																			},
																			{
																				'Cat-Eye Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/cat-eye.html',
																					categoryId:
																						'4756',
																				},
																			},
																			{
																				'Rimless Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/rimless.html',
																					categoryId:
																						'4750',
																				},
																			},
																			{
																				'Half Rim frames': {
																					url: '/eyeglasses/collections/premium-half-rim.html',
																					categoryId:
																						'7727',
																				},
																			},
																		],
																	},
																},
																{
																	Style: {
																		url: '',
																		categoryId: '3389',
																		submenu: [
																			{
																				'The Downtown Edit':
																					{
																						url: '/eyeglasses/marketing/downtown-edit-eyeglasses.html',
																						categoryId:
																							'8877',
																					},
																			},
																			{
																				'Rich Acetate': {
																					url: '/eyeglasses/promotions/jj-rich-acetate-summer-eyeglasses.html',
																					categoryId:
																						'8425',
																				},
																			},
																			{
																				'Terrific Transparent':
																					{
																						url: '/eyeglasses/promotions/transparent-john-jacobs-eyeglasses.html',
																						categoryId:
																							'8255',
																					},
																			},
																			{
																				'Gold & Rose Gold':
																					{
																						url: '/eyeglasses/brands/john-jacobs-eyeglasses/new-titanium.html',
																						categoryId:
																							'7297',
																					},
																			},
																			{
																				'Hybrid Affair': {
																					url: '/eyeglasses/promotions/jj-hybrid-eyeglasses.html',
																					categoryId:
																						'8350',
																				},
																			},
																			{
																				'Shape Shifters': {
																					url: '/eyeglasses/promotions/jj-work-to-play-eyeglasses.html',
																					categoryId:
																						'8284',
																				},
																			},
																			{
																				'Square Up': {
																					url: '/eyeglasses/collections/premium-eyeglasses/wayfarer.html',
																					categoryId:
																						'4754',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'COMPUTER EYEGLASSES',
															subtext:
																'Starting from <strong>₹999</strong>',
															url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
															categoryId: '3887',
															submenu: [
																{
																	Collection: {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'Starting at Rs.999':
																					{
																						url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
																						categoryId:
																							'3887',
																					},
																			},
																			{
																				'For your Kids': {
																					url: '/eyeglasses/promotions/all-kids-computer-glasses.html',
																					categoryId:
																						'8422',
																				},
																			},
																		],
																	},
																},
															],
														},
													],
												},
											},
											women: {
												img: 'https://static.lenskart.com/media/desktop/img/women_pic.png',
												url: '/eyeglasses/gender/womens-eyeglasses.html',
												categoryId: '2457',
												category: {
													url: '/eyeglasses/gender/womens-eyeglasses.html',
													categoryId: '2457',
													submenu: [
														{
															title: 'CLASSIC EYEGLASSES',
															subtext:
																'starting from <strong>₹999</strong>',
															url: '/eyeglasses.html',
															categoryId: '',
															submenu: [
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '8416',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/eyeglasses/promotions/new-arrivals-classic-eyeglasses.html',
																					categoryId:
																						'7951',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				'Lenskart BLU lenses':
																					{
																						url: 'https://www.lenskart.com/cms-blu-smartphone-lenses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				Trending: {
																					url: '/eyeglasses/collections/trending-classic.html',
																					categoryId:
																						'7829',
																				},
																			},
																			{
																				'Tinted Eyeglasses':
																					{
																						url: 'https://www.lenskart.com/search?q=Tinted%20eyeglasses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				'Computer Eyeglasses':
																					{
																						url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
																						categoryId:
																							'3887',
																					},
																			},
																		],
																	},
																},
																{
																	'Frame Type': {
																		url: '',
																		submenu: [
																			{
																				'Rectangle Frames':
																					{
																						url: 'eyeglasses/brands/vincent-chase-eyeglasses/rectangle.html',
																						categoryId:
																							'5591',
																					},
																			},
																			{
																				'Wayfarer Frames': {
																					url: 'eyeglasses/brands/vincent-chase-eyeglasses/wayfarer.html',
																					categoryId:
																						'5592',
																				},
																			},
																			{
																				'Round Frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/vc-round-eyeglasses.html',
																					categoryId:
																						'7846',
																				},
																			},
																			{
																				'Aviator Frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/aviator.html',
																					categoryId:
																						'6647',
																				},
																			},
																			{
																				'Cat-Eye Frames': {
																					url: 'eyeglasses/brands/vincent-chase-eyeglasses/cat-eye.html',
																					categoryId:
																						'5593',
																				},
																			},
																			{
																				'Rimless Frames': {
																					url: '/eyeglasses/marketing/vincent-chase-rimless.html',
																					categoryId:
																						'8182',
																				},
																			},
																			{
																				'Half Rim frames': {
																					url: '/eyeglasses/brands/vincent-chase-eyeglasses/half-rim.html',
																					categoryId:
																						'5589',
																				},
																			},
																		],
																	},
																},
																{
																	Collection: {
																		url: '',
																		submenu: [
																			{
																				Candyland: {
																					url: '/eyeglasses/promotions/candyland-vc-eye.html',
																					categoryId:
																						'8864',
																				},
																			},
																			{
																				'Air Flex Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-flex.html',
																						categoryId:
																							'7758',
																					},
																			},
																			{
																				'Classic Acetate Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/classic-acetate.html',
																						categoryId:
																							'8802',
																					},
																			},
																			{
																				'Air Signia Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-signia.html',
																						categoryId:
																							'8167',
																					},
																			},
																			{
																				'Sleek Steel Collection':
																					{
																						url: '/eyeglasses/collections/sleek-steel.html',
																						categoryId:
																							'8573',
																					},
																			},
																			{
																				'Air Silicon Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-silicon.html',
																						categoryId:
																							'8171',
																					},
																			},
																			{
																				'Blend Edit Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/blend-edit.html',
																						categoryId:
																							'8803',
																					},
																			},
																			{
																				'Air Clip On Collection':
																					{
																						url: '/eyeglasses/brands/vincent-chase-eyeglasses/air-clip-on.html',
																						categoryId:
																							'8172',
																					},
																			},
																			{
																				'HD Acetate Collection':
																					{
																						url: '/eyeglasses/collections/hd-acetate.html',
																						categoryId:
																							'7924',
																					},
																			},
																		],
																	},
																},
																{
																	Brands: {
																		url: '',
																		submenu: [
																			{
																				'Vincent Chase': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				'John Jacobs': {
																					url: '/eyeglasses/brands/john-jacobs-eyeglasses.html',
																					categoryId:
																						'3389',
																				},
																			},
																			{
																				'New Balance': {
																					url: '/eyeglasses/brands/new-balance.html',
																					categoryId:
																						'8732',
																				},
																			},
																			{
																				'Ray-Ban': {
																					url: '/eyeglasses/brands/ray-ban-eyeglasses.html',
																					categoryId:
																						'2785',
																				},
																			},
																			{
																				Carrera: {
																					url: '/eyeglasses/brands/carrera-eyeglasses.html',
																					categoryId:
																						'3335',
																				},
																			},
																			{
																				Oakley: {
																					url: '/eyeglasses/brands/oakley-eyeglasses.html',
																					categoryId:
																						'2784',
																				},
																			},
																			{
																				Vogue: {
																					url: '/eyeglasses/brands/vogue-eyeglasses.html',
																					categoryId:
																						'2786',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'PREMIUM EYEGLASSES',
															subtext:
																'starting from <strong>₹3000</strong>',
															url: '/eyeglasses/collections/premium-eyeglasses.html',
															categoryId: '3389',
															submenu: [
																{
																	Brands: {
																		url: '',
																		categoryId: '2459',
																		submenu: [
																			{
																				'John Jacobs': {
																					url: '/eyeglasses/brands/john-jacobs-eyeglasses.html',
																					categoryId:
																						'3389',
																				},
																			},
																			{
																				'New Balance': {
																					url: '/eyeglasses/brands/new-balance.html',
																					categoryId:
																						'8732',
																				},
																			},
																			{
																				'Vincent Chase': {
																					url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
																					categoryId:
																						'8416',
																				},
																			},
																			{
																				'Ray-Ban': {
																					url: '/eyeglasses/brands/ray-ban-eyeglasses.html',
																					categoryId:
																						'2785',
																				},
																			},
																			{
																				Carrera: {
																					url: '/eyeglasses/brands/carrera-eyeglasses.html',
																					categoryId:
																						'3335',
																				},
																			},
																			{
																				Oakley: {
																					url: '/eyeglasses/brands/oakley-eyeglasses.html',
																					categoryId:
																						'2784',
																				},
																			},
																			{
																				Vogue: {
																					url: '/eyeglasses/brands/vogue-eyeglasses.html',
																					categoryId:
																						'2786',
																				},
																			},
																		],
																	},
																},
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '3389',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/eyeglasses/promotions/new-arrivals.html',
																					categoryId:
																						'7949',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/eyeglasses/marketing/bestsellers-premium-eyeglasses.html',
																					categoryId:
																						'8080',
																				},
																			},
																			{
																				'Lenskart BLU lenses':
																					{
																						url: 'https://www.lenskart.com/cms-blu-smartphone-lenses',
																						categoryId:
																							'',
																					},
																			},
																			{
																				Trending: {
																					url: '/eyeglasses/marketing/bestsellers-premium-eyeglasses.html',
																					categoryId:
																						'8080',
																				},
																			},
																		],
																	},
																},
																{
																	'Frame Shape': {
																		url: '',
																		categoryId: '2459',
																		submenu: [
																			{
																				'Rectangle Frames':
																					{
																						url: '/eyeglasses/collections/premium-eyeglasses/rectangle.html',
																						categoryId:
																							'4755',
																					},
																			},
																			{
																				'Round Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/round.html',
																					categoryId:
																						'7818',
																				},
																			},
																			{
																				'Square Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/wayfarer.html',
																					categoryId:
																						'4754',
																				},
																			},
																			{
																				'Aviator Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/aviator.html',
																					categoryId:
																						'7817',
																				},
																			},
																			{
																				'Cat-Eye Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/cat-eye.html',
																					categoryId:
																						'4756',
																				},
																			},
																			{
																				'Rimless Frames': {
																					url: '/eyeglasses/collections/premium-eyeglasses/rimless.html',
																					categoryId:
																						'4750',
																				},
																			},
																			{
																				'Half Rim frames': {
																					url: '/eyeglasses/collections/premium-half-rim.html',
																					categoryId:
																						'7727',
																				},
																			},
																		],
																	},
																},
																{
																	Style: {
																		url: '',
																		categoryId: '3389',
																		submenu: [
																			{
																				'The Downtown Edit':
																					{
																						url: '/eyeglasses/marketing/downtown-edit-eyeglasses.html',
																						categoryId:
																							'8877',
																					},
																			},
																			{
																				'Rich Acetate': {
																					url: '/eyeglasses/promotions/jj-rich-acetate-summer-eyeglasses.html',
																					categoryId:
																						'8425',
																				},
																			},
																			{
																				'Terrific Transparent':
																					{
																						url: '/eyeglasses/promotions/transparent-john-jacobs-eyeglasses.html',
																						categoryId:
																							'8255',
																					},
																			},
																			{
																				'Gold & Rose Gold':
																					{
																						url: '/eyeglasses/brands/john-jacobs-eyeglasses/new-titanium.html',
																						categoryId:
																							'7297',
																					},
																			},
																			{
																				'Hybrid Affair': {
																					url: '/eyeglasses/promotions/jj-hybrid-eyeglasses.html',
																					categoryId:
																						'8350',
																				},
																			},
																			{
																				'Shape Shifters': {
																					url: '/eyeglasses/promotions/jj-work-to-play-eyeglasses.html',
																					categoryId:
																						'8284',
																				},
																			},
																			{
																				'Square Up': {
																					url: '/eyeglasses/collections/premium-eyeglasses/wayfarer.html',
																					categoryId:
																						'4754',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'COMPUTER EYEGLASSES',
															subtext:
																'Starting from <strong>₹999</strong>',
															url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
															categoryId: '3887',
															submenu: [
																{
																	Collection: {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'Starting at ₹999':
																					{
																						url: '/eyeglasses/collections/computer-eyeglasses-collection.html',
																						categoryId:
																							'3887',
																					},
																			},
																			{
																				'For your Kids': {
																					url: '/eyeglasses/promotions/all-kids-computer-glasses.html',
																					categoryId:
																						'8422',
																				},
																			},
																		],
																	},
																},
															],
														},
													],
												},
											},
											kids: {
												img: 'https://static.lenskart.com/media/desktop/img/kid_pic.png',
												url: '',
												categoryId: '',
												submenu: [
													{
														'Our Top Picks': {
															url: '',
															categoryId: '',
															submenu: [
																{
																	'Kids Computer Glasses': {
																		url: '/eyeglasses/promotions/all-kids-computer-glasses.html',
																		categoryId: '8422',
																	},
																},
																{
																	'Starting at ₹599': {
																		url: '/eyeglasses/promotions/all-kids-eyeglasses.html',
																		categoryId: '8415',
																	},
																},
															],
														},
													},
												],
											},
										},
									],
								},
							},
						],
					},
				},
				{
					'Computer Glasses': {
						url: '/eyeglasses/collections/all-computer-glasses.html',
						categoryId: '8427',
						type: 'three-col-layout',
						img: 'https://static.lenskart.com/media/desktop/img/BannerHover.png',
						imgUrl: 'https://www.lenskart.com/cms-candyland',
						imgAlt: 'Banner image',
						data: [
							{
								gender: {
									url: '/eyeglasses/collections/all-computer-glasses.html',
									categoryId: '8427',
									submenu: [
										{
											men: {
												img: 'https://static.lenskart.com/media/desktop/img/men_pic.png',
												url: '/eyeglasses/collections/all-computer-glasses.html',
												categoryId: '8427',
												category: {
													url: '',
													categoryId: '',
													submenu: [
														{
															title: 'Blu 0 Computer Glasses',
															subtext:
																'starting from <strong>₹999</strong>',
															url: '/eyeglasses/collections/all-computer-glasses.html',
															categoryId: '8427',
														},
														{
															title: 'PREMIUM RANGE',
															subtext:
																'starting from <strong>₹2000</strong>',
															url: '/eyeglasses/brands/john-jacobs-eyeglasses/computer-eyeglasses.html',
															categoryId: '8412',
														},
													],
												},
											},
											women: {
												img: 'https://static.lenskart.com/media/desktop/img/women_pic.png',
												url: '/eyeglasses/collections/all-computer-glasses.html',
												categoryId: '8427',
												category: {
													url: '',
													categoryId: '',
													submenu: [
														{
															title: 'Blu 0 Computer Glasses',
															subtext:
																'starting from <strong>₹999</strong>',
															url: '/eyeglasses/collections/all-computer-glasses.html',
															categoryId: '8427',
														},
														{
															title: 'PREMIUM RANGE',
															subtext:
																'starting from <strong>₹2000</strong>',
															url: '/eyeglasses/brands/john-jacobs-eyeglasses/computer-eyeglasses.html',
															categoryId: '8412',
														},
													],
												},
											},
											kids: {
												img: 'https://static.lenskart.com/media/desktop/img/kid_pic.png',
												url: '/eyeglasses/promotions/all-kids-computer-glasses.html',
												categoryId: '8422',
												category: {
													url: '',
													categoryId: '',
													submenu: [
														{
															title: 'Blu 0 Computer Glasses',
															subtext:
																'starting from <strong>₹499</strong>',
															url: '/eyeglasses/promotions/all-kids-computer-glasses.html#dir=desc&sort=low_price&gan_data=true',
															categoryId: '8422',
														},
														{
															title: 'PREMIUM RANGE',
															subtext:
																'starting from <strong>₹799</strong>',
															url: '/eyeglasses/promotions/all-kids-computer-glasses.html#dir=desc&sort=high_price&gan_data=true',
															categoryId: '8422',
														},
													],
												},
											},
										},
									],
								},
							},
						],
					},
				},
				{
					'Kids Glasses': {
						url: '/eyeglasses/promotions/all-kids-eyeglasses.html',
						img: 'https://static.lenskart.com/media/desktop/img/BannerHover.png',
						imgUrl: 'https://www.lenskart.com/cms-candyland',
						imgAlt: 'Banner image',
						categoryId: '8415',
						type: 'list-grid',
						data: [
							{
								submenu: [
									{
										'Select Category': {
											url: '',
											categoryId: '',
											type: 'image',
											submenu: [
												{
													Eyeglasses: {
														url: '/eyeglasses/promotions/all-kids-eyeglasses.html',
														categoryId: '8415',
														image: {
															src: 'https://static.lenskart.com/media/desktop/img/new_eyeglasses1.png',
															imgAlt: 'kids glasses',
														},
													},
												},
												{
													Sunglasses: {
														url: '/sunglasses/brands/vincent-chase-sunglasses.html',
														categoryId: '2852',
														image: {
															src: 'https://static.lenskart.com/media/desktop/img/new_sunglasses.png',
															imgAlt: 'kids glasses',
														},
													},
												},
												{
													'Blu 0 Computer Glasses': {
														url: '/eyeglasses/promotions/all-kids-computer-glasses.html',
														categoryId: '8422',
														image: {
															src: 'https://static.lenskart.com/media/desktop/img/Blue0.png',
															imgAlt: 'kids glasses',
														},
													},
												},
											],
										},
									},
									{
										'  ': {
											url: '',
											categoryId: '',
											submenu: [
												{
													'  ': {
														url: '',
														categoryId: '',
													},
												},
											],
										},
									},
									{
										'  ': {
											url: '',
											categoryId: '',
											submenu: [
												{
													'  ': {
														url: '',
														categoryId: '',
													},
												},
											],
										},
									},
									{
										'  ': {
											url: '',
											categoryId: '',
											submenu: [
												{
													'  ': {
														url: '',
														categoryId: '',
													},
												},
											],
										},
									},
								],
							},
						],
					},
				},
				{
					'Contact Lenses': {
						url: '/contact-lenses.html',
						categoryId: '',
						type: 'list-grid',
						data: [
							{
								submenu: [
									{
										Brands: {
											url: '',
											categoryId: '',
											submenu: [
												{
													Aqualens: {
														url: '/contact-lenses/top-contact-lenses-brands/aqualens.html',
														categoryId: '7244',
													},
												},
												{
													'Bausch Lomb': {
														url: '/contact-lenses/top-contact-lenses-brands/bausch-lomb-contact-lenses.html',
														categoryId: '2416',
													},
												},
												{
													'Johnson & Johnson': {
														url: '/contact-lenses/top-contact-lenses-brands/johnson-johnson-contact-lenses.html',
														categoryId: '2410',
													},
												},
												{
													Soflens: {
														url: '/contact-lenses/most-popular-contact-lenses/soflens-contact-lenses.html',
														categoryId: '2448',
													},
												},
												{
													Acuvue: {
														url: '/contact-lenses/most-popular-contact-lenses/acuvue-contact-lenses.html',
														categoryId: '2446',
													},
												},
												{
													Iconnect: {
														url: '/bausch-lomb-iconnect-3-lens-box.html',
														categoryId: '',
													},
												},
												{
													Alcon: {
														url: '/contact-lenses/top-contact-lenses-brands/alcon-ciba-vision-contact-lenses.html',
														categoryId: '2423',
													},
												},
												{
													'Air Optix': {
														url: '/contact-lenses/most-popular-contact-lenses/optix-contact-lenses.html',
														categoryId: '2453',
													},
												},
												{
													'Pure Vision': {
														url: '/contact-lenses/most-popular-contact-lenses/purevision-contact-lenses.html',
														categoryId: '2449',
													},
												},
											],
										},
									},
									{
										'Explore By Disposability': {
											url: '',
											categoryId: '',
											submenu: [
												{
													Monthly: {
														url: '/contact-lenses/contact-lens-type/monthly-disposable-contact-lenses.html',
														categoryId: '2415',
													},
												},
												{
													'Day & Night': {
														url: '/contact-lenses/contact-lens-type/day-night-lenses.html',
														categoryId: '2501',
													},
												},
												{
													Daily: {
														url: '/contact-lenses/contact-lens-type/daily-disposable-contact-lenses.html',
														categoryId: '2412',
													},
												},
												{
													Yearly: {
														url: '/contact-lenses/contact-lens-type/yearly-disposable-contact-lenses.html',
														categoryId: '2422',
													},
												},
												{
													'Bi-weekly': {
														url: '/contact-lenses/contact-lens-type/2-week-disposable-contact-lenses.html',
														categoryId: '2411',
													},
												},
											],
										},
									},
									{
										'Explore By Power': {
											url: '',
											categoryId: '',
											submenu: [
												{
													'Spherical - (CYL<0.5)': {
														url: '/contact-lenses/popular-searches/negative-sph-power.html',
														categoryId: '4586',
													},
												},
												{
													'Spherical + (CYL<0.5)': {
														url: '/contact-lenses/popular-searches/positive-sph-power.html',
														categoryId: '4585',
													},
												},
												{
													'Cylindrical Power(>0.75)': {
														url: '/contact-lenses/popular-searches/toric-cyl-power.html',
														categoryId: '4587',
													},
												},
												{
													'Toric Power': {
														url: '/contact-lenses/popular-searches/toric-cyl-power.html',
														categoryId: '4587',
													},
												},
											],
										},
									},
									{
										'Explore By Colors': {
											url: '',
											categoryId: '',
											submenu: [
												{
													Green: {
														url: '/contact-lenses/color/green.html',
														categoryId: '7792',
													},
												},
												{
													Blue: {
														url: '/contact-lenses/color/blue.html',
														categoryId: '7880',
													},
												},
												{
													Brown: {
														url: '/contact-lenses/color/brown.html',
														categoryId: '7878',
													},
												},
												{
													Turquoise: {
														url: '/contact-lenses/color/turquoise.html',
														categoryId: '7879',
													},
												},
												{
													'View all colors': {
														url: '/contact-lenses/contact-lens-type/colour-disposable-contact-lenses.html',
														categoryId: '2424',
													},
												},
											],
										},
									},
									{
										Solution: {
											url: '',
											categoryId: '',
											val: 'Lens Solutions',
											type: 'image',
											layout: 'two',
											submenu: [
												{
													Small: {
														url: '/contact-lenses/lens-solutions/small.html',
														categoryId: '4595',
													},
												},
												{
													Large: {
														url: '/contact-lenses/lens-solutions/large.html',
														categoryId: '4597',
													},
												},
												{
													'View all solutions ': {
														url: '/contact-lenses/lens-solutions.html',
														categoryId: '2509',
													},
												},
											],
										},
									},
								],
							},
						],
					},
				},
				{
					Sunglasses: {
						url: '/sunglasses.html',
						img: 'https://static.lenskart.com/media/desktop/img/BannerHover.png',
						imgUrl: 'https://www.lenskart.com/cms-candyland',
						imgAlt: 'Banner image',
						categoryId: '3362',
						type: 'three-col-layout',
						data: [
							{
								gender: {
									url: '/sunglasses/brands.html',
									categoryId: '3266',
									submenu: [
										{
											men: {
												img: 'https://static.lenskart.com/media/desktop/img/men_pic.png',
												url: '/sunglasses/find-eyewear/mens-sunglasses.html',
												categoryId: '2852',
												category: {
													url: '/sunglasses/collections.html',
													categoryId: '2852',
													submenu: [
														{
															title: 'Classic Sunglasses',
															subtext:
																'Starting from <strong>₹1299</strong>',
															url: 'https://www.lenskart.com/sunglasses.html',
															categoryId: '',
															submenu: [
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/sunglasses/promotions/vc-new-arrivals.html',
																					categoryId:
																						'7585',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/sunglasses/special/vincent-chase-bestsellers.html',
																					categoryId:
																						'3909',
																				},
																			},
																			{
																				'Pilot Style': {
																					url: '/sunglasses/frame-shape/aviator-sunglasses.html',
																					categoryId:
																						'2587',
																				},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				'Polarized Sunglasses':
																					{
																						url: '/sunglasses/collections/polarized-sunglasses.html',
																						categoryId:
																							'3221',
																					},
																			},
																		],
																	},
																},
																{
																	Shape: {
																		url: '',
																		submenu: [
																			{
																				Aviator: {
																					url: '/sunglasses/special/vc-aviator.html',
																					categoryId:
																						'8040',
																				},
																			},
																			{
																				Rounders: {
																					url: '/sunglasses/special/vc-rounders.html',
																					categoryId:
																						'8037',
																				},
																			},
																			{
																				Wayfarer: {
																					url: '/sunglasses/brands/vincent-chase-sunglasses/wayfarer.html',
																					categoryId:
																						'5584',
																				},
																			},
																			{
																				Rectangle: {
																					url: '/sunglasses/brands/vincent-chase-sunglasses/rectangle.html',
																					categoryId:
																						'6950',
																				},
																			},
																			{
																				Hexagon: {
																					url: '/sunglasses/special/sunglasses-hexagon-men.html',
																					categoryId:
																						'8244',
																				},
																			},
																			{
																				'Cat-Eye': {
																					url: '/sunglasses/special/vc-cat-eye.html',
																					categoryId:
																						'8039',
																				},
																			},
																			{
																				Clubmaster: {
																					url: '/sunglasses/frame-shape/clubmaster-sunglasses.html',
																					categoryId:
																						'6967',
																				},
																			},
																		],
																	},
																},
																{
																	Collection: {
																		url: '/sunglasses/find-eyewear/mens-sunglasses.html',
																		submenu: [
																			{
																				Candyland: {
																					url: '/sunglasses/promotions/candyland-vc-sun.html',
																					categoryId:
																						'8863',
																				},
																			},
																			{
																				'The Downtown Edit':
																					{
																						url: '/sunglasses/special/downtown-edit-sunglasses.html',
																						categoryId:
																							'8878',
																					},
																			},
																			{
																				Polarized: {
																					url: '/sunglasses/collections/polarized-sunglasses.html',
																					categoryId:
																						'3221',
																				},
																			},
																			{
																				'Summer Standouts':
																					{
																						url: '/sunglasses/promotions/summer-sunglasses.html',
																						categoryId:
																							'8423',
																					},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				'Classic Sunglasses':
																					{
																						url: '/sunglasses/promotions/back-to-basic-sunglasses.html',
																						categoryId:
																							'8424',
																					},
																			},
																			{
																				'Designer Collection':
																					{
																						url: '/sunglasses/brands/john-jacobs.html',
																						categoryId:
																							'2840',
																					},
																			},
																		],
																	},
																},
																{
																	Brands: {
																		url: '/sunglasses/find-eyewear/mens-sunglasses.html',
																		submenu: [
																			{
																				'Vincent Chase ': {
																					url: '/sunglasses/special/vincent-chase-bestsellers.html',
																					categoryId:
																						'3909',
																				},
																			},
																			{
																				'John Jacobs': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'Premium Sunglasses',
															subtext:
																'Starting from <strong>₹2500</strong>',
															url: 'https://www.lenskart.com/premium-sunglasses',
															categoryId: '',
															submenu: [
																{
																	Brands: {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'John Jacobs': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																			{
																				'Vincent Chase': {
																					url: '/sunglasses/special/vincent-chase-bestsellers.html',
																					categoryId:
																						'3909',
																				},
																			},
																		],
																	},
																},
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/sunglasses/special/vincent-chase-bestsellers.html',
																					categoryId:
																						'3909',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				Trending: {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																		],
																	},
																},
																{
																	'Frame Shape': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				Aviator: {
																					url: '/sunglasses/brands/john-jacobs/aviator.html',
																					categoryId:
																						'6882',
																				},
																			},
																			{
																				Rounders: {
																					url: '/sunglasses/brands/john-jacobs/round.html',
																					categoryId:
																						'6885',
																				},
																			},
																			{
																				Wayfarer: {
																					url: '/sunglasses/collections/premium-wayfarers.html',
																					categoryId:
																						'7773',
																				},
																			},
																		],
																	},
																},
															],
														},
													],
												},
											},
											women: {
												img: 'https://static.lenskart.com/media/desktop/img/women_pic.png',
												url: 'https://www.lenskart.com/sunglasses.html',
												categoryId: '',
												category: {
													url: 'https://www.lenskart.com/sunglasses.html',
													categoryId: '',
													submenu: [
														{
															title: 'Classic Sunglasses',
															subtext:
																'Starting from <strong>₹999 </strong>',
															url: 'https://www.lenskart.com/sunglasses.html',
															categoryId: '',
															submenu: [
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/sunglasses/promotions/vc-new-arrivals.html',
																					categoryId:
																						'7585',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/sunglasses/special/vincent-chase-bestsellers.html',
																					categoryId:
																						'3909',
																				},
																			},
																			{
																				'Pilot Style': {
																					url: '/sunglasses/frame-shape/aviator-sunglasses.html',
																					categoryId:
																						'2587',
																				},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				'Polarized Sunglasses':
																					{
																						url: '/sunglasses/collections/polarized-sunglasses.html',
																						categoryId:
																							'3221',
																					},
																			},
																		],
																	},
																},
																{
																	Shape: {
																		url: '',
																		submenu: [
																			{
																				Aviator: {
																					url: '/sunglasses/special/vc-aviator.html',
																					categoryId:
																						'8040',
																				},
																			},
																			{
																				Rounders: {
																					url: '/sunglasses/special/vc-rounders.html',
																					categoryId:
																						'8037',
																				},
																			},
																			{
																				Wayfarer: {
																					url: '/sunglasses/brands/vincent-chase-sunglasses/wayfarer.html',
																					categoryId:
																						'5584',
																				},
																			},
																			{
																				Rectangle: {
																					url: '/sunglasses/brands/vincent-chase-sunglasses/rectangle.html',
																					categoryId:
																						'6950',
																				},
																			},
																			{
																				Hexagon: {
																					url: '/sunglasses/special/sunglasses-hexagon-men.html',
																					categoryId:
																						'8244',
																				},
																			},
																			{
																				'Cat-Eye': {
																					url: '/sunglasses/special/vc-cat-eye.html',
																					categoryId:
																						'8039',
																				},
																			},
																			{
																				Clubmaster: {
																					url: '/sunglasses/frame-shape/clubmaster-sunglasses.html',
																					categoryId:
																						'6967',
																				},
																			},
																		],
																	},
																},
																{
																	Collection: {
																		url: '',
																		submenu: [
																			{
																				Candyland: {
																					url: '/sunglasses/promotions/candyland-vc-sun.html',
																					categoryId:
																						'8863',
																				},
																			},
																			{
																				'The Downtown Edit':
																					{
																						url: '/sunglasses/special/downtown-edit-sunglasses.html',
																						categoryId:
																							'8878',
																					},
																			},
																			{
																				Polarized: {
																					url: '/sunglasses/collections/polarized-sunglasses.html',
																					categoryId:
																						'3221',
																				},
																			},
																			{
																				'Summer Standouts':
																					{
																						url: '/sunglasses/promotions/summer-sunglasses.html',
																						categoryId:
																							'8423',
																					},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				'Classic Sunglasses':
																					{
																						url: '/sunglasses/promotions/back-to-basic-sunglasses.html',
																						categoryId:
																							'8424',
																					},
																			},
																			{
																				'Designer Collection':
																					{
																						url: '/sunglasses/brands/john-jacobs.html',
																						categoryId:
																							'2840',
																					},
																			},
																		],
																	},
																},
																{
																	Brands: {
																		url: '/eyeglasses/gender.html',
																		submenu: [
																			{
																				'Vincent Chase ': {
																					url: '/sunglasses/brands/vincent-chase-sunglasses.html',
																					categoryId:
																						'2852',
																				},
																			},
																			{
																				'John Jacobs': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																		],
																	},
																},
															],
														},
														{
															title: 'Premium Sunglasses',
															subtext:
																'Starting from <strong>₹2500</strong>',
															url: 'https://www.lenskart.com/premium-sunglasses',
															categoryId: '',
															submenu: [
																{
																	Brands: {
																		url: 'https://www.lenskart.com/premium-sunglasses',
																		categoryId: '',
																		submenu: [
																			{
																				'John Jacobs': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																			{
																				'Vincent Chase': {
																					url: '/sunglasses/brands/vincent-chase-sunglasses.html',
																					categoryId:
																						'2852',
																				},
																			},
																		],
																	},
																},
																{
																	'Our Top Picks': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				'New Arrivals': {
																					url: '/sunglasses/promotions/new-arrivals.html',
																					categoryId:
																						'7950',
																				},
																			},
																			{
																				'Best Seller': {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																			{
																				'Power Sunglasses':
																					{
																						url: '/power-sunglasses-main.html',
																						categoryId:
																							'3426',
																					},
																			},
																			{
																				Trending: {
																					url: '/sunglasses/brands/john-jacobs.html',
																					categoryId:
																						'2840',
																				},
																			},
																		],
																	},
																},
																{
																	'Frame Shape': {
																		url: '',
																		categoryId: '',
																		submenu: [
																			{
																				Aviator: {
																					url: '/sunglasses/brands/john-jacobs/aviator.html',
																					categoryId:
																						'6882',
																				},
																			},
																			{
																				Rounders: {
																					url: '/sunglasses/brands/john-jacobs/round.html',
																					categoryId:
																						'6885',
																				},
																			},
																			{
																				Wayfarer: {
																					url: '/sunglasses/collections/premium-wayfarers.html',
																					categoryId:
																						'7773',
																				},
																			},
																		],
																	},
																},
															],
														},
													],
												},
											},
										},
									],
								},
							},
						],
					},
				},
				{
					'Home Eye-Test with Trial': {
						type: 'two-col-layout',
						data: [
							{
								image: {
									src: 'https://static1.lenskart.com/media/desktop/img/HomeTryOut.png',
									imgAlt: 'Home Eye-Test with Trial',
								},
								categoryId: '',
								headingText: 'Get your eyes checked at home',
								supportText:
									'A certified refractionist will visit you with<br> latest eye testing machines & 100 trial frames',
								url: 'https://www.lenskart.com/try-at-home/',
								buttonText: 'Book appointment',
								boldText:
									'Try these frames at your home completely free',
							},
						],
					},
				},
				{
					'Store Locator': {
						type: 'two-col-layout',
						sliderType: 'img',
						img: 'https://static.lenskart.com/media/desktop/img/BannerHover.png',
						imgUrl: 'https://www.lenskart.com/cms-candyland',
						imgAlt: 'Banner image',
						data: [
							{
								image: {
									src: 'https://static5.lenskart.com/images/cust_mailer/New-Site-Images/banner_try_at_store.jpg',
									imgAlt: 'Try at store',
								},
								categoryId: '',
								headingText: 'Over 500 Lenskart Store',
								supportText:
									"Experience eyewear in a whole new way: Visit your nearest store <br> and treat yourself to 5000+ eyewear styles ' in try at store block.",
								url: 'https://stores.lenskart.com/',
								buttonText: 'Locate a store ',
								boldText: '',
								sliderImg: {
									data: [
										{
											img: 'https://static.lenskart.com/media/desktop/img/Delhi1.png',
											text: 'Delhi',
											url: 'https://stores.lenskart.com/location/delhi/new-delhi?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Banglore1.png',
											text: 'Bangalore',
											url: 'https://stores.lenskart.com/location/karnataka/bengaluru?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Mumbai1.png',
											text: 'Mumbai',
											url: 'https://stores.lenskart.com/location/maharashtra/mumbai?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Ahmedabad1.png',
											text: 'Ahmedabad',
											url: 'https://stores.lenskart.com/location/gujarat/ahmedabad?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Chennai1.png',
											text: 'Chennai',
											url: 'https://stores.lenskart.com/location/tamil-nadu/chennai?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Hyderabad1.png',
											text: 'Hyderabad',
											url: 'https://stores.lenskart.com/location/telangana/hyderabad?utm_medium=desktop&utm_source=store-locator&utm_campaign=city-link',
										},
										{
											img: 'https://static.lenskart.com/media/desktop/img/Cities1.png',
											text: '+ 100 Cities',
											url: 'https://stores.lenskart.com/',
										},
									],
								},
							},
						],
					},
				},
			],
		},
		topBarNav: {
			topBarNavLeft: [
				{
					label: 'Try in 3D',
					url: 'https://www.lenskart.com/compare-looks',
				},
				{
					label: 'Store Locator',
					url: 'https://www.lenskart.com/optical-store/',
				},
				{
					label: 'Quality',
					url: 'covid-advisory-cms',
				},
				{
					label: 'USA',
					url: 'https://lenskart.us/?utm_source=lenskart&utm_medium=india&utm_campaign=website',
				},
				{
					label: 'Singapore',
					url: 'https://lenskart.sg/?utm_source=lenskart&utm_medium=india&utm_campaign=website',
				},
				{
					label: 'UAE',
					url: 'https://ae.lenskart.com/?utm_source=lenskart&utm_medium=india&utm_campaign=website',
				},
				{
					label: 'John Jacobs',
					url: 'https://www.johnjacobseyewear.com/',
				},
				{
					label: 'Aqualens',
					url: 'https://aqualens.in/',
				},
				{
					label: 'Franchise Enquiry',
					url: 'https://partners.lenskart.com/',
				},
				{
					label: 'Cobrowsing',
					url: 'https://www.lenskart.com/cobrowsing',
				},
				{
					label: 'Engineering Blog',
					url: 'https://medium.com/lenskart-engineering',
				},
			],
			topBarNavRight: [
				{
					label: 'support@lenskart.com',
					url: 'mailto:support@lenskart.com',
					iconClass: 'fa fa-envelope-o',
				},
				{
					label: '99998 99998',
					url: 'tel:+919999899998',
					iconClass: 'fa fa-phone',
				},
			],
		},
		rightBarNav: [
			{
				src: 'https://static.lenskart.com/media/desktop/img/menu/icon_try_on.svg',
				url: 'https://www.lenskart.com/compare-looks',
				alt: '3D Try On',
			},
			{
				src: 'https://static.lenskart.com/media/desktop/img/menu/blu-icon.svg',
				url: 'https://www.lenskart.com/eyewear/blue-cut-lenses',
				alt: 'blu icon',
			},
			{
				src: 'https://static.lenskart.com/media/desktop/img/menu/gold-icon.svg',
				url: 'https://www.lenskart.com/loyalty',
				alt: 'gold icon',
			},
		],
		footer: [
			{
				menuFirst: {
					'STORE LOCATOR': 'https://www.lenskart.com/optical-store',
					FAQ: 'https://www.lenskart.com/gfaq',
					'ENTER MY POWER': 'javascript:void(0);',
					'BUYING GUIDE': 'https://www.lenskart.com/buying-guide',
					'FRAME SIZE': 'https://www.lenskart.com/frame-size-guide',
				},
			},
			{
				menuSecond: {
					'We are Hiring': 'https://careers.lenskart.com/',
					'Refer & Earn': 'https://www.lenskart.com/paytm-referral',
					'About Us': 'https://www.lenskart.com/about-us.html',
					'T&C': 'https://www.lenskart.com/terms-and-conditions',
					'Site Map':
						'https://www.lenskart.com/catalog/seo_sitemap/category',
					Disclaimer: 'https://www.lenskart.com/disclaimer',
					Privacy: 'https://www.lenskart.com/privacy-policy',
					'Lenskart Coupons': 'https://www.lenskart.com/coupons',
				},
			},
			{
				Eyeglasses: {
					'Free Frame': {
						url: '/eyeglasses/marketing/all-eoss.html',
						categoryId: '7839',
					},
					'Ray-Ban': {
						url: '/eyeglasses/brands/ray-ban-eyeglasses.html',
						categoryId: '2785',
					},
					'Vincent Chase': {
						url: '/eyeglasses/marketing/vc-air-bestseller-eyeglasses.html',
						categoryId: '8416',
					},
					'John Jacobs': {
						url: '/eyeglasses/brands/john-jacobs-eyeglasses.html',
						categoryId: '3389',
					},
					'Full Rim': {
						url: '/eyeglasses/frame-style/full-rim.html',
						categoryId: '2473',
					},
					'Half Rim': {
						url: '/eyeglasses/brands/vincent-chase-eyeglasses/half-rim.html',
						categoryId: '5589',
					},
					'Rim Less': {
						url: '/eyeglasses/marketing/vincent-chase-rimless.html',
						categoryId: '8182',
					},
					'Cat Eye': {
						url: 'eyeglasses/brands/vincent-chase-eyeglasses/cat-eye.html',
						categoryId: '5593',
					},
					'Eye Checkup': {
						url: '/try-at-home',
						categoryId: '',
					},
					Eyeglasses: {
						url: '/eyeglasses.html',
						categoryId: '',
					},
				},
			},
			{
				Sunglasses: {
					'Ray Ban': {
						url: '/sunglasses/brands/ray-ban-sunglasses.html',
						categoryId: '2781',
					},
					Oakley: {
						url: '/sunglasses/brands/oakley-sunglasses.html',
						categoryId: '2782',
					},
					'John Jacobs': {
						url: '/sunglasses/brands/john-jacobs.html',
						categoryId: '2840',
					},
					'Vincent Chase': {
						url: '/sunglasses/brands/vincent-chase-sunglasses.html',
						categoryId: '2852',
					},
					Vogue: {
						url: '/sunglasses/brands/vogue-sunglasses.html',
						categoryId: '2783',
					},
					'Aviator Style': {
						url: '/sunglasses/frame-shape/aviator-sunglasses.html',
						categoryId: '2587',
					},
					'Wayfarer Style': {
						url: '/sunglasses/frame-shape/wayfarer-sunglases.html',
						categoryId: '3264',
					},
					'Eyewear Accessories': {
						url: '/eyewear-accessories.html',
						categoryId: '5413',
					},
					Sunglasses: {
						url: '/sunglasses.html',
						categoryId: '',
					},
					Goggles: {
						url: '/goggles.html',
						categoryId: '4338',
					},
				},
			},
			{
				'Contact Lenses': {
					'Bausch and lomb': {
						url: '/contact-lenses/top-contact-lenses-brands/bausch-lomb-contact-lenses.html',
						categoryId: '2416',
					},
					'Colour lenses': {
						url: '/contact-lenses/contact-lens-type/colour-disposable-contact-lenses.html',
						categoryId: '2424',
					},
					'Daily disposable': {
						url: '/contact-lenses/contact-lens-type/daily-disposable-contact-lenses.html',
						categoryId: '2412',
					},
					'Monthly disposable': {
						url: '/contact-lenses/contact-lens-type/monthly-disposable-contact-lenses.html',
						categoryId: '2415',
					},
					'Toric lenses': {
						url: '/contact-lenses/contact-lens-type/toric-contact-lenses.html',
						categoryId: '2413',
					},
					'Johnson & johnson': {
						url: '/contact-lenses/top-contact-lenses-brands/johnson-johnson-contact-lenses.html',
						categoryId: '2410',
					},
					'Cooper vision lenses': {
						url: '/contact-lenses/top-contact-lenses-brands/cooper-vision-contact-lenses.html',
						categoryId: '3361',
					},
					Acuvue: {
						url: '/contact-lenses/most-popular-contact-lenses/acuvue-contact-lenses.html',
						categoryId: '2446',
					},
					Purevision: {
						url: '/contact-lenses/most-popular-contact-lenses/purevision-contact-lenses.html',
						categoryId: '2449',
					},
					'Sitemap XML': {
						url: 'https://www.lenskart.com/sitemap.xml',
						categoryId: '',
					},
				},
			},
		],
	},
	showGlobalHeader: true,
	showGlobalFooter: true,
	isMenuVisible: true,
	userInfo: null,
	loginLoader: false,
	shortListData: {
		result: {
			productIds: [],
			productList: [],
			numberOfProducts: 0,
		},
	},
	cartData: {
		result: {
			items: [],
			itemsQty: 0,
			itemsCount: 0,
			totals: {
				discounts: [],
			},
		},
	},
	redisLoading: true,
	countryData: null,
	isFilterEnable: false,
	router: {
		location: {
			pathname: '/',
			search: '',
			hash: '',
		},
	},
	isWishlistCount: 0,
	isCartCount: 0,
	section: '',
	categoryData: {},
	productData: null,
	dataLocale: {
		HOWS_THE_PRODUCT: 'How’s the Product?',
		AS: 'as',
		DAYS_TEXT_CONTACT: '2 - 4 Days',
		ADDITIONAL_COMMENTS: 'Additional Comments',
		COUPON_DISCOUNT: 'Coupon Discount',
		ADDRESS_LINE: 'Address Line',
		TO_PAY: 'TO_PAY',
		PLEASE_ELABORATE_MORE_ON_FITTING_ISSUES:
			'Please elaborate more on fitting issues',
		PRICE_DIFFERENCE: 'Price Difference',
		LOGIN_FB: 'Please login to your facebook account',
		PLAYVIDEO: 'playVideo',
		PRODUCT_PRICE: 'Product Price',
		YOUR_LOCATION: 'Your Location',
		PICK_A_NEARBY_STORE_TO_EXCHANGE_ADJUST:
			'Pick a nearby store to Exchange/Adjust the fit of your product',
		MAKE_PAYMENT: 'Make Payment',
		SELECT_IMAGE: 'Select image',
		ANY_CONCERNS_FEEDBACK_EMAIL_ON: 'Any concerns or feedback? Email on',
		MY_ACCOUNT_DASHBOARD: 'My Account Dashboard',
		MM56_TO_65MM: '54mm to 65mm',
		ADD_SELECT_ADDRESS: 'Add or Select address',
		ENTER_PD_VALUE: 'Enter PD value',
		MANAGE_COMMUNICATION_PREFERENCES: 'Manage Communication Preferences',
		SELECT_ADRESS_FROM_LIST: 'Please select an address from the list',
		WILL_DELIVER_PRODUCT_BY:
			'We are working on resolving this immediately and deliver your PRODUCT by',
		UPLOAD_YOUR_PRESCRIPTION: 'Upload Your Prescription',
		TIME_TO_STORE: 'Time To Store',
		CHECKOUT: 'CHECKOUT',
		CLICK_HERE: 'CLICK HERE',
		LOGGED_IN_AS: 'Logged in as',
		POWER_DETAILS_UPLOADED: 'Power Details uploaded',
		PRICE_LOW_TO_HIGH: 'Price : Low to High',
		TOLL_FREE_NUMBER_TEXT: 'Toll Free Number',
		GOLD_BANNER_CONTENT: 'gold-banner-content',
		CUSTOM_HEIGHT: 'Custom Height',
		A: 'A',
		REQUEST_COULD_NOT_COMPLETE_ERROR:
			"Your request couldn't be completed. Please Try Again.",
		POWER_UPLOADED: 'Power uploaded',
		GO_FOR: 'Go For',
		P_FAQ_Q_1: 'Ques 1. What is Gold Membership?',
		CLOSED: 'CLOSED',
		P_FAQ_ANS_14: 'Ans 14. We have a 14 day return policy.',
		WE_DO_NOT_CHARGE_EXTRA_FOR_HIGH_POWERS:
			"We do not charge extra for high powers, so Lenses you've selected will be provided regardless of your power",
		BY: 'by',
		PRODUCTS_TO_EXCHANGE: 'Products to Exchange/Refund',
		NO_SLOTS_FOUND: 'No Slots Found',
		PM: 'PM',
		SUB_TEXT_3:
			"<span class='fsp10 block mr-t5 fw400'>Give us a missed call: <a href='tel:+918470007367' class='text-topaz'>+918470007367</a></span>",
		EASY_RETURNS_AND_REFUNDS_POLICY: 'Easy Returns and Refunds Policy',
		PLEASE_PROVIDE_INFORMATION_PRODUCT_STOCK:
			'Please provide your information below and we will inform you when the product is in stock',
		PRODUCT_TO_EXCHANGE: 'Product to Exchange',
		BY_TAPPING_BELOW: 'by tapping below',
		COMPLETE_AFTER_CARE_PACKAGE: 'Complete After-Care Package',
		LENSKART_GOLD_ADDED_TO_CART: 'Lenskart Gold successfully added to cart',
		COLOR: 'COLOR',
		BUY_NOW_CAPS: 'BUY NOW',
		RIGHT_EYE: 'Right Eye',
		RENEW_GOLD_MEMBERSHIP: 'RENEW GOLD MEMBERSHIP',
		PACKAGE_UPDATE_FAILED: 'Package Update Failed',
		PRODUCT_TO_BE_EXCHANGED_REFUNDED: 'Product to be Exchanged/Refunded',
		ITEMS_MOVED_TO_YOUR_WISHLIST:
			'The items in your cart have been moved to your wishlist to continue with exchange',
		HOME_EYE_CHECKUP: 'Home Eye Checkup',
		ENTER_PIN_CODE: 'Enter Pin Code',
		VIEW_FRAME_SIZING_GUIDE_HERE: 'View Frame Sizing Guide Here',
		PRESALES_CHECKOUT: 'PreSales Checkout',
		PLUS_ADDONS: '+ AddOns',
		YOUR: 'Your',
		PLEASE_ENTER_VALID_CODE: 'Please enter a valid code.',
		SOMETHING_WENT_WRONG: 'Something went wrong',
		CONVENIENCE_FEES: 'Convenience Fees',
		NO_PRICE_DIFFERENCE: 'No Price difference between old & new product',
		IN_PLACING_ORDER: 'in placing order',
		PAID: 'paid',
		PLUS_LENS: '+ Lens',
		DELIVERY_TYPE: 'DELIVERY TYPE',
		DOWNLOAD_APP: 'download-app',
		CHANGE_LENS_HEIGHT_BY: 'Change lens height by',
		GO_BACK: 'Go Back',
		GET: 'Get',
		POWERTYPE: 'PowerType',
		CALL_EMAIL: 'Call/ Email',
		TRY_ON_AVAILABLE_ON_APP: '3D Try On is available on<br/>Lenskart App',
		FIND_MY_FIT: 'FIND MY FIT',
		CARD_LOGO: 'card-logo',
		YOUR_PAYMENT_FOR_THE_ORDER: 'Your Payment for the order',
		CALL_CUSTOMER_CARE: 'CALL CUSTOMER CARE',
		PRODUCT_TYPE_OR_PRICE_MISSING: 'Product type or price missing.',
		SOMETHING_NOT_RIGHT: 'Something is not right',
		TECHNICAL_ERROR_TRY_AGAIN:
			'Oops, there was a technical error. Please try again after some time.',
		STORE_CREDIT: 'Store Credit',
		PLEASE_KEEP_CARD_ON_FOREHEAD:
			'Please keep the card on your forehead and capture the image',
		OFFER: 'Offer',
		WE_WILL_HELP_YOU_FIND_YOUR_FRAME_SIZE:
			"We'll help you find your frame size",
		TITLE: 'Title',
		ENTER_CARD_NUMBER_BANK_NAME: 'Enter Card Number/Bank Name',
		CURRENCY_CODE: 'INR',
		CALL_US: 'Call Us',
		REFUND_OPTION_NOT_AVAILABLE_THIS_PRODUCT:
			'Refund Option is not available for this product as per policy',
		SORRY_THIS_PRODUCT_OUT_OF_STOCK: 'Sorry! This Product is out of stock.',
		INVALID_POWERS_NOT_APPLICABLE:
			'Invalid powers: Not applicable for this product',
		CREDIT_AMOUNT: 'Credit Amount',
		ITEM: 'Item',
		SUCCESS: 'Success',
		FREE_SHIPPING: 'Free Shipping',
		BUYONCHAT_LINK_HOME:
			'Hi Lenskart, help me get started! I am on home page of mobile site',
		NOW: 'Now',
		CUSTOM_WIDTH: 'Custom Width',
		PERSONAL_OPTICIAN_HEADER: 'Eye Checkup at the Comfort of your Home',
		YOUR_RECOMMENDED_SIZE: 'Your recommended size is',
		PLEASE_ENTER_CAPTCHA:
			'Please enter the captcha shown here to place order',
		UNABLE_TO_SERVICE_DESIRED_PINCODE:
			'Unable to service the desired pincode',
		DITTO_CREATE_NEW_BTN: 'Create New',
		BROWSE_FRAMES_THAT_FIT_YOU: 'Browse frames that fit you perfectly',
		VIEW_UPLOADED_PRESCRIPTION_OR_PD_IMAGE:
			'View uploaded prescription or PD image',
		YOU_WILL_REDIRECTED_TO_PAYMENT:
			'You will be redirected to Payment gateway upon placing the order.',
		DOWNLOAD_APP_SHEET: 'Download App',
		SECURE_CARD_HEADING: 'Secure your card with RBI guidelines',
		MY_STORE_CREDIT: 'My Store Credit',
		MANAGE_YOUR_DITTO: 'Manage Your Ditto',
		DTICON: 'dtIcon',
		CLICK_TO_VIEW_COLOR_OPTIONS: 'Click to view Color Options',
		POPULARITY: 'Popularity',
		DAYS_TEXT_FRAME: '5 - 7 Days',
		SIZE_MATCH: 'Size Match',
		YOU_WILL_NOT_RECEIVE_UPDATES:
			'You will not receive updates for your orders via Whatsapp anymore',
		MY_INVITATIONS: 'My Invitations',
		YOU_HAVE_NOT_SELECTED_ANY_PRODUCT:
			'You have not selected any product to compare.',
		ADD_ON: 'ADD ON',
		CLICK_TO_PROCEED_TO_CART: 'Click To Proceed To Cart',
		VERIFY_LINK: 'please verify to link your Order History and Store Credit',
		BACK_TO_MY_ORDERS: 'BACK TO MY ORDERS',
		VIEW_MORE: 'View More',
		ENTER_AMOUNT: 'Enter Amount',
		COMPLETE_COD_AND_POWER_PENDING:
			'Confirm your COD order & submit power to process order',
		CHANGE_PASSWORD: 'Change Password',
		EITHER_GV_OR: 'Either Gift Voucher or',
		CAPTCHA: 'Captcha',
		CHANGE_PINCODE: 'Change Pincode',
		NOT_AVAILABLE_XPRESS_DELIVERY: 'Not available on Xpress Deliver',
		TECHNICAL_ERROR:
			"Oops there was a technical error! Don't worry, we will also email you the return label",
		CHATBOT_BG_IMG: 'chat-bot bg',
		REVIEWS_AND_RATINGS: 'Reviews & Ratings',
		CANCELLATION_ICON: 'Cancellation Icon',
		CONFIRM_ORDER_TEXT: 'Confirm your COD Order',
		UPLOAD_PRESCRIPTION: 'Upload Prescription',
		ENTER: 'Enter',
		PD_IMAGE: 'PD Image',
		CHANGE: 'Change',
		'PLEASE_ENTER_VALID_PHONE_NUMBER.': 'Please enter a valid phone number.',
		SHORTLIST_EMPTY: 'Dang! Your shortlist is empty.',
		YES_DELETE: 'Yes, delete',
		WE_WILL_CALL_FOR_POWER: 'We will call you to take your power after',
		LENSKART_ASSURANCE: 'Lenskart Assurance',
		CREDIT_NOTE: 'credit-note',
		WIDTH_OF_LENS: 'Width of Lens',
		REDIRECT_TO_RETRY_PAGE: 'Redirecting to Retry Payment Page',
		BELOW_54_MM: 'Below 54 mm',
		ENTER_BANK_DETAILS: 'ENTER BANK DETAILS',
		EMAIL_PRESCRIPTION: 'Email Prescription',
		PAYU: 'PayU',
		HELP_US_RECOMMEND_BETTER: 'Help us recommend better',
		AMOUNT_INCREASED_PRE: 'Amount Increased By',
		WHAT_ABOUT_MY_EYE_POWER: 'What About My Eye Power?',
		REACHED_MAX_AVAILABLE_QUANTITY:
			'Sorry, you have reached max available quantity. Try again later.',
		VIEW_PRESCRIPTION: 'View Prescription',
		SMALL: 'small',
		BANK_REFERENCE_NUMBER: 'Bank Reference Number',
		FOUR_FIVE_DAYS: '',
		DIFFERENT_FRAME_DIFFERENT_LENS: 'Different frame different lens',
		NOTES: 'Notes',
		LENS_DETAILS: 'Lens Details',
		CARD: 'card',
		PLEASE_SELECT_AN_OPTION: 'Please select an option',
		PRESCRIPTION_UPLOADED_WILL_ASSIST_YOU:
			'Prescription uploaded, we might call within 24hrs & assist you if needed',
		HOW_WOULD_YOU_RATE_PRODUCT: 'How would you rate the product?',
		SELECT_A_NEW_LENS_PACKAGE_FOR_THE_SELECTED_LENS:
			'Select a new lens package for the selected lens',
		PART_OF_YOUR_REFUND_WORTH: 'Part of your refund worth',
		DELIVER_TO: 'Deliver To',
		QR: 'qr',
		STORE_LOCATION: 'store-location',
		PLEASE_WAIT: 'Please wait',
		HOME_EYE_TEST: 'Home Eye test',
		HAVE_REFERRAL: 'Have a referral code',
		DO_YOU_HAVE_POWER: 'Do you have power ?',
		OOPS_NO_RESULT: 'Oops! No result found',
		EYE: 'Eye',
		BACK_TO_HOME: 'BACK TO HOME',
		CL_POWER_CAN_BE_DIFFERENT:
			'Contact lens power can be different from Eyeglass power',
		DEFAULT_ADDRESS: 'Default Address',
		OUR_CERTIFIED_OPTOMETRIST_VISIT:
			'Our certified optometrist can also visit your home to check your eye power',
		ARE_YOU_SURE: 'Are you sure',
		ALL_DAYS: 'All days',
		TO_KEEP_IT_A_SURPRISE_TEXT:
			"To keep it a surprise, please provide your mobile number below so that we'll inform only you about the order status",
		POWER_PRESCRIPTION_ATTACHED: 'Power prescription attached',
		PASSWORD_SHOULD_BE_MORE_THAN:
			'Password should be more than 6 characters.',
		CONVERT_EYEGLASSES_POWER: 'convert eyeglasses power to contact lens',
		ENTER_REFERRAL_CODE: 'Enter Referral Code',
		TRY_AGAIN: 'Try again',
		SHOW_MORE: 'Show More',
		LENS_PACKAGES: 'Lens Packages',
		SEND_PRODUCT_BACK: 'Select method to send product back',
		VIEW_SAVED_ADDRESS: 'VIEW SAVED ADDRESS',
		CHANGE_DEG_TO_SHOW_FEMALE: 'change 180deg to show female',
		OUR_STORES: 'Our Stores',
		PLEASE_CHOOSE_LOCATION_TO_SEARCH_STORES:
			'Please choose a new location to search for stores or go back and select a different method',
		POWER_NOT_SUBMITTED_SUCCESSFULLY_DUE_TO_TECHNICAL_REASON:
			'Power not submitted successfully due to technical reason, Please try again!',
		YOUR_PERSONAL_DATA: 'Your Personal Data',
		YEAR_1: '1 Year',
		PRODUCT_DETAILS: 'Product Details',
		TRENDING_SEARCH: 'Trending Search',
		LENSKART_CUSTOMER_REVIEWS_TITLE:
			'Lenskart Customer Reviews & Ratings - Lenskart.com',
		ONE_YEAR_WARRANTY_ON_ALL_LENSES: '1 year warranty on all lenses',
		WEAR_SPECS:
			"I wear specs/shades but can't see any size numbers printed on them",
		GOLD_CART_HOVER_HTML:
			'<span>Add membership for ₹600</span><br/><span>& choose 2nd pair for FREE</span>',
		NOT_FOUND: 'not-found',
		PUPIL_DISTANCE: 'ADD PUPIL DISTANCE',
		DELIVERED: 'Delivered',
		REORDER_IN_2_MIN: 'Reorder in just 2 minutes',
		STATE_PROVINCE: 'State/Province',
		REDIRECTING_TO_CHECKOUT_PAGE: 'Redirecting to checkout page',
		ORDER_NOT_CANCELLEABLE:
			'This order cannot be cancelled as Items have already been shipped',
		BANK_IFSC_CODE: "BANK's IFSC CODE",
		ZERO: '0',
		DELETED_SUCCESSFULLY: 'deleted successfully!',
		DOWNLOAD_APP_TEXT:
			'Get more personalised experience of AR Try-on, Face Analysis features and many more things on app',
		MY_ORDERS: 'My Orders',
		MY_DITTOS: 'My Dittos',
		LANDMARK: 'Landmark',
		TOOLTIP_ICON: 'Tooltip icon',
		OLD_PRODUCT: 'Old Product',
		ADD_COATING_LENSES_OPTIONAL: 'Add Coating to your Lenses (Optional)',
		FOR_FASTER_CHECKOUT_SIGN: 'For faster checkout sign in with',
		FIFTY_PER_HIGHER_PRICES: '50% higher prices than Lenskart (on average)',
		UPLOAD_PRESCRIPTION_TO_CONTINUE: 'Please upload prescription to continue',
		SEE_ALL_REVIEWS: 'See All Reviews',
		TO_LEARN_MORE: 'To learn more',
		YOU_WILL_START_RECEIVING_UPDATE:
			'You will start receiving updates for your orders via Whatsapp hereon',
		VIDEO_IMG: 'video img',
		CURRENCY_SYMBOL: '₹',
		PRODUCT: 'Product',
		POWER_TYPE: 'Power Type',
		YOU_WILL_GET_THE_OPTION_TEXT:
			'You’ll get the option to enter your prescription details.',
		PER_BOX: 'per box',
		LEFT: 'LEFT',
		ADDRESS_NOT_ELIGIBLE: 'Address not eligible',
		CHOOSE_DISCOUNT_OPTION: 'Choose Discount Option',
		WANT_TO_DELETE_ADDRESS: 'Do you want to delete the address',
		CURRENT_STATUS: 'Current Status',
		PHONE_CODE: '+91',
		PLEASE_PAY_REMAINING_AMOUNT:
			'Please pay remaining amount using other payment option.',
		LOADER: 'loader',
		BOOK: 'Book',
		FAQS: "FAQ's",
		LENS_PACKAGE: 'LENS PACKAGE',
		PAYMENT_AND_DISCOUNT: 'Payment & Discount',
		VIEW_EXCHANGE_ORDER_DETAILS: 'VIEW EXCHANGE ORDER DETAILS',
		VIEW_RETURN_LABEL_INSTRUCTIONS: 'VIEW RETURN LABEL & INSTRUCTIONS',
		PLEASE_LOGOUT_AND_LOGIN_WITH_MOBILE_ENDING:
			'Please Logout and Login with your mobile number ending in',
		OFF: 'off',
		DONT_KNOW_PRESCRIPTION_WILL_ASSIST_YOU:
			'Since you don’t know your power, we will call within 24hrs & assist you',
		NO_ACTIVE_OFFER: 'No active offers',
		SELECT_DATE_TIME_AND_CONTINUE: 'SELECT DATE TIME AND CONTINUE',
		FIRST_FRAME_FREE: 'First Frame Free',
		LENS_ONLY_PRODUCTS_ARE_AVAILABLE:
			'Lens only products are available for this pincode. Please continue with adding item in cart.',
		TAP_FOR_DETAILS: 'Tap for Details',
		OD_RIGHT_EYE: 'OD (RIGHT EYE)',
		PLEASE_ENTER_VALID_PINCODE: 'Please Enter Valid Pincode',
		ENTER_CAPTCHA_FROM_IMAGE: 'Please enter the captcha from the image',
		INCLUDES_FREE_SHIPPING: 'Includes Free Shipping',
		PLEASE_ENTER_VALID_MOBILE_NUMBER_EG:
			'Please enter a valid mobile number (eg. 9987XXXXXX)',
		BUY_NOW: 'Buy Now',
		TO_PE_PAID: 'to pe paid',
		WARNING: 'Warning',
		AUTHENTICATE: 'Authenticate',
		REQUEST_NOT_PROCESSED: 'Request not processed',
		ADDRESS_DELETE_FAILED: 'Address delete request failed, please try again',
		TO_GO_BACK: 'To go back',
		SHORTLISTED: 'SHORTLISTED',
		LOADING: 'Loading',
		ENTER_REFERRAL_AVAIL_OFFER:
			'Enter a referral code to avail referral offers',
		NEARBY_STORES: 'Nearby Stores',
		CART_EMPTY: 'cart empty',
		OFFERS_ON_SAVED_CARDS: 'Offers on Saved Cards',
		ALLOW_LOCATION_ACCSSES:
			'Allow location Accsses from browser settings to see nearby stores or Enter your Location',
		I_HAVE_DISCOUNT_COUPON: 'I have a discount coupon/reward points',
		ONCE_PRODUCT_RECEIVED_BY_LENSKART_POLICY:
			'once your product is received by Lenskart as per policy',
		SUBMIT: 'SUBMIT',
		I_DO_NOT_WEAR_SPECTACLES: 'I do not wear spectacles/shades',
		YOU_ARE_OFFLINE: 'You are offline',
		CLOSE: 'Close',
		CONFIRM_ORDER_SUBTEXT: 'Order will be processed after confirmation',
		ITEM_ID: 'Item ID',
		SAVE_500_LK_CASH: 'Save upto ₹500 with this order',
		ANOTHER_TAB_OPEN:
			'You have another tab open where you are exchanging a product. Do you want to continue here and close the exchange process?',
		MONTHS: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		NO_SAVED_PRESCRIPTION_FOUND: 'No Saved Prescription Found',
		CAN_WE: 'Can we',
		RECOMMENDED_FOR_YOU: 'Recommended For You',
		GO_BACK_TO_ANOTHER_CATEGORY: 'Go back and choose another category',
		DUMMY: 'dummy',
		HOW_TO_FIND_CVV: 'How to find CVV?',
		SKIP_CAOTING: 'SKIP COATING',
		CLEAR: 'Clear',
		EXTRA_OFF: 'Extra ₹ 1000 Off',
		TICK: 'tick',
		TAX: 'Tax',
		MIN: 'Min',
		PLEASE_ENTER_PO_NUMBER:
			'Please Enter Po Number in the field provided below',
		UNLIMITED_ADJUSTMENTS_UNTIL:
			'Unlimited adjustments - until you’re 100% happy',
		SUCCESSFULLY_ADDED: 'Product successfully added to shortlist',
		HI_SPECSY: 'Hi Specsy',
		QUANTITY: 'Qty',
		EXCHANGE_REFUND_DETAILS: 'EXCHANGE/REFUND DETAILS',
		SHOW_ALL_INFO: 'Show All Information',
		SORRY_UNABLE_TO_UPDATE_POWER:
			'Sorry, unable to update power. Please try again.',
		YOU_HAVE_NO_ORDER_IN_ACCOUNT:
			'You currently have no order in your account.',
		USB_FM_RADIO: 'USB, FM RADIO',
		ADD_OR_SELECT_ADDRESS:
			'Add or select address from where the product will be picked up',
		GO: 'Go',
		RETURN_COULD_NOT_BE_CANCELLED: 'Return Could Not be Cancelled',
		REMAINING: 'remaining',
		AN_EMAIL_HAS_BEEN_SENT:
			'An email has been sent to the email address with a link to reset your password.',
		PLEASE_ENTER_EMAIL_BELOW:
			'Please enter your email address below. you will receive a link to reset your password.',
		NO_BANK: 'no bank',
		INFO: 'info',
		THERE_WILL_BE_SIZE_BETWEEN:
			'There will be a size no. between 40 to 65, please enter that (this no may be followed by other nos, please ignore them)',
		STEP_ONE: 'STEP 1',
		REVIEWS: 'Reviews',
		WHATSAPP_NOTIFICATION: 'Whatsapp Notification',
		LOGIN_OR_REGISTER: 'Login or Register',
		SELECT_RETURN_REASON: 'Select Return Reason',
		CASUAL: 'Casual',
		WITHIN_24_HOURS_TO_HELP: 'within 24 hours to help.',
		CONTINUE_WITHOUT_3D_TRYON: 'Continue without 3D try on',
		MY_PRODUCT_REVIEWS: 'My Product Reviews',
		P_FAQ_Q_7:
			'Ques 7. I don’t have my prescription handy. Is it important to give it right away?',
		CHECKOUT_AS_GUEST: 'Checkout as guest',
		ADDRESS_ADD_UPDATE_FAILED:
			'Address add/update request failed, please retry by going back or proceed with payment',
		VERIFY_EMAIL: 'Verify your email',
		THANKS_FOR_SHOPPING: 'Thanks for Shopping!',
		SPECIAL_CHARACTERS_NOT_ALLOWED: 'Special characters are not allowed.',
		OFFERS: 'OFFERS',
		ORDER_STATUS: 'Order Status',
		GET_GOLD_MEMBERSHIP: 'GET GOLD MEMBERSHIP',
		SYMBOL_ASTRIX: '*',
		SUBSCRIPTION: 'Subscription',
		EMAIL_AFTER_CHECKOUT: 'Email, after Checkout',
		YOU_CAN_PAY_CONVENIENTLY:
			'You can pay conveniently at the time of delivery of the products.',
		SELECT_LENSES_FOR: 'Select Lenses for',
		BIGGEST_SAVING: 'Biggest Saving',
		WILL_KEEP_YOU_UPDATED: 'We will keep you updated.',
		CHECK_TO_CONFIRM: 'Check to Confirm',
		ASTRIX: '*',
		CHECK_BALANCE: 'Check Balance',
		USE_CAMERA: 'use camera',
		BUY_ON_CALL: 'BUY ON CALL',
		INCORRECT_SIZE_IT_USUALLY:
			'Incorrect size. It usually varies between 40 to 65',
		INSTRUCTIONS_FOR_RETURN_LABEL: 'Instructions for using the Return Label',
		DR_UJJWAL_SONIKA_AIIMS: 'Dr. Ujjwal Sonika, / AIIMS',
		SO_GO_AHEAD_AND_PLACE_YOUR_ORDER:
			'So go ahead and place your order & reserve your favourite eyewear while it’s in stock',
		UNLOCK_BANK_OFFERS: 'Unlock Bank Offers',
		LOGIN_WITH_MOBILE: 'Login with Mobile',
		GIFT_VOUCHER_CODE: 'Gift Voucher Code',
		GO_BACK_TO_HOME: 'GO BACK TO HOME',
		DATE_AND_TIME: 'Date & Time',
		VIEW_COMPLETE_DETAILS: 'View complete details',
		AVAILABLE: 'Available',
		CANCEL_RETURN: 'Cancel Return',
		ADD_POWER_DETAILS: 'Add Power details',
		ENTER_PASSWORD: 'Enter Password',
		OTHER_BANKS: 'Other Banks',
		SIZE: 'Size',
		CHANGE_NUMBER: 'Change Number',
		SYMBOL_PLUS: '+',
		REFER_AND_EARN: 'Refer & Earn',
		SOME_ERROR_OCCURED_PLEASE_TRY_AGAIN:
			'some error occured. please try again.',
		CONTACT_US: 'Contact Us',
		YOU_DONT_HAVE_SAVED_CARDS: 'You dont have any saved cards',
		UPLOAD_IMG_ALT: 'uploaded-img',
		THIS_IS_PUPIL_DISTANCE: 'This is Pupil Distance from center of specs',
		PRICE_BREAKUP: 'Price Breakup',
		SIZE_MISMATCH: 'Size Mismatch',
		TECHNICAL_INFORMATION: 'Technical Information',
		PD_PRESCRIPTION_UPLOADED: 'PD Prescription Uploaded.',
		CHOOSE_OTHER_PRODUCTS_BELOW: 'You can choose other products below',
		SELECT_COATING: 'Select Coating',
		PLEASE_TELL_US_PROBLEM_WITH_PRODUCT:
			'Please tell us the problem with the product',
		WILL_BE_REMOVED: 'will be removed',
		PAIR: 'pair',
		SEND_PHOTO_OF_YOUR_PRESCRIPTION:
			'To complete your order, send a photo of your prescription at',
		FIVE_THOUSAND_FRAMES_IN_STOCK:
			'5,000 frames in stock in a range of styles and brands',
		OD_LEFT_EYE: 'OS (LEFT EYE)',
		QUESTION_MARK: '?',
		TERMS_AND_CONDITIONS: 'Terms & Conditions',
		REDIRECTING_TO_PAYMENT: 'Redirecting to Payment',
		MY_DITTO: 'My Ditto',
		SELECT_REASON_TO_CONTINUE: 'Select Reason To Continue',
		USER_CANCELLED_LOGIN: 'User cancelled login or did not fully authorized.',
		GENDER: 'Gender',
		P_FAQ_Q_13:
			'Ques 13. How many days will they take to make my eyeglasses?',
		FROM: 'From',
		REFUND_IN_CASE_OF_DELIVERY_DELAY: '30% refund in case of delivery delay',
		TECH_ERROR: 'Uh-Oh Technical Error',
		HEY_SPECSY: 'Hey Specsy',
		FIND_MY_SIZE: 'Find my Size',
		ADD_GOLD: 'Add Gold Membership',
		EDIT_EMAIL: 'Edit Email',
		CAPTURE_IMAGE_WITH_CARD: 'Capture Image with Credit/DebitCard',
		DELETE: 'Delete',
		ELIGIBLE_FOR_EXCHANGE_RETURN_TILL: 'Eligible for exchange/return till',
		PLEASE_ENTER_OTP_SENT_TO_MOBILE: 'Please enter OTP sent to your mobile',
		YOUR_POWER: 'Your Power',
		NO_REVIEWS: 'No Reviews',
		ORDER_CONFIRMED: 'Order Confirmed',
		ENTER_NUMBER_TO_SEE: 'Enter your mobile number see which',
		SELECT_THE_PRODUCTS_FOR_EXCHANGE_REFUND:
			'Select the products for exchange/refund',
		I_WEAR_SPECS_SHADES:
			'I wear specs/shades and have size numbers printed on them',
		INVALID_TOKEN: 'Invalid token, please try again !',
		WE_WILL_REACH_OUT_SOON:
			'Thanks for the information! We will reach out to you soon',
		UPI_ID_MISSING_TEXT: 'UPI ID missing! Please enter a valid UPI ID',
		RESET: 'Reset',
		APPLY_COUPON: 'Apply Coupon',
		SYSTEM_ERROR: 'SYSTEM ERROR',
		WE_RECOMMEND: 'We Recommend',
		ADDITIONAL_DISCOUNT_LABEL: 'Extra offer discount',
		ENTER_CVV: 'ENTER CVV',
		ERROR_PAGE: 'Error Page',
		PICKUP_FROM_YOUR_ADDRESS: 'Pickup from Your Address',
		I_WANT_AN_OPTICAL_SPECIALIST:
			'I want an optical specialist to call me for power.',
		CUSTOMER_REVIEWS: 'Customer Reviews',
		PRICE_DETAILS: 'Price Details',
		REASON_FOR_RETURNING_PRODUCT:
			'Please tell us the reason for returning the product',
		SURVEY: 'survey',
		OR: 'OR',
		CANCEL: 'Cancel',
		TRY_FRAME_SIZE_ON_THE_APP: 'TRY FRAME SIZE ON THE APP',
		HOME_VISITS_AT_TIMES_CONVENIENT:
			'Home visits - At times convenient to you',
		ALL_RIGHTS_RESERVED: 'All Rights Reserved',
		ORDER_CANNOT_CANCELLED: 'Order Cannot be Cancelled',
		PLEASE_ENTER_VOUCHER_DISCOUNT: 'Please Enter Voucher Discount Code',
		PERSONAL_SAVED_LIST_ON_LENSKART_COM:
			'Check out my personal saved list of glasses on Lenskart.com',
		SEND_IMAGE: 'Send Image',
		CAN_NOT_PAY_INSTALLED_APPS: 'Can’t Pay via installed apps?',
		NEWSLETTER_SUBSCRIPTIONS: 'Newsletter Subscriptions',
		SELECT: 'Select',
		PRODUCT_DOES_NOT_EXISTS: 'Product does not exist',
		BOX: 'Box',
		YOUR_INFORMATION_UPDATED_SUCCESSFULLY:
			'Your information has been updated successfully!',
		SHORTLIST_LIMIT_REACHED: 'Shortlist limit reached',
		BANK: 'bank',
		BOOK_NOW: 'BOOK NOW',
		ENTERED_FITTING_HEIGHT: 'Entered Fitting Height',
		BACK: 'Back',
		SELECT_FRAME_SIZE: 'Select Your Frame Size for<br>Better Recommendations',
		THIS_PRODUCT_HAS_NO_CUSTOM_OPTIONS: 'This Product has no custom Options',
		OTP_SENT_TO_NUMBER: 'The OTP will be sent to this number',
		RETRY: 'RETRY',
		SUBMIT_POWER_METHOD: 'submit power method',
		PHONE_ASSISTANCE: 'Phone Assistance',
		LOCAL_OPTICIAN: 'Local Optician',
		PLEASE_SELECT: 'Please Select',
		VIEW_RANGE: 'VIEW RANGE',
		METHOD: 'Method',
		SELECTED: 'SELECTED',
		SC_SUCCESSFULLY_APPLIED_TO_CART:
			'Store Credit successfully applied to cart',
		OUR_COMMUNITY_IS_ENJOYING:
			'Our community is enjoying exclusive eyewear styles!',
		Profile: 'Profile',
		ALL_SHAPES: 'All Shapes',
		CLOSE_BRACKET: ')',
		POLICY: 'Policy',
		TRY_AT_STORE: 'TRY AT STORE',
		NOT_ABLE_TO_SHOW_MAP: 'Not able to show map',
		UNABLE_TO_FETCH_REFUND_ESTIMATE:
			'Unable to fetch refund estimate. Please try after sometime',
		SCAN_QR_CODE_TO_PAY: 'Scan below QR code to pay using',
		FIND_YOUR_FIT: 'Find your fit',
		POWER_PRESCRIPTION_UPLOADED: 'Power Prescription Uploaded.',
		PLEASE_ENTER_VALID_EMAIL_MOBILE:
			'Please enter a valid Email or Mobile Number.',
		SHOW: 'Show',
		CURRENT_SELECTED_LENS: 'Current selected Lens',
		BEST_SELLERS: 'Best Sellers',
		NO_WARRANTY_ON_LENSES: 'No warranty on lenses',
		PLEASE_TRY_AGAIN: 'Please try again!',
		MESSAGE: 'Message',
		PICKUP_SCHEDULE: 'Pickup Schedule',
		ADDITIONAL_TAX: 'Additional Tax',
		EDIT_NUMBER: 'Edit Number',
		FREE_HOME_TRIAL: 'Free Home Trial',
		MANAGE_NOTIFICATIONS: 'Manage Notifications',
		WE_ARE_HERE_TO_ASSIST_YOU: 'We are here to assist you',
		ENTER_YOUR_VOUCHER_CODE: 'Enter your voucher code',
		STEPS_COUNT: 'steps-count',
		EXPLORE_MORE: 'Explore More',
		LENSKART_LOGO: 'Lenskart Logo',
		INVALID_PARAMS_IN_URL: 'Invalid Parameters in the url',
		CONTACT_CUSTOMER_CARE_AT: 'please contact customer care at',
		REFUND_METHOD: 'Refund Method',
		CANCEL_APPOINTMENT: 'cancel appointment',
		ONLINE_PAYMENT_OPTIONS_ARE_AVAILABLE:
			'Online payment options are available',
		ORDER_PROCESSING_STARTS_AFTER:
			'Order processing starts after power submission',
		BOGO_PRODUCT: 'Bogo Product',
		AUTO: 'auto',
		SELECTED_LENS_PACKAGE: 'Select lens package',
		GOLD: 'GOLD',
		FILTER_BY: 'Filter By',
		RECOVERY_MAIL_HAS_BEEN_SENT: 'Recovery mail has been sent to your email.',
		DEG_MALE: '180deg male',
		GET_YOUR_FIRST_FRAME_FREE: 'GET YOUR FIRST FRAME FREE',
		PAYMENT_AND_POWER_PENDING: 'Payment & Power Submission Pending',
		OKAY_GOT_IT: 'Okay, Got it!',
		CHANGING_THE_CARD_NUMBER:
			'Changing the card number will remove the offer applied',
		ACCOUNT_TYPE: 'Account Type',
		COMPLETE_PAYMENT_AND_POWER_PENDING:
			'Complete your payment & submit power to process order',
		LK_CASH: 'LK Cash',
		TYPE: 'Type',
		SUCCESS_REFUND_EXCHANGE: 'Return/Exchange Successfull',
		LENSKART_GOLD_INFO: 'lenskart gold info',
		OTP_SENT_MOBILE: 'Otp has been re-sent to your number',
		NOT_ALL_POWERS_HAVE_CYLINDER:
			'Not all powers have a cylinder (CYL) component, in which case leave it blank. CYL represents angular defect',
		VIEW_POLICY: 'View Policy',
		APPLICABLE_ONLY_LOWER_POWERS: 'Applicable only on lower powers',
		STANDARDPARAMS: 'standardParams',
		OOPS_SOMETHING_WENT_WRONG:
			'Oops! something went wrong, please try again !',
		LOYALTY: 'loyalty',
		INFO_IMG: 'info img',
		CONTINUE: 'Continue',
		WITH_LENSES: 'with Lenses',
		ADDITIONAL_DISCOUNT: 'Additional Discount',
		FRAME_SIZE_TRYON:
			'Please Download the App from </br><b>Play Store or App Store</b></br> to try Frame Size',
		PRESCRIPTION_FROM_YOUR_DOCTOR:
			'Enter the details below as they appear on your prescription from your doctor.',
		DONT_HAVE_MY_PD_VALUE: 'Dont have My PD value',
		THIS_IS_REQUIRED_FIELD: 'This is a required field.',
		P_FAQ_Q_11:
			'Ques 11. What lenses will you use? I use thin, anti-glare lenses?',
		CREATED_ON: 'Created on',
		VIEW_3D_TRY_ON: 'VIEW 3D TRY ON',
		PRODUCT_IMG: 'product-img',
		DONE: 'Done',
		THANK_YOU_FOR_SHOPPING_WITH_US: 'Thank you for shopping with us.',
		REDIRECT_TO_ORDER_SUMMARY: 'Redirecting to Order Summary',
		POWER_DETAILS_UPDATED_SUCCESSFULLY: 'Power Details Updated Successfully',
		PASSWORD_DO_NOT_MATCH: 'New Password And Confirm Password do not match',
		SHOP_BY: 'SHOP BY',
		IN_INDIA: 'In India',
		tailor_made_for_you: 'tailor made for you',
		P_FAQ_ANS_7:
			'Ans 6. It’s ok if you don’t have your prescription handy while placing the order. Simply place the order for the frame and provide your power using the links provided in the SMS and email that we send you, post order completion. It’s that simple!',
		SHIPPING: 'Shipping',
		UPI_LOADER: 'upi loader',
		TO_EXCHANGE_PRODUCTS_DOWNLOAD_APP:
			'To exchange/refund the products of this order please download our mobile app and goto the my account section',
		SHIPMENT_DETAILS: 'Shipment Details',
		EXCHANGE_REFUND_DEATAILS: 'Exchange / Refund Details',
		LATEST_BY: 'Latest by',
		ALIGN_YOUR_FACE_TO_THE_GUIDE: 'Align your face to the guide',
		EXCHANGE_WILL_BE_PROCESSED: 'then your exchange will be processed',
		MM47_TO_56MM: '47mm to 56mm',
		DAMN: 'DAMN!!',
		GO_TO_APP_MY_ACCOUNTS: 'Go to App ⟩ My Accounts section',
		CREATE_EXCHANGE_ORDER: 'Create Exchange Order',
		WHAT_LOOKS_FOR_SHOPPING: 'What looks are you shopping for?',
		NEFT_ERR:
			'Sorry, this order has not been created with the current logged in user, you will be redirected to homepage in few seconds.',
		ALL_YOUR_DOUBTS_RESOLVED: 'all your doubts resolved',
		PASSWORD_HAS_BEEN_UPDATED: 'Password has been updated successfully!',
		VIEW_ORDER_DETAILS: 'View Order Details',
		CHOOSE_A_FUTURE_DATE: 'Choose a future date to view slots',
		THIS_FIELD_IS_REQUIRED: 'This Field is Required',
		THANK_YOU: 'Thank You',
		GOT_AN_ERROR: 'Got an error...',
		LENSES_SHAPED_BY_HAND: 'Lenses shaped by hand (risk of human error)',
		SELECT_OFFER: 'Choose Your Favorite Shape',
		PICKUP_SCHEDULED: 'Pickup Scheduled',
		ONLY_ALPHABETS_AND_SPACE_ALLOWED: 'Only alphabets and space are allowed.',
		ORDER_CONFIRMATION_PENDING: 'Order Confirmation Pending',
		BOOKING_ADDRESS: 'Booking Address',
		CHANGE_DEG_TO_SHOW_MALE: 'change 180deg to show male',
		WARN: 'warn',
		STANDARD_DELIVERY: 'Standard Delivery',
		WHATSAPP_SHARE: 'Whatsapp Share',
		ENTER_YOUR_POWER_LATER: 'Enter your power later',
		BELOW: 'Below',
		POST_POWER: 'Post Power Info',
		ENTER_MAX_140_CHARACTERS: 'Enter max 140 characters',
		SYMBOL_EXCLAIMATON: '!',
		PD_OPTIONAL: 'PD (optional)',
		RATING: 'Rating',
		YOU_CAN_SUBMIT_POWER_AFTER_PAYMENT_STEP:
			'You can submit your eye power after Payment step',
		SECURE_CARD_SUBTEXT_1:
			'Securing this card and avoiding unauthorised use.',
		WANT_TO_LINK_ACCT: ' Want to link your accounts',
		YOU_MAY_ALSO_LIKE: 'You May Also Like',
		DAYS_LEFT_TEXT: 'Days Left',
		SUBMIT_EYE_POWER_TEXT: 'You can submit your eye power after Payment step',
		EXCLUSIVE_VOUCHER: 'Download App And Receive Exclusive Voucher',
		SAVE_N_CONTINUE: 'Save & Continue',
		PLEASE_LOGOUT_AND_LOGIN_WITH_EMAIL:
			'Please Logout and Login with your email',
		BUY_THIS: 'BUY THIS',
		THANK_YOU_FOR_SUBMITTING_WILL_INFORM:
			"Thank you for submitting. We'll inform you as soon as we get the product!",
		SYMBOL_PERCENTAGE: '%',
		CHAT_WITH_US: 'Chat With Us',
		PLEASE_ALLOW_EMAIL_PERMISSION:
			'please allow email permission from your facebook account',
		PAYMENT_LINK_NOT_VALID_ANYMORE:
			'This payment link is not valid for this order anymore',
		ORDER_CANCELLATION: 'Order Cancellation',
		GET_A_REFUND: 'Get a Refund',
		PRODUCT_TO_RETURN_EXCHANGE: 'Product to Return/Exchange',
		EARLY: 'Early',
		HELP: 'Help',
		DOWNLOAD_LENSKART_APP_BUY: 'Download Lenskart App to buy',
		GOTO_MY_ORDERS: 'Goto My Orders',
		AN_ERROR_OCCUR_EMAIL:
			'An error occur while sending the email, Please try after sometime.',
		FOUR_DIGIT_OTP: 'A 4 digit',
		BOXES: 'Boxes',
		PRODUCT_EXCHANGE_DETAILS: 'Product Exchange Details',
		UPLOAD_IMAGE: 'Upload Image',
		ENTER_PRESCRIPTION: 'Enter Prescription',
		FOR_ACCURATE_RESULTS: 'For accurate results, we need to make',
		FILTERS: 'Filters',
		USING_ANY_FOLLOWING_METHODS: 'Using any of the following methods',
		EDIT_POWER: 'Edit Power',
		PUSH_NOTIFICATION: 'Push Notification',
		OF: 'of',
		THE_EXCHANGE_REFUND_WILL_BE_CANCELLED:
			'The Exchange/Refund will also be cancelled. Are you sure you want to cancel the return',
		BIGGEST_SAVINGS: 'Biggest Savings',
		SECURE_CARD_TEXT:
			'As per RBI guidelines we need to add an additional layer to secure your card. Agreeing to this means:',
		COLORS: 'COLORS',
		EXPLORE_COOL_SPECS: 'EXPLORE COOL SPECS!',
		CLEAR_VALUES: 'Clear Values',
		ZIP_POSTAL_CODE: 'Zip/Postal Code',
		SEO_DESCRIPTION_SECOND_HALF:
			'for men and women in India. ✓FREE shipping ✓Cash on Delivery ✓14 Days Return',
		EXCHANGE_REFUND: 'EXCHANGE/REFUND',
		OPTIONAL: 'Optional',
		HUNDREDS_OF_STORES: '500+ Stores',
		A_FEW_KM: 'a few km',
		I_HAVE_CYL_POWER: 'I Have Cylindrical (CYL) Power',
		SHARE_VIA_EMAIL: 'Share via Email',
		ITEMS: 'Items',
		NEW: 'New',
		PLEASE_ENTER_CORRECT_PASSWORD: 'Please enter correct password.',
		SORT_APPLIED: 'sortApplied',
		LENS_TYPE: 'Lens Type',
		CLICK_HERE_TO_KNOW_MORE: 'Click Here To Know More',
		BOUGHT_COUNT: 'bought count',
		WE_WILL_CALL_YOU_BACK: 'we will call you back in 15 mins and assist you',
		UNLOCK_OFFER: 'Unlock Offer',
		INCLUSIVE_OF_GST: '(Inclusive of GST)',
		SUCCESFULLY_AUTHENTICATED: 'Succesfully Authenticated!',
		DOWNLOAD: 'Download',
		AMOUNT: 'Amount',
		LENSKART_PAYMENT_RETRY_PAGE_FOR_ORDER_ID:
			'Lenskart Payment retry page for order Id',
		SORT: 'Sort',
		SHORTLIST: 'Shortlist',
		GST_COLLECTED: 'GST Collected',
		FOLLOW_US: 'Follow Us',
		SMS_NOTIFICATION: 'SMS Notification',
		CITY: 'City',
		SHIP_PRODUCT_TO_LENSKART: 'Ship Product to Lenskart',
		EXCHANGE_YOUR_PRODUCT: 'Exchange Your Product',
		SALESMAN_NAME: 'Salesman Name',
		APPLICABLE_ONLY_CERTAIN_POWERS: 'Applicable only on certain powers',
		DISCOUNT_APPLIED: 'Applied',
		SIX_LENS_PER_BOX_FOR_1_EYE: 'A box has 6 Lens per Box for 1 eye',
		DELETE_BTN: 'delete-btn',
		OR_SELECT_FROM_EXISTING_DITTO: 'Or Select From Existing Ditto',
		DELIVERY_ADDRESS: 'Delivery Address',
		HOUSE_FLAT_NUMBER: 'House/Flat Number',
		APPOINTMENT_DETAILS: 'Appointment Details',
		STEP_TWO: 'STEP 2',
		RECEIVING_PRODUCT_SUBJECT_TO_EXCHANGE_REFUND:
			'Within 3-5 working days of receiving the original product. Subject to Lenskart exchange/refund',
		KEEP_THE_CAMERA_AT_EYE_LEVEL: 'Keep the camera at eye level',
		SELECT_FROM_A_LIST: 'Select from a list of 1000+ frames',
		'PLEASE_MAKE_PAYMENT_FOR_ORDER ': 'Please make payment for the order',
		SUBMIT_RIGHT_AT_THE_END_OF_ORDER_PLACED:
			'Submit right at the end after order is placed',
		YOUR_ADDRESS_INFORMATION_HAS_BEEN: 'Your address information has been',
		PAY_NOW: 'Pay Now',
		GOLD_BANNER_HEADER: 'gold-banner-header',
		YOUR_PASSWORD_LINK_HAS_EXPIRED: 'Your password link has expired.',
		FACE_SIZE_MEASUREMENT_TOOL:
			'Click here to start the face size measurement tool',
		WARRANTY: 'Warranty',
		SURVEY_SUCCESS: 'survey-success',
		YOU_MAY_UPLOAD_SCANNED_COPY_TEXT:
			'You may upload scanned copy of your prescription saved on your computer.',
		DIRECTIONS: 'Directions',
		AMOUNT_TO_BE_PAID: 'Amount to be Paid',
		ESTIMATED_DELIVERY: 'Estimated delivery',
		NEW_PASSWORD: 'New Password',
		GIVE_MISSED_CALL_TO_PLACE_ORDER: 'Give missed call to place order',
		SYSTEM_ERR_PLEASE_TRY_AGAIN_LATER:
			'System error occurred. Please try again later.',
		YOUR_ADDRESS: 'Your Address',
		SELECT_CATEGORY: 'SELECT CATEGORY',
		PACKAGE_NOT_AVAILABLE_UPGRADATION:
			'This package is not available for upgradation',
		FRAME_SIZE: 'Frame Size',
		WITH: 'with',
		DELIVERY_DELAY: 'Delivery Delay',
		COMPLETE_PAYMENT: 'Complete your payment to process order',
		FAILED_PAYMENT: 'failed-payment',
		PDP: 'PDP',
		WHAT_POWER_WOULD_YOU_LIKE_FOR_THIS_ITEM:
			'What power would you like for this item?',
		ADD_NEW_POWER: 'Add New Power',
		SPECIFICATION_INFO: 'specification info',
		ORDER_ID: 'Order ID',
		MY_FIT: 'My Fit',
		YOUR_NAME: 'Your Name',
		P_FAQ_ANS_9:
			'Ans 9. Unsure? Use our 3D Try-on! Feature – click ‘3D Try-on!’ on the product page of your chosen frame, follow the instructions, and see a 180 degree view of yourself with your chosen frames! Share with your friends and family to find the perfect pair! In addition, we offer a unique ‘Free Home Trial’ service, across India. Select up to 5 frames (from our non-free frame categories) and our delivery executive will bring them to your doorstep for trial!',
		CHOOSE_FROM_PREVIOUS_POWER: 'Choose from your previous powers',
		TAX_COLLECTED: 'Tax Collected',
		BALANCE: 'Balance',
		PICK_FAVOURITE: 'Time to pick your favourites.',
		ENTER_MOBILE_EMAIL_ID: 'Enter Mobile Number / Email ID',
		PLEASE: 'Please',
		LOGIN_WITH_EMAIL: 'Login with Email',
		SHOWING: 'Showing',
		OTHER_UPI_APPS_TEXT: 'Pay with other UPI apps',
		ADDRESS_DELETE_SUCCESS:
			'Address delete request has been processed successfully',
		GOLD_MEMBERSHIP_CAN_ONLY_BE_REFUNDED:
			'Gold membership can only be refunded with all other items of this order',
		IC: 'ic',
		EYE_CHECKUP_APPOINTMENT: 'Eye Checkup Appointment',
		SEND_IT_VIA_EMAIL: 'Send it via Email',
		PLEASE_SEND_US_COPY_OF_PRESCRIPTION:
			'Please send us a copy of your prescription to the below mentioned e-mail address.',
		POWER_OPTION: 'Power Option',
		RIGHT: 'RIGHT',
		LIMITED_SELECTION_OF_FRAMES_IN_STOCK:
			'Limited selection of frames in stock',
		CHECK_DELIVERY_OPTIONS: 'Check Delivery Options',
		USERS_NAME: "User's Name",
		CANT_FIND_YOUR_POWER: "Can't find your power, call",
		SECURE_CARD: 'Secure this card as per RBI guidelines',
		SELECT_NEARBY_STORE: 'Select Nearby Store',
		PHONE_NUMBER: 'phone number',
		CUSTOMER_SUPPORT_NUMBER: '1800-111-111',
		SALESMAN_ID: 'Salesman Id',
		BACK_TO_LOGIN: 'Back to Login',
		PRODUCT_IS_JUST_RIGHT_FIT:
			'This size of the product is just the right fit.',
		HEADER_OPTICIAN_RIGHT: 'header optician right',
		SYMBL_DOT: '.',
		SUNGLASSES: 'Sunglasses',
		PH: 'Ph:',
		NO_PRODUCT_AVAILABLE: 'No Product Available',
		YOUR_PRESENT_LOCATION: 'Your Present Location',
		NEWEST_FIRST: 'Newest First',
		APPLY_COATING: 'Apply Coating',
		SORRY_DELAY_DUE_TO: 'We are sorry, there is a delay in your order due to',
		TO_UPLOAD_THE_POWERS_AGAIN: 'to upload the powers again.',
		SYMBOL_GREATER: '>',
		SAVE_SHIPPING_ERROR:
			'Something went wrong while saving address, please try again',
		SIGN_IN_WITH_FACEBOOK: 'sign in with facebook',
		SHARE_ON: 'Share On',
		APPLY: 'APPLY',
		PICKUP_ADDRESS: 'Pickup Address',
		LOADING_MORE_PRODUCTS: 'Loading more products, please be patient...',
		SHARE_THIS_PRODUCT: 'Share This Product',
		P_FAQ_ANS_1:
			'Ans 1. Gold Membership provides exclusive benefits like Buy One Get One on Eyeglasses for 365 days to its members. Offer can be availed Online or at 400+ Stores across India. You can share membership benefits with your family with no upper limit to number of orders placed. Membership is valid on 1000+ products and it is priced at ₹600 for first 10,000 members.',
		FILTER: 'FILTER',
		SKIP: 'SKIP',
		ACCOUNT_INFORMATION: 'Account Information',
		OLD_PRODUCT_EXCHANGE_VALUE: 'Old Product Exchange Value',
		APPOINTMENT_HAS_BEEN_CANCELLED: 'Appointment has been cancelled',
		FORWARD_SLASH: '/',
		DOWNLOAD_PARA: 'Eyeglasses, Sunglasses and Contact Lenses.',
		VERIFICIATION_LINK_SENT: 'A verification link has been sent to',
		P_FAQ_ANS_8:
			'Ans 8. We offer OPTO, a FREE Home Eye Check-up service to help you ascertain your eye power. Select the ’Home Eye Check-up ‘option after check-out or on our homepage, pick a time that is convenient and our trained optometrists will be there to assist you! [Note: Available in metro cities only]',
		PLEASE_ENTER_PURCHASE_ORDER_NUMBER:
			'Please Enter Your Purchase Order Number',
		VW: 'vw',
		TAKE_A_CARD: 'Take a Debit/Credit card',
		SAME_PRICE_NO_MATTER_POWER: 'Same price no matter what your power',
		SAVED_CARDS: 'Saved Cards',
		PRODUCT_OFFER: 'Product Offer',
		WHATSAPP_CHAT_URL:
			'https://api.whatsapp.com/send/?phone=918929853854&text=',
		YOUR_FRAME_SIZE_IS: 'Your frame size is',
		SORRY_YOUR_LOCATION_NOT_SERVICEABLE:
			'Sorry, your location is not serviceable',
		GREAT_YOU_CAN_APPLY:
			'Great! You can apply a discount coupon/reward points during step 3 of the checkout process.',
		IMG: 'img',
		SEO_DESCRIPTION_FIRST_HALF: 'Shop online for latest collection of',
		ERROR: 'error',
		OFFER_LOGO: 'offer logo',
		GPAY_PHONEPE_PAYTM: 'GPay/PhonePe/Paytm',
		LENS_ONLY_PRODUCTS_ARE_NOT_AVAILABLE:
			'Lens only products are not available for this pincode. Please try another pincode to check availibility.',
		POWER_NOT_SUBMITTED_SUCCESSFULLY:
			'Power not submitted successfully, Please try again!',
		TOTAL_INCL_GST: 'Total (Incl. GST)',
		SHARE_OR_DOWNLOAD_LABEL: 'SHARE OR DOWNLOAD LABEL',
		VALID_UPTO: 'Valid Upto',
		SEND_YOURSELF_OTP: 'Send yourself another OTP in',
		POWER_DETAILS: 'Power Details',
		SUBMIT_EYE_POWER: 'submit eye-power',
		SAFARI: 'Safari',
		NO_PACKAGES_FOUND:
			'No packages found for selected prescription type, please try another type or frame',
		TO_BE_PAID_FOR_THIS_EXCHANGE: 'to be paid for this exchange',
		SYMBOL_COLON: ':',
		UPDATE: 'Update',
		PROBLEM_IN_PLACING_ORDER: 'Problem in placing order ? Give a missed call',
		AUTOADDBANNER_ONE: 'autoAddBanner1',
		THIS_IS_COLLECTION_PAGE: 'This is Collection page...',
		SUBMIT_REASON: 'Submit Reason',
		SHOP_FROM_INSTA: 'Shop from our Instagram',
		BOTH_EYES: 'BOTH EYES',
		A_NEW_OTP_SENT: 'A new OTP sent to your mobile number',
		PREPAID_DISCOUNT: 'Prepaid Discount',
		BUYONCHAT_HELP_CTA_CART:
			'Hi Lenskart, help me get started! I am on <pageName> page of mobile site. I need help for product ID: <pid-no>',
		WILL_THIS_FIT_ME: 'Will this fit me?',
		P_FAQ_ANS_3:
			'Ans 3. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!',
		NEW_TO_LENSKART: 'Are you new to Lenskart?',
		ENTER_EMAIL_ID: 'Enter Email Id',
		TRACKING_STATUS_ICON_ALT: 'tracking status icon',
		VIEW_ALL: 'View All',
		NO_PAYMENT_NEEDED_FOR_EXCHANGE: 'No payment needed for this exchange',
		SHOP_FOR_PRODUCTS_ADD_ITEMS:
			'Shop for products and add items to the cart',
		EYE_POWER_TYPE: 'Eye Power',
		T_C: 'T&C',
		TRY_ON: 'Try On',
		WEBSITE: 'Website',
		NEED_HELP: 'Need Help',
		REDIRECT_TO_CONFIRMATION: 'Redirecting to Order Confirmation',
		SUBMIT_PRESCRIPTION_FOR_EXISTING_ORDER:
			'Submit prescription for your existing order at lenskart. Enter Mobile No. you mentioned in the order and we will SMS a link to you for submitting power:',
		ORDER_DETAILS: 'Order Details',
		OUT_OF_TOWN: "Looks like you're out of town🙃",
		VOUCHER_DISCOUNT: 'Voucher Discount',
		PARAMETER_MISSING: 'Parameter missing.',
		APPOINTMENT_NOT_CANCELLED: 'Appointment not cancelled',
		TAKE_YOUR_GLASSES_OFF: 'Take your glasses off',
		ENTER_4_DIGIT_OTP: 'Enter 4-Digit Otp',
		YOU_WILL_RECEIVE_EMAIL_TO_RESET_PASSWORD:
			'You will receive an email with a link to reset your password',
		ORDER_TOTAL: 'Order Total',
		PAYMENT_PENDING: 'Payment Pending',
		P_FAQ_ANS_11:
			'Ans 11. We understand that a pair of glasses is only as good as the lenses fitted in them. Most anti-glare lenses cost between ₹1,500 - 2,000 at your local optician. At that price we give you robotically fitted, anti-glare lenses, with a 1.6 index which is ~35% thinner than market average. In addition we offer UV-400 protection on all our lenses, similar to what is provided in lenses across Europe and the USA',
		CANNOT_FIND_ANY_STORE: 'Cannot find any store. Please try a new location',
		B: 'B',
		PLEASE_ENTER_MOBILE_NUMBER: 'Please enter mobile number',
		CREATE_NEW_3D: 'Create new 3D',
		VERIFY_YOUR_SALESMAN_DETAILS: 'Verify Your Salesman Details',
		SHAPE: 'Shape',
		VIEW_IN_3D: 'VIEW IN 3D',
		NO_CUSTOMER_FOUND: 'No customer Found',
		EXPIRED_AT: 'Expired at',
		ENTER_YOUR_PINCODE: 'Enter your Pincode',
		YOU_CAN_SHORTLIST_UPTO_50: 'You can shortlist upto 50 products at a time',
		PD_UPLOADED_WILL_ASSIST_YOU:
			', we might call within 24hrs & assist you if needed',
		PLEASE_VERIFY_THE_SALEMANID: 'Please verify the salemanId and try again',
		PLEASE_DOWNLOAD_APP_TO_TRY_3D_TRYON:
			'Please Download the App from </br><b>Play Store or App Store</b></br>to try in 3D',
		PARTY: 'Party',
		ADDRESS_TO_PROCEED: 'We need your address to proceed',
		ID: 'Id',
		P_FAQ_Q_3:
			'Ques 3. What if I buy glasses & they don’t fit me? What if the lenses aren’t right ?',
		COUPON_CODE: 'Coupon Code',
		TO_CONTINUE_WITH_EXCHANGE_REFUND:
			'to continue with exchange/refund process',
		EXCHANGE: 'Exchange',
		YOU_ARE_ON_INDIAN_WEB: 'You are on our Indian Website.',
		PAYMENT_OPTIONS: 'Payment Options',
		I_AGREE: 'I Agree',
		ONE_TIME_ORDER: 'One Time Order',
		PLEASE_ENTER_LEFT_EYE_PD: 'Please Enter Left Eye PD',
		LENS_HEIGHT: 'Lens Height',
		PROMOTIONAL_DISCOUNT: 'Promotional Discount',
		HEIGHT_OF_LENS: 'Height of Lens',
		EXCHANGE_PRODUCTS_GET_REFUND: 'Exchange Products / Get Refund',
		AVAILABLE_COUPONS: 'AVAILABLE COUPONS',
		YOUR_PUPILLARY_DISTANCE_TEXT:
			'Your Pupillary Distance is the distance between your pupils. It helps us fine-tune your lenses to your eyes.',
		TOTAL_HEIGHT: 'Total Height',
		PASSWORD: 'Password',
		PRODUCT_IMAGE: 'product image',
		CALL_YOU_IN_FEW_MINS: 'We will call you back in 15 mins',
		IN_TRANSIT: 'In Transit',
		YOUR_DETAILS_FOR: 'Your details for',
		SOMETHING_WENT_WRONG_PLEASE_TRY_AGAIN:
			'Something went wrong! Please try again!',
		ORDER_PROCESSED_SHORTLY_CHECK_ADDITIONAL_DETAILS:
			'on Lenskart.com is confirmed & will be processed shortly. Please check your email for additional details.',
		NET_AMOUNT: 'Net Amount',
		P_FAQ_ANS_6:
			'Ans 6. You can submit your power details after you complete your purchase. We offer multiple options to provide your prescription to us – upload a picture, enter it online, email us (power@lenskart.com) or call us at +91-9999899998',
		SHARE_YOUR_FEEDBACK: 'Share Your Feedback',
		YOU_HAVE_SUCCESSFULLY_CANCELLED_PRODUCT_RETURN:
			'You have successfully cancelled product return',
		DURATION: 'Duration',
		TIME_TO_PICK_UP_YOUR_FAVOURITE: 'Time to pick up your favourite',
		REVIEW_PENDING_FOR_PUBLISH:
			'Your review was sent successfully and is now wating for our staff to publish it.',
		ENTER_EMAIL: 'Enter email',
		YOU_MUST_HAVE_AN_IDENTITY_PROOF:
			'You must have an identity proof for the shipping id mentioned while transacting such as driver’s license, passport copy, recent bank statement etc.',
		WE_ARE_KEEN_TO_DELIVER_YOUR_ORDER_EARLIEST:
			'We are very keen to deliver your order at the earliest.',
		MOST_VIEWED: 'Most Viewed',
		FOOTER_LOGO: 'footer-logo',
		SYSTEM_ERROR_PLEASE_TRY_AGAIN:
			'System Error, Please try after some time.',
		NOT_AVAILABLE_WITH_CASH: 'Not available with cash on delivery order.',
		STICKER: 'sticker',
		AM: 'AM',
		DATE_TIME: 'Date/Time',
		UNABLE_TO_SERVE_YOUR_REQUEST:
			'Unable to serve your request at the moment',
		CONFIRM_ORDER: 'Confirm',
		GOOGLE_PAY_ICON: 'Google Pay icon',
		CHAT: 'Chat',
		SELECT_STORE: 'Select Store',
		UPDATED_SUCCESSFULLY: 'updated successfully!',
		SELECT_YOUR_LENS: 'Select Your Lens',
		SELECT_BANK: 'Select Bank',
		APPOINTMENT_BOOKED: 'Appointment Booked',
		OLD_PRODUCT_DISCOUNT: 'Old Product Discount',
		PICKUP_COMPLETED: 'Pickup Completed',
		AMOUNT_BEING_REFUNDED: 'Amount Being Refunded',
		NEITHER_EXCHANGE_NOR_REFUND_AVAILABLE:
			'Neither exchange nor refund available.',
		YOUR_PREFERNCES_SAVE_SUCCESSFULLY: 'Your preferences save successfully',
		TECHNICAL_ERROR_OCCURRED: 'Technical error occurred',
		RECENTLY_VIEWED_PRODUCTS: 'Recently Viewed Products',
		CREATE_NEW_DITTO: 'Create New Ditto',
		EITHER: 'Either',
		PHONE_CALL: 'Phone Call',
		HAVE_BEEN_SUCCESSFULLY_CAPTURED: 'have been successfully captured.',
		EXCHANGE_AT: 'Exchange At',
		PRODUCT_DATA_NOT_FOUND: 'Product data not found.',
		WE_HAVE_SENT_STORE_CREDIT_CODE:
			'We have sent the Store Credit Code via SMS on your Phone number',
		CART_DISCOUNT: 'Cart Discount',
		DONT_KNOW_MY_POWER: "I don't know my power",
		SYMBOL_COMMA: ',',
		CLICK: 'Click',
		HIDE_DETAILS: 'Hide Details',
		GIFT_WRAP_MY_ORDER: 'Gift Wrap my order',
		P_FAQ_ANS_13:
			'Ans 13. We promise to deliver your purchases to you as quickly as possible. We dispatch your order within ~5-12 days of order confirmation (and receipt of your prescription, if needed), based on the products ordered. It takes 2-5 days to get delivered to you post-dispatch, based on your location.',
		PERFECT_MATCH: 'Perfect Match',
		TRACK_COURIER: 'Track Courier',
		FIFTY_PER_LOWER_PRICES:
			'50% lower prices than local optician (on average)',
		LOGIN: 'Login',
		GOOGLE_PAY_TEXT: 'Google Pay',
		OTP_SENT_TO: 'OTP has been sent to',
		LENS_WIDTH: 'Lens Width',
		WILL_BE_CREDITED_TO_LK_WALLET: 'will be credited to your Lenskart Wallet',
		ONETIME: 'ONETIME',
		TRACKING_DETAILS: 'Tracking Details',
		SPH: 'sph',
		SELECT_YOUR_REFUND_MODE: 'Select Your Refund Mode',
		FRAME_PRICE: 'Frame Price',
		NEARBY_STORES_FOUND: 'Nearby Stores Found',
		REQUEST_CALL_BACK: 'Request a call back',
		YOU_ARE_LOGGED_IN: 'You are logged in',
		WE_ARE_HERE_TOP_HELP: 'We are here to help',
		SELECT_TIME: 'Select Time',
		EDIT_ACCOUNT_INFORMATION: 'Edit Account Information',
		VIEW_LESS: 'View Less',
		PLEASE_ADD_PRODUCTS_OF_YOUR_CHOICE:
			'Please add products of your choice and view here.',
		AUTOADDOFFER: 'autoAddOffer',
		ORDER_DATE: 'Order Date',
		PAYMENT_UNSUCCESSFUL: 'Payment Unsuccessful',
		FORGOT_PASSWORD: 'Forgot Password',
		PRESCRIPTION_UPLOADED: 'Prescription Uploaded',
		DELIVERY_CHARGES_MAY_APPLY: 'Delivery Charges may apply',
		WRITE_HERE: 'Write here',
		VINCENT_CHASE_JOHN_JACOBS: 'Vincent Chase,John Jacobs',
		HANG_ON_WHILE_WE_CONFIRM_YOUR_PAYMENT:
			'Hang on while we confirm your payment.',
		INSURER_ORDER_PENDING:
			'We are confirming the status of your order from Medibuddy which may take upto 60 minutes.',
		SYMBL_HASH: '#',
		ORDER_PLACED: 'Order Placed',
		OUT_OF_STOCK: 'OUT OF STOCK',
		P_FAQ_Q_10: 'Ques 10. How can I be sure of the quality of the frames?',
		EXCHANGE_OR_REFUND: 'Exchange or Refund',
		INCORRECT_ITEMID_IN_URL: 'Incorrect ItemID in the URL',
		CANT_FIND_YOUR_POWER_CALL: 'Can’t find your power, Call 8470007367',
		ADD_GOLD_TO_GET_DISCOUNT: 'Add back Gold Membership to get discount',
		LEGAL_DETAILS: 'Other Details:',
		CREATED: 'Created',
		PRODUCT_RETURNED: 'Product returned',
		ENTER_CARD_NUMBER: 'Enter Card Number',
		CALL_FOR_POWER_NUMBER: '+91 8470007367',
		CANCEL_REQUEST: 'Cancel Request',
		SELECT_ADDRESS: 'Select Address',
		NO_STORES_FOUND_AT_THIS_LOCATION: 'No stores found at this location',
		TRY_EYEFRAMES_AT_HOME: 'Try 100s of best selling eyeframes at home',
		PHONE: 'Phone',
		CHECK_VOUCHER_BALANCE: 'Check Voucher Balance',
		PERFECT_FIT_PROMISE: 'Perfect Fit Promise',
		BLUECUT_INFO: 'bluecut info',
		PRODUCT_SHIPPED_NON_CANCELLEABLE:
			'Some items in this order have been shipped and hence order cannot be cancelled.',
		MATCHING_KEYWORDS: 'Matching Keywords',
		WE_PROVIDE_CASH_ON_DELIVERY:
			'We provide cash on delivery for your location.',
		ADDRESS: 'Address',
		BY_PROCEEDING_YOU_AGREE_TO_OUR: 'By proceeding you agree to our',
		BY_PLACING_ORDER_AGREED_TEXT:
			'By placing the order, I have read and agreed to lenskart.sg',
		INVALID_PINCODE: 'INVALID PINCODE',
		CHOOSE_OTHER_PAYMENT_OPTIONS: 'Choose other payment options',
		CHANGE_IN_POWER: 'For any change in Power, click here',
		THERE_IS_PROBLEM_ADDING_ITEM:
			'There is problem adding item to cart, Please try again.',
		THIS_WILL_CANCEL_RETURN_OF_ITEMS_RETURNED:
			'This will cancel return of ALL items being returned',
		CARDHOLDER_NAME: 'Cardholder Name',
		PRESCRIPTION_TYPE: 'Prescription type',
		PLEASE_PROVIDE_US_RATING: 'Please provide us rating',
		SHIP_PRODUCT: 'Ship your product to',
		P_FAQ_Q_9:
			'Ques 9. I really, really want to try the frames on before making a purchase!',
		PACKAGE_DETAILS: 'Package Details',
		POWER: 'POWER',
		DANG_YOUR_CART_IS_EMPTY: 'Dang! Your bag is empty',
		SELECT_EMAIL: 'Please select an email address to link',
		THIS_PRODUCT_CANNOT_BE_EXCHANGED:
			'This product cannot be exchanged for a different product right now, please choose other options.',
		LOGGED_IN: 'Logged In',
		STORE_CREDIT_ORDER_HISTORY: 'Store Credit Order History',
		GO_AHEAD_AND_PLACE_YOUR_ORDER:
			"So go ahead and place your order & reserve your favourite eyewear while it's in stock",
		NO_RESULT_FOUND: 'No results found',
		COPY_NOT_SUPPORTED_TEXT:
			'Copy not supported or blocked. Press Ctrl+c to copy.',
		I_WILL_EMAIL_MY_PRESCRIPTION: 'I will email my prescription to',
		MM: 'mm',
		P_FAQ_ANS_2:
			'Ans 2. We offer glasses in 3 sizes – small, medium, and large. Click the ‘Frame Size’ link at the bottom of the page to know your size. ~95% of our customers find a medium size frame to be the best fit.',
		RETRIEVE_YOUR_PASSWORD: 'Retrieve your password here',
		CYL: 'cyl',
		UNABLE_TO_CREATE_REFUND:
			'Unable to create refund now, please try again later',
		NEXT: 'next',
		PASSWORD_VALIDATION_FAILED: 'Password must be of minimum 6 characters',
		CONFIRM_REFUND: 'CONFIRM REFUND',
		NET_AMOUNT_BEFORE_TAX: 'Net Amount before Tax',
		LOCALITY_TOWN: 'Locality / Town',
		FEATURE_NOT_SUPPORTED_ON_YOUR_BROWSER:
			'Sorry! This feature is not supported in your current browser',
		ADD_POWER: 'ADD POWER',
		FILTER_PRODUCTS: 'FILTER PRODUCTS',
		AREA_STREET_LANDMARK: 'Area, Street & Landmark',
		REFUND_AMOUNT_TEXT_1: 'In addition to above refund amount, refund of',
		PREV: 'prev',
		MANDATORY: 'Mandatory',
		POWER_SUBMIT: 'Submit Power',
		PRODUCT_THUMBNAIL: 'product-thumbnail',
		COMPLETE_YOUR_PAYMENT: 'Complete Your Payment',
		LOCAL: 'Local',
		ADDITIONAL_NOTES: 'Additional Notes',
		YOUR_SHOPPING_CART_EMPTY: 'Your shopping cart is empty',
		WAREHOUSE_ADDRESS: 'Warehouse Address',
		OTP: 'OTP',
		SEE_THESE_FRAMES_IN_ACTION: 'See these frames in action',
		REMOVE_OFFER: 'Remove Offer',
		ADD_NEW_ADDRESS: 'Add New Address',
		ALREADY_REGISTERED: 'If you are already registered',
		FOR_POSTING_REVIEW: 'For posting a Review.',
		CLOSE_ICON: 'close icon',
		ENTER_UPI_ID: 'Enter your UPI Id',
		MONEY_BACK_GUARANTEE_ON_EVERYTHING:
			'Money-back guarantee - on everything',
		DELIVERY_TO: 'Delivery To',
		APPLY_STORE_CREDIT: 'Apply Store Credit',
		CANCEL_APPOINTMENT_TO_ADD_POWER:
			'Cancel your appointment then you can add the power',
		NOTHING_IN_PARTICULAR: 'Nothing in Particular',
		CURRENT_PASSWORD: 'Current Password',
		ENTER_PRESCRIPTION_MANUALLY: 'Enter Prescription Manually',
		FIND_YOUR_FRAME_SIZE_EASILY: 'Find your frame size easily',
		FRAME_SIZE_KEY_DESKTOP:
			'9235f53b0d1753253nf799b2712482fb4c05a8224a8ua885d07502e0ea81e3fb',
		LENS_SOLUTION_FOR_YOUR_CONTACT_LENS:
			'LENS SOLUTION FOR YOUR CONTACT LENS',
		ONE_STEP_AWAY: 'One Step Away',
		CANNOT_DELIVER_AT_THIS_PINCODE: 'Cannot deliver at this pincode',
		ONLINE_PAYMENT_AND_COD_OPTIONS_AVAILABLE:
			'Online payment and COD options are available',
		ALTERNATE_PHONE_NO: 'Alternate Ph. No.',
		ENTER_SALESMAN_ID_MANDATORY: 'Enter Salesman ID (Mandatory)',
		ORDER: 'Order',
		ABOUT_THE_PRODUCT: 'About The Product',
		NO_RESULT: 'No Result Found!!!',
		BUY_ON_APP: 'BUY ON APP',
		THIS_SIZE_OF_THE_PRODUCT_IS: 'This size of the product is',
		COATING_APPLIED: 'Coating Applied',
		WHATSAPP: 'Whatsapp',
		PLEASE_ENTER_VALID_EXPIRY_DATE: 'Please enter a valid expiry date.',
		ASK_FRIENDS_HOW_THIS_LOOKS: 'ASK FRIENDS HOW THIS LOOKS',
		CUSTOMER_CARE_NUMBER_1: '99998 99998',
		SAME_FRAME_SAME_LENS: 'Same frame Same lens',
		CALL_STORE: 'Call Store',
		SIMILAR_PRODUCTS: 'Similar Products',
		FOR_AMOUNT: 'For Amount',
		WISHLIST: 'Wishlist',
		VIEW_FRAMES: 'VIEW FRAMES',
		CLEAR_LIST: 'Clear List',
		OUR_EMAIL_address_TEXT:
			'Our email address will be displayed where you may mail us an image of your prescription.',
		FREE_RETURN: 'Free Return',
		EYEWEAR_EXPERT: 'Eyewear Expert',
		T_C_APPLY: 'T&C Apply',
		ENTER_GV: 'Enter Voucher Code',
		CONFIRM_DETAILS: 'CONFIRM DETAILS',
		DOB: 'DOB',
		XPRESS_DELIVERY_DETAILS: 'Xpress Delivery Details',
		USE: 'Use',
		LEARN_MORE: 'LEARN MORE',
		PLEASE_SELECT_A_NEW_ADDRESS_FOR_A_PICKUP:
			'Please select a new address for a pickup',
		VIEW_IMAGE: 'VIEW IMAGE',
		ARE_YOU_SURE_YOU_WANT_TO_CANCEL_YOUR_APPOINTMENT:
			'Are you sure you want to Cancel your appointment',
		SELECT_GENDER: 'SELECT GENDER',
		ALL_PRODUCTS: 'All Products',
		PRESCRIPTION_SUCCESSFULLY_SUBMITTED:
			'Prescription Successfully submitted!',
		VIEW_POWER_DETAILS: 'View Power Details',
		SUBMIT_BANK_DETAILS: 'SUBMIT BANK DETAILS',
		SHOPPING_CART: 'SHOPPING CART',
		GET_PHONE_ASSISTANCE: 'Get phone assistance from our optometrist',
		BOOK_HOME_TRIAL: 'Book Home Trial',
		EXPECT_A_CALL_FROM_OUR_TEAM:
			'You can expect a call from our team within 24 hours.',
		HELLO: 'Hello',
		REFUND_WILL_BE_PROCESSED: 'then your refund will be processed',
		EMAIL: 'Email',
		CONTACT_LENS: 'Contact Lens',
		CONFIRM_YOUR_COD_ORDER: 'Confirm your COD Order',
		KNOW_MORE: 'Know More',
		CHANGE_LENS_WIDTH_BY: 'Change lens width by',
		RETURN_CANCELLED: 'Return Cancelled',
		POWER_NOT_KNOWN: 'Power not known',
		SIGN_IN: 'Sign In',
		MODIFIED_VALUE: 'Modified Value',
		PAGE_AUTOMATICALLY_EXPIRE_TEXT: 'The page will automatically expire in',
		ALL_POWER_FIELDS_ARE_MANDATORY: 'All power fields are mandatory',
		WE_HAVE_NOT_FOUND_ANY_ORDERS:
			'We have not found any Orders for this account!',
		DITTO_TRY_ON_HEADING: '3D Try On',
		CONFIRM_ORDER_BTN_TEXT: 'Confirm',
		ANY_CONCERNS_OR_FEEDBACK: 'Any concerns or feedback please',
		THIS_ENSURES_DISTANCE: 'This ensures that the distance between',
		TO_BE_PAID: 'to be paid',
		YOU_CAN_SUBMIT_AT_THE_END: 'You can submit your power at the end',
		BUYONCHAT_HELP_CTA_PDP:
			'Hi Lenskart, help me get started! I am on <pageName> page of mobile site. I need help with product ID: <pid-no>',
		ONCE_PRODUCT_IS: 'Once the product is',
		LOCATION_MARK: 'Location mark',
		ORDER_NO: 'Order no',
		LEAD_SOURCE: 'Lead Source',
		'THE_FOLLOWING_ORDERS_RECEIVED_STORE CREDIT':
			'The following are the orders against which you have received Store Credit. In case you have lost/misplaced the code, press the Send Credit Code button next to the order. You will receive a mail on the id you registered with.',
		UPI_VERIFY_TEXT: 'UPI Id Verified! Press "Proceed To Pay" to continue',
		VERIFY_SALESMAN_ID: 'Verify Salesman Id',
		ENTER_CODE: 'Enter Code',
		YOU_WANT_TO_BUY_FOR: 'You want to buy for?',
		PLEASE_CLICK_ON_GENERATE_QR_CODE:
			'Please click on Generate QR Code & Place Order',
		FRAME_SIZE_KEY_MSITE:
			'9235f53b0d1753253nf799b2712482fb4c05a8224a8ua885d07502e0ea81e3fb',
		LOGIN_SIGNUP_TEXT: 'Login/Sign Up to manage your orders & more!',
		LINK_COPIED: 'Link Copied',
		MORE: 'More',
		CANNOT_BE_TAKEN_PRODUCT_AS_PER_POLICY:
			'cannot be taken for this product as per our policy.',
		CALL_ME: 'Call Me',
		STORE_LOCATOR: 'Store Locator',
		FACEBOOK: 'Facebook',
		YES_I_AM_SURE: 'Yes, I am sure',
		DR_UJJWAL_SONIKA_AIIMS_CONTENT:
			'I had seen these stylish products off and on, and finally bought a pair of rimless glasses from their store. I love the quality of the frames and the precision with which my lenses have been made and fitted. They are very professional with what they do. Good work!',
		PID: 'PID',
		PROCEED_TO_PAY: 'Proceed TO PAY',
		NO_RETURN_METHOD_AVAILABLE: 'No Return method available',
		EXPIRY_DATE: 'Expiry Date',
		ENTER_PRESCRIPTION_AFTER_CHECKOUT: 'Enter prescription, after Checkout',
		AT: 'AT',
		AFTER_YOU_COMPLETE_THE_CHECKOUT_PROCESS:
			"After you complete the checkout process you'll be able to choose your lens power online. We don't charge for adding power to lens!",
		SUBMIT_POWER_TO_CONTINUE: 'Submit Power to Continue',
		WHO_ARE_YOU_SHOPPING_FOR: 'Unlock Your New Gold Membership',
		OR_SIGN_IN_USING: 'Or Sign In using',
		ADDRESS_BOOK: 'Address Book',
		POWER_CHECKUP_SCHEDULED_AT_HOME: 'Power checkup scheduled at home.',
		NUM_365_PLUS: '365+',
		SC_CODE: 'Store Credit Code',
		THERE_IS_NO_PACKAGE: 'There is no package',
		TOMORROW: 'Tomorrow',
		DISTANCE: 'Distance',
		ANY_BHIM_UPI_QR_CODE_SCANNER: 'Any BHIM UPI QR Code Scanner',
		FILL_FORM: 'Fill Form',
		LOGO: 'logo',
		PACKAGE: 'Package',
		SELECT_LENS_PACKAGE: 'Select Lens Package',
		IMPORTANT: 'Important',
		DELETE_THE_IMAGE: 'Delete the Image ? ',
		NO: 'NO',
		EXCHANGE_RETURN: 'Exchange/Return',
		UPI_APP_TO_APPROVE_TEXT:
			'Open your UPI app to approve the payment request from Lenskart',
		MORE_ABOUT: 'More about',
		CONTINUE_PAYMENT: 'CONTINUE PAYMENT',
		CALL_ME_EMAIL_ME_FOR_POWER: 'Call Me/Email Me for Power',
		LK_CASH_PLUS: 'LK Cash+',
		ALL_SIZES_VALUE: 'XN, N, M, W & XW',
		ESTIMATED_DELIVERY_AT: 'Estimated delivery at',
		COD_AND_POWER_PENDING: 'COD Confirmation & Power Submission Pending',
		RECOMMENDED: 'RECOMMENDED',
		SET_DEFAULT: 'Set Default',
		DO_NOT_REFRESH_PAGE: 'Do not refresh this page',
		WHEN_CAN_I_SPECIFY: 'When can I specify my lens power?',
		WHAT_DO_YOU_WANT_TO_EXCHANGE: 'What do you want to Exchange it with?',
		SPHERICAL: 'Spherical',
		BEST_PRICE_GUARANTEED: 'Best Price Guaranteed',
		NO_ADDITIONAL_CHARGES: 'No additional charges for high/complex power',
		COPY_NOT_SUPPORTED_OR_BLOCKED:
			'Copy not supported or blocked. Press Ctrl+C to copy.',
		I_HAVE_AN_ACCOUNT: 'I Have an account (Login to checkout faster)',
		GET_ALL_PREVIOUS_OFFERS: 'Get all previous offers',
		CHOOSE_ACCT:
			'Please choose from one of the below accounts to connect your Order History and Store Credit',
		WAS_REFUNDED_VIA_STORE_CREDIT_CODE:
			'was refunded via Store credit code. Details below',
		NO_OFFERS_FOUND: 'No Offers found',
		YOU_WILL_BE_REDIRECTED_TO_NEW_PAGE:
			'You will be redirected to a new page to scan the QR Code',
		MANAGE_DELIVERY: 'Manage your Delivery :',
		P_FAQ_ANS_12:
			'Ans 12. All the brands are chosen after carefully looking at their product quality, manufacturing processes, and customer service. There are some brands which we have brought to Indian from countries such as Italy, to introduce them to the Indian market and you to their superior products.',
		INFORMATION_UPDATE_SUCCESSFULLY: 'Information update successfully.',
		TRACKING_ICON: 'Tracking Icon',
		COPY: 'Copy',
		NUM_ONE: '1',
		ENTER_PHONE_NUMBER: 'Enter Phone Number',
		YOU_WANT_TO_DELETE_DITTO: 'Are you sure, you want to delete your Ditto?',
		APPLIED: 'applied',
		TO_PURCHASE_FROM: 'To Purchase from',
		REFUND_AMOUNT_TEXT_2:
			'has already been taken earlier against this product',
		ADD_PRESCRIPTION_BTN: 'add prescription btn',
		CONTINUE_EXCHANGE: 'Or continue exchange in the other tabs if applicable',
		KNOW_YOUR_FRAME: 'know your frame',
		RESET_FILTERS: 'Reset Filters',
		CHECK: 'CHECK',
		REFUND: 'Refund',
		RESEND: 'Resend',
		WHAT_WOULD_YOU_LIKE_TO_DO_EXCHANGE_REFUND:
			'What would you like you to do?',
		NO_ITEM_IN_THIS_CART:
			'There is no item in this cart. please click the following links to shop for products to add into your cart.',
		CHECK_DELIVERY: 'Check Delivery',
		MORE_FILTERS: 'MORE FILTERS',
		FACE_AND_PHONE: 'your face and the phone is appropriate',
		GV: 'Gift Voucher',
		PLEASE_ENTER_A_VALID_EMAIL_ADDRESS: 'Please enter a valid Email Address',
		RESET_PASSWORD: 'Reset Password',
		HEAD_TURN_IMAGE_MALE: 'head turn image male',
		FIND_STORES_NEAR_MY_LOCATION: 'Find stores near my location',
		ENTER_BANK_DETAIL_TO_GET_REFUND:
			'Enter your bank details to get refund via NEFT',
		MY_PRESCRIPTIONS: 'My Prescriptions',
		PRECISION_MADE_FOR_PERFECT_ACCURACY:
			'Precision made for perfect accuracy every time - How Lenskart is beating your local optician',
		EDIT: 'Edit',
		OUR_INSTAGRAM_COMMUNITY: 'Our Instagram Community',
		IF_YOU_CANT_SEND_PRESCRIPTION:
			'within 24 hours. If you cant send prescription, Our executive will call you on this',
		EXCHANGE_PRODUCT_NOW: 'Exchange Product Now',
		CONFIRM_RETURN_REQUEST: 'CONFIRM RETURN REQUEST',
		PRODUCTS: 'PRODUCTS',
		FRAME_SIZE_IS_AVAILABLE: 'Frame Size is available on<br/>Lenskart App',
		CYLINDRICAL: 'Cylindrical',
		WHATSAPP_LOGO:
			'https://static.lenskart.com/media/desktop/img/25-July-19/whatsapp.png',
		LESS_FILTERS: 'LESS FILTERS',
		DISPATCHED: 'Dispatched',
		ADDITIONAL_PLUS_POWER_IN_LOWER_PORTION:
			'It is additional plus power in the lower portion of a bifocal / progressive lens that is required for near vision. It is usually a + power (like +1.5, +2.5, etc)',
		WHAT_IS_PD: 'What is PD',
		ALL_FILTERS: 'ALL FILTERS',
		SEO_DEFAULT_TITLE:
			'Lenskart.com Offers on Sunglasses, Eyeglasses & Contact Lens - Buy One Get One for Gold Members',
		FOLLOW_NEXT_STEPS_TO_FIND_SIZE:
			'Follow the next steps to help us find you the right size',
		PINCODE: 'Pincode',
		EMAIL_IS_SUCCESSFULLY_SEND: 'Email is successfully sent!',
		INCLUDING_POWER_LENSES: 'INCLUDING POWER LENSES',
		PRICE_HIGH_TO_LOW: 'Price : High to Low',
		ALL_BANK_OFFERS: 'All Bank Offers',
		GOLD_TNC_HTML:
			"*2nd pair to be bought in same transaction, Lens upgrade to be paid separately for both eyeframes. Not applicable on Ray-Ban, Oakley, Vougue, Carrera, etc..<a href='/loyalty' target='_blank'>Know More</a>",
		RESET_YOUR_PASSWORD: 'Reset your Password',
		CONFIRM_EXCHANGE_REFUND: 'Confirm Return/Exchange',
		MY_SAVED_LIST_ON_LENSKART_COM: 'My saved list on Lenskart.com',
		SECURE_CARD_SUBTEXT_2:
			'Avoiding entering card details everytime you transact on Lenskart using this card',
		HEY_WAIT: 'Hey, Wait!!',
		TWITTER: 'Twitter',
		SELECT_YOUR_SAVED_PRESCRIPTIONS: 'SELECT FROM YOUR SAVED PRESCRIPTIONS',
		SUBTOTAL: 'Subtotal',
		CART: 'Cart',
		SPHERICAL_POWER: 'Spherical Power (SPH)',
		LKCASH_IN_THIS_ORDER: 'LKCash in this order',
		DOWNLOAD_APP_FOR_AR: 'For Faster AR Experience, Download App',
		CONTINUE_TO_EXCHANGE: 'CONTINUE TO EXCHANGE',
		ORDER_PLACED_DIFF: 'Order Placed!!',
		SEEMS_LIKE_THE_PAGE_CANNOT_BE_FOUND:
			"Seems like the page you were looking for cannot be found. Don't worry.",
		TOLLTIP: 'tolltip',
		WHAT_FRAME_SIZE_WILL_FIT_ME: 'WHAT FRAME SIZE WILL FIT ME',
		SUCCESSFULLY_SAVED_NEFT_DETAILS:
			'Successfully saved the neft details, thank you.',
		PUPILLARY_DISTANCE_UPLOADED: 'Pupillary Distance (PD) Image Uploaded',
		FIND_BEST_FRAMES: 'Find frames best suited for you!',
		ENTER_YOUR_PRESCRIPTION: 'Enter Your Prescription',
		EXECUTIVE_GET_IN_TOUCH_FOR_PRESCRIPTION:
			'Our executive will get in touch with you within 24 hours to help you with your prescription.',
		OTHER: 'Other',
		HAS_ALREADY_TAKEN_AGAINST_THIS_PRODUCT:
			'has already been taken against this product. You can get also refund of',
		ADDON_TITLE: 'addOn.title',
		AXIS: 'Axis',
		STORE_CREDIT_BALANCE: 'Store Credit Balance',
		ALIGNED_VERTICALLY: 'aligned vertically',
		P_FAQ_ANS_4:
			'Ans 4. You can buy glasses fitted with your prescription or even the frames standalone. We custom-make glasses with single vision, bifocal, or progressive prescriptions across all powers. Our glasses are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!',
		CHOOSE_PAYMENT_OPTION: 'Choose Payment Option',
		CONTINUE_TO_PAY: 'CONTINUE TO PAY',
		SEARCH_FOR_YOUR_LOCATION: 'SEARCH FOR YOUR LOCATION',
		ACCESS_DENIED: 'Access Denied!',
		VAT_ON_LENS: '0% VAT on Prescribed Contact Lenses',
		WE_ARE_FETCHING_ORDER_DETAILS: 'We are fetching your order details.',
		RM: 'rm',
		PRODUCT_CANCELLATION_INSTRUCTIONS:
			'If you do not want this order, please reject the shipment at the time of delivery. We will process your refund post receipt of the product.',
		CHANGE_POWER: 'CHANGE POWER',
		THIS_WOULD_HELP_US_LOCATE_YOU_BETTER:
			'This would help us locate you better',
		SELECT_PICKUP_ADDRESS: 'Select Pickup Address',
		YOUR_FACE_AND_PHONE: 'sure that your face and the phone are',
		SAVING: 'Savings',
		SIZE_FILTER_SUCCESSFULLY_APPLIED: 'size filter successfully applied',
		BUY: 'Buy',
		PLEASE_ENTER_VALID_EMAIL: 'Please enter a valid email',
		KEEP_ME_POSTED: 'Keep me posted!',
		THANKS_FOR_ORDER: 'Thank you for your order',
		AS_PER_GOVT_GUIDELINES_TEXT:
			"As per govt guidelines, liquid products are not allowed in international orders. Kindly remove the highlighted 'Lens Solution Product(s)' from the cart to proceed further.",
		GOLD_BANNER: 'gold_banner',
		SELECT_LENS: 'SELECT LENS',
		ADDRESS_ADD_UPDATE_SUCCESS:
			'Address add/update request processed successfully',
		NOT_ALLOWED: 'Not Allowed',
		PERFECT_FIT_PROMISE_CONTENT:
			"We know you want to be sure your new glasses fit perfectly. That's why youll have 14 days to trythem, if they aren't right for you simply return them for adjustment, replacement, or a complete refund.",
		ROTATE_IMAGE_CONTAINER: 'rotate image container',
		PROVIDE_US_INFO: ' please provide us your information',
		MORE_OFFERS: 'More Offers',
		FINAL: 'final',
		PLEASE_ENTER_VALID_EMAIL_ADDRESS_EG:
			'Please enter a valid email address e.g. johndoe@domain.com.',
		CONTINUE_IN_BROWSER: 'Continue in Browser',
		FEMALE: 'Female',
		YOUR_ORDER_ALREADY_BEING_PROCESSED:
			'Your order is already being processed',
		SHOP_FROM_INSTAGRAM: 'Shop from our Instagram',
		SHOW_MORE_OPTIONS: 'Show More Options',
		CHECK_ICON: 'check icon',
		GET_INSTALLED_UPI_APPS_TEXT:
			'Proceed to get a list of all installed UPI Apps',
		FRAME_PLUS_LENS: 'Frame + Lens',
		THANKS_FOR_PLACING_YOUR_ORDER_ON: 'Thanks for placing your order on',
		HI: 'Hi',
		TIMINGS: 'Timings',
		GENERATE_QR_CODE_PLACE_ORDER: 'Generate QR Code & Place Order',
		PLEASE_ENTER_YOUR_EMAIL: 'Please enter your email id',
		CONTINUE_WITHOU_3D_TRYON: 'Continue without 3D try on',
		PROVIDE_MORE_INFO: 'please provide us your information',
		PRODUCT_IS_OUT_OF_STOCK: 'Product is Out of Stock',
		PICKUP_EXCHANGE_DETAILS: 'Pickup/Exchange Details',
		REFUND_WILL_BE_DONE_IN_LKCASH_WALLET:
			'Refund will be done in LKCash/LKCash+ wallet',
		PLEASE_REVIEW_YOUR_PRESCRIPTION:
			'Please review your prescription before submitting',
		BUSINESS: 'Business',
		RESULTS: 'Results',
		MY_SAVED_LIST: 'MY SAVED LIST',
		LAST_NAME: 'Last Name',
		FINAL_TOTAL: 'Final Total',
		CHECK_PRODUCT_360: 'Check the product in 360',
		WHERE_WOULD_YOU_LIKE_US_TO_DELIVER: 'Where would you like us to deliver',
		PLEASE_ENTER_OTP_SMS_SENT:
			'Please Enter OTP code SMS sent to your mobile number.',
		USE_SAVED_PRESCRIPTION: 'Use Saved Prescription',
		HI_GUEST: 'Hi, Guest',
		OFFER_TEXT_FOR_GOLD: 'Enjoy Buy 1 Get 1 offer for 365 days',
		CONVENIENT_METHOD: 'Choose the most convenient method for you',
		MY_ACCOUNT: 'My Account',
		SAMPLE: 'sample',
		XPRESS_DELIVERY: 'Xpress Delivery',
		SOME_ITEMS_IN_CART_OUT_OF_STOCK:
			'Some item(s) in your cart is out of stock please remove.',
		BANNER: 'banner',
		CANNOT_EXCHANGE_REFUND_PRODUCT_ONLINE:
			'Cannot Exchange/Refund product online',
		PICKUP_WILL_BE_DONE_WITHIN_2DAYS: 'Pickup will be done within 2 days',
		CONFIRM_NEW_PASSWORD: 'Confirm New Password',
		HOW_DO_YOU_WISH_TO_RETURN_THE_ITEM:
			'2. How do you wish to return the item?',
		CURRENT_PACKAGE: 'Current Package',
		SOMETHING_HAS_GONE_WRONG_PLEASE_TRY_AGAIN:
			'Something has gone wrong please try again!!!.',
		MALE: 'Male',
		APPOINTMENT_TIME: 'Appointment Time',
		PL_ENTER_REFERRAL_CODE: 'Please enter a referral code',
		CHECK_PINCODE: 'Check Pincode',
		LEADGEN_THANKYOUPAGE: 'Lead Generation - Thank You',
		TOTAL_INCLUDING_GST: 'Total Including GST',
		LK: 'lk',
		VIEW_DETAILS: 'View Details',
		DELIVERY_LOGO: 'delivery-logo',
		VALID_TILL: 'Valid till',
		DITTO_CONTAINER: 'ditto container',
		COLOR_COLON: 'Color:',
		ORDER_IS_PLACED: 'the order is placed',
		WITH_1_YEAR_WARRANTY: 'with 1 year warranty',
		MOBILE_NUMBER: 'Mobile Number',
		SUPPORT_WIDGET_WILL_LOAD_IN_A_MOMENT:
			"The support widget will load in a moment. In case it doesn't, keep on refreshing the page.",
		YES: 'YES',
		TRENDING_SEARCHES: 'Trending Searches',
		DELIVERY_FRAME: 'Delivery in 5-7 Days',
		AUTO_DISCOUNT: 'Auto Discount',
		SCHEDULE: 'Schedule',
		SWIPE_OR_TILT: 'Swipe or Tilt for 180',
		REFUND_PROCESSED: 'REFUND PROCESSED',
		FILL_POWER_DETAILS_TO_COMPLETE_EXCHANGE:
			'Please fill your power details to complete the exchange process',
		CONFIRM_AND_SCHEDULE_STORE_VISIT: 'CONFIRM AND SCHEDULE STORE VISIT',
		REMOVE: 'remove',
		CHOOSE_PRODUCT: 'CHOOSE PRODUCT',
		MOBILE_EMAIL_TEXT: 'Mobile / Email',
		REORDER: 'REORDER',
		STATUS_ICON: 'status icon',
		NO_DONT_CANCEL: "No, Don't Cancel",
		SUBMIT_POWER_COMPLETE_ORDER:
			'Please submit your power to complete the order',
		PRICE_DIFFERNCE_BTW_OLD_AND_NEW_PRODUCT:
			'Price difference between old & new product',
		TAKE_PHOTO_OF_YOUR_PRESCRIPTION: 'Take photo of your prescription',
		EXTRA: 'Extra',
		OFFER_APPLLY_REMOVE_MSG:
			'can be used in this order. Do you want to remove',
		LOGOUT: 'Logout',
		USER: 'User',
		CONTINUE_TO_SELECT_ADDRESS: 'Continue To Select Address',
		FACE_WIDTH_NOT_SUPPORTED: 'Face Width Not Supported',
		SHARE_YOUR_LOCATION_TEXT:
			'Please Share Your Location To See Nearby Stores',
		PLEASE_PROVIDE_REGISTERED_EMAIL: 'Please provide a registered email',
		PRODUCT_LINK_COPIED_TEXT:
			'Product Link has been copied to clipboard. Ready to Share.',
		EMAIL_US: 'Email Us',
		LAST_STEP_ENTER_OTP: 'Last Step! Enter OTP to unlock',
		MY_PRESCRIPTION: 'My Prescription',
		RECEIVED_BY_LENSKART: 'received by Lenskart',
		BANNER_ADS: 'Banner Ads',
		TEST_CMD: 'test',
		BUY_BOXES: 'BUY 2 BOXES',
		VIEW_BREAKUP: 'View Breakup',
		PART_TAX_COLLECTED: 'Part Tax Collected.',
		ACCOUNT_NUMBER: 'Account Number',
		CHANGE_FILTERS: 'CHANGE FILTERS',
		COMPARE_LOOKS: 'Compare Looks',
		SUBMIT_AFTER_YOUR_ORDER_PLACED:
			'Submit right at the end after your order is placed',
		WATCH_VIDEO: 'Watch Video',
		SELECT_DATE: 'Select Date',
		SAVE: 'SAVE',
		DELIVERY_CONTACT_LENSES: 'Delivery in 2-4 Days',
		HOW_TO_READ_YOUR_PRESCRIPTION: 'learn how to read your prescription',
		NOTE: 'Note',
		POWER_PENDING: 'Power Submission Pending',
		GOT_FAILED: 'got failed',
		RETURN_MODE: 'Return Mode',
		PACKAGE_UPDATED_SUCCESSFULLY: 'Package Updated Successfully',
		ACCOUNT_HOLDER_NAME: "Account Holder's Name",
		ADD_PRESCRIPTION: 'Add Prescription',
		CONFIRM: 'Confirm',
		ADD: 'Add',
		PICK_A_NEARBY_STORE:
			'Pick a nearby store to Exchange/Return/Adjust the fit of your product',
		ALL_MODIFIED_POWER_OPTIONS:
			'All Modified Power Options in Edit Power Category',
		SORRY_WE_DO_NOT_DELIVER_TO_YOUR_PINCODE:
			'Sorry! We do not deliver to your pincode',
		SYMBOL_EXCLAIMATION: '!',
		CARD_NUMBER: 'Card Number',
		P_FAQ_Q_8: 'Ques 8. I don’t know what my prescription is. Can you help?',
		P_FAQ_ANS_5:
			'Ans 5. We stock all powers – simple and complex. The unique robotic technology used in our lab ensures that the most complex powers are fitted perfectly, ensuring 100% error-free glasses. Our 10 lakh+ customers can vouch for the precision with which we make the eyeglasses!',
		NEED_REFUND_INSTEAD: 'Need Refund instead?',
		TIME_SLOT: 'Time Slot',
		SELECT_STORE_AND_CONTINUE: 'Select Store And Continue',
		CHECK_YOUR_CARD_FOR_OFFER: 'Check your card for offer',
		LENSKART_INTERNATIONAL: 'Lenskart International',
		CITY_DISTRICT: 'City / District',
		SHIPPING_ADDRESS: 'Shipping Address',
		CONTINUE_WITHOUT_FRAME_SIZE: 'Continue without Frame Size',
		YOU_NEED_TO_ADD_POWER_TO_COMPLETE_THE_ORDER:
			'You need to add power to complete the order',
		LKCASH: 'LKCash',
		ENTER_PINCODE: 'ENTER PINCODE',
		TELL_US: 'Tell us a bit about',
		STORE_CREDIT_CODE_HAS_BEEN_COPIED: 'Store Credit code has been copied',
		APPOINTMENT_DATE: 'Appointment Date',
		MODE_OF_PAYMENT: 'Mode of Payment',
		EYE_POWER_WILL_BE_TAKEN: 'Eye power will be taken after payment',
		ENTER_OTP_CODE_TO_CONFIRM_YOUR_ORDER:
			'Enter OTP Code to confirm your Order.',
		BUYONCHAT_CAT_PLP:
			'Hi Lenskart, help me get started! I am on <pageName> page of mobile site',
		ENTER_SALESMAN_ID: 'Enter Salesman Id',
		GOT_IT: 'GOT IT',
		POWER_SUBMITTED: 'Power Submitted',
		BEST_PRICE_GUARANTEED_CONTENT:
			"If you find your chosen products cheaper at any other Indian online retailer, we'll refund the difference. This is why our customers know they always get the best prices in the country.",
		USER_NAME: 'User Name',
		VIEW_OTHER_COLOR_OPTIONS: 'View Other Color Options Available',
		CANCEL_PRODUCT_RETURN: 'Cancel Product Return',
		REFERRAL_CODE: 'Referral code',
		OPEN_BRACKET: '(',
		P_FAQ_Q_6: 'Ques 6. Where do I submit my eye power details?',
		LDR: 'ldr',
		SELECT_POWER_TYPE: 'Select Power Type',
		PRODUCT_TO_RETURN: 'Product to Return',
		APPOINTMENT_CANCELLED: 'Appointment Cancelled',
		SAVE_CARD_DETAILS: 'Save Card Details',
		HOW_YOUR_SPECS_ARE_MADE: 'How Your Specs Are Made',
		POWER_SUPPORTED: 'Power Supported',
		REVIEW: 'Review',
		VIEW_LENS_PACKAGES: 'view lens packages',
		BREAKUP: 'Breakup',
		HERE: 'Here',
		SELECT_PRODUCT_TO_CONTINUE: 'Select Product To Continue',
		TO: 'To',
		WHERE_DO_YOU_WANT_TO_SHIP_THE_EXCHANGE_ITEM:
			'Where do you want to ship the Exchange Item?',
		CONFIRM_ORDER_CONFIRMATION: 'Order will be processed after confirmation',
		DAYS_14: '14 Days',
		GOLD_PID_BANNER: 'gold pid banner',
		UPLOAD_AFTER_CHECKOUT: 'Upload, after Checkout',
		CHOOSE_EXCHANGE_OR_REFUND: 'Choose Exchange or Refund',
		PLEASE_ENTER_USERNAME: 'Please enter Username',
		APP_RATING: 'app-rating',
		SUCCESSFULLY_DELETED_YOUR_CARD: 'You have successfully deleted your card',
		AP: 'Ap',
		PAY_USING_WALLETS: 'Pay using Wallets',
		COLLECTION_SUITABLE_FOR_YOU: 'Collection suitable for you',
		RUNNING_LATE: 'Running Late',
		POST: 'Post',
		DISTANCE_TO_STORE: 'Distance To Store',
		REMOVE_ITEM: 'Remove Item',
		INR: 'INR',
		CART_TOTAL: 'Cart Total',
		HOUSE_FLAT: 'House/flat',
		SELECT_REASON: 'Select Reason',
		FAILED_RETRY_PAYMENT: 'failed-retry-payment',
		SEARCH_FOR: 'Search for',
		SYMBOL_AND: '&',
		SUBMIT_POWER_TEXT: 'Submit your power to complete your order',
		TRY_IN_THREE_D: 'Try in 3D',
		PROCEED_TO_CHECKOUT: 'PROCEED TO CHECKOUT',
		PD: 'pd',
		YOU_HAVE_THE_BEST_OFFER_ALREADY:
			'You have the best offer already applied on this order.',
		BEING_EXCHANGED: 'Being Exchanged',
		GOLD_ADDED_POPUP_HTML:
			'<div class="gold-added-close" style="font-size: 18px;">x</div><div><img class="gold-logo" style="margin-top: -20px;" src="https://static1.lenskart.com/media/desktop/img/15-July-19/logo_lk_gold_aura.png"></div><div class="gold-added-info" style="font-size: 18px;"><span class="gold-added-info-title">Gold membership added to cart!</span><br><span class="gold-added-info-content">Please select 2nd Pair now</span><div><a href="/loyalty" target="_blank">Know More</a></div></div>',
		CUSTOMER_SUPPORT: 'Connecting you to Customer Support',
		PRODUCT_ID: 'Product Id',
		TICK_SVG: 'tick svg',
		ENTER_UPI_ID_HERE: 'Enter UPI ID Here',
		ALL_SIZES: 'All Sizes',
		EMAIL_NOTIFICATION: 'Email Notification',
		TRY_AT_HOME: 'TRY AT HOME',
		TRACK_EXCHANGE_ORDER: 'Track Exchange Order',
		PLEASE_ENTER_RIGHT_EYE_PD: 'Please Enter Right Eye PD',
		TRACK_EXCHANGE_ORDER_VIEW_DETAILS: 'Track Exchange Order & View Details',
		BELOW_47_MM: 'Below 47 mm',
		SECURE: 'Secure',
		BOOK_APPOINTMENT_AT_STORE: 'Book Appointment At Store',
		ADD_TO_SHORTLIST: 'Add To Shortlist',
		WHAT_ABOUTMY_EYE_POWER: 'What about my eye power',
		LARGE: 'large',
		WHAT_OUR_CUSTOMERS_SAY:
			'See what our customers have to say about Lenskart products.',
		THREE_D_GIF: '3D gif',
		SELECT_ONE_OF_THE_OPTION: 'Please select from one of the above options',
		GOLD_MEMBERSHIP: 'Gold Membership',
		PAY_USING_NETBANKING: 'Pay using Netbanking',
		SEO_TITLE: 'Online Shopping - Buy at Best Prices on Lenskart.com',
		WAS_EXPECTED: 'Was Expected',
		WE_ARE_CONFIRMING_PAYMENT_FOR_YOUR_ORDER:
			'We are confirming payment for your order. It may take up to 30 minutes. If you were unable to make the payment, please try again.',
		FITTING_HEIGHT_IS_REQUIRED: 'Fitting Height is required for above fileds',
		ENTER_YOUR_STORE_CREDIT_CODE: 'Enter your store credit code',
		COPY_CODE: 'Copy Code',
		PLEASE_LOGOUT_AND_LOGIN_WITH_MOBILE:
			'Please Logout and Login with your mobile number to continue with exchange/refund process',
		ENTER_NUMBER_TO_UNLOCK_OFFER:
			'Enter your mobile number to unlock exclusive offers',
		ORDER_ON_PHONE: 'Order On Phone',
		THERE_NO_HURRY_POWER_CAN_BE_SUBMITTED:
			'There’s no hurry! Power can be submitted within 7 days of order placement',
		SELECT_LENSES: 'SELECT LENSES',
		ACCOUNT_DOES_NOT_EXIST:
			"Account doesn't exist. Use different phone number or email.",
		SUPPORT_EMAIL: 'support@lenskart.com',
		PLEASE_ENTER_FITTING_HEIGHT: 'Please Enter Fitting Height',
		RUPEES: 'rupees',
		SYSTEM_ERROR_OCCURRED_TRY_AFTER_SOMETIME:
			'System error occurred, please try after sometime...',
		YOUR_3D_IMAGE_BEING_RENDERED_PLEASE_WAIT:
			'Your 3D image is being rendered. Please wait.....',
		SUCCESSFULLY_REMOVED: 'Product successfully removed from shortlist',
		NEFT_DETAILS: 'NEFT Details',
		P_FAQ_ANS_10:
			'Ans 10. Quality is at the core of our products. Our plastic frames are made from the best quality acetate and our metal frames are made only from steel or titanium – this makes our glasses corrosion and breakage resistant. We also offer a 1 year warranty on all our glasses – in case you have any issues, call us, and we’ll make sure it gets resolved!',
		THANKS_FOR_COD_CONFIRMATION:
			'Thank you. Your COD order has been confirmed',
		SAVE_ADDRESS: 'Save Address',
		THIS_PAGE_WILL_EXPIRE: 'This page will expire in',
		CLICK_HERE_TO_GO_BACK: 'Click Here To Go Back',
		SHARE: 'Share',
		LOADING_DATA: 'Loading data, please be patient...',
		EXTRA_DISCOUNT: 'Extra Discount',
		SUITED_FOR: 'Suited For',
		AMOUNT_INCREASED_POST: '',
		YOU_BOUGHT: 'You bought',
		RECEIVE_COMMUNICATION_EXCHANGE_OR_REFUND:
			'you will receive communication from us to choose Exchange or Refund',
		DEAR_CUSTOMER_YOUR_ORDER: 'Dear Customer, Your order',
		PLEASE_ENTER_VALID_CARD_NUMBER: 'Please enter a valid card number.',
		CHROME: 'Chrome',
		REFUND_FAILED: 'REFUND FAILED',
		NEW_PRODUCT: 'New Product',
		P_FAQ_Q_12:
			'Ques 12. I haven’t heard of some of the brands available. How does one determine which brands to stock?',
		DELIVERED_IN: '',
		WITH_A_DIFFERENT_ACCOUNT: 'with a different account',
		FOLLOW_US_AT: 'FOLLOW US AT',
		ON_PHONE: 'On Phone',
		DEG_FEMALE: '180deg female',
		SUBMIT_POWER_TO_COMPLETE_ORDER: 'Submit "POWER" to complete order',
		PAY_VIA_UPI_APPS: 'Pay via UPI Apps',
		YOU_DO_NOT_ANY_PRESCRIPTIONS: 'You do not any saved prescriptions.',
		I_AM_LOOKING_FOR: 'I am looking for',
		SELECT_OPTION_BELOW_TO_SUBMIT_PD:
			'Select one option below to submit PD(Pupilarly Distance)',
		OFFER_VALID_TILL: 'Offer Valid till',
		OH_YOU_CANNOT_GO_BACK_SO_WE_HAVE_REDIRECTED:
			'Uh oh, you cannot go back, so we have redirected you to this page',
		YES_PROCEED_WITH_CANCELLATION: 'Yes, Proceed with Cancellation',
		NO_ADDITIONAL_CHARGES_FOR_HIGH_COMPLEX_POWERS:
			'No additional charges for high / complex powers',
		P_FAQ_Q_14:
			'Ques 14. I don’t like what I have purchased! What is your return policy?',
		GMAIL: 'Gmail',
		PLEASE_SELECT_YOUR_PREFERRED_MODE:
			'Please select your preferred mode of payment',
		DIRECTION: 'direction',
		GIVE_A_MISS_CALL_TO: 'Give a miss call to',
		BEFORE_WE_CONTINUE: 'yourself before we continue',
		NO_ADDITIONAL_CHARGES_FOR_POWER:
			'No additional charges for high / complex power',
		ENTER_COUPON_CODE: 'Enter Coupon Code',
		ARRIVING: 'Arriving',
		DO_NOT_HIT_BACK_TEXT:
			'Do not hit the back button until the transaction is complete',
		STORE_ADDRESS: 'Store Address',
		OKAY: 'OKAY',
		EDIT_CODE: 'Edit Code',
		PLEASE_ENTER_PASSWORD: 'Please enter password',
		UPGRADE_TO_THE_LATEST_VERSION:
			'Upgrade to the latest version of the site for the best Lenskart experience.',
		HIDE: 'Hide',
		CONTINUE_BUTTTON: 'continue button',
		SHIP_TO_LENSKART_REQUESTED: 'Ship to Lenskart requested',
		CONTINUE_TO_REFUND: 'CONTINUE TO REFUND',
		CONTINUE_TO_ADDRESS: 'Continue to Address',
		PAYMENT_SUCCESSFUL: 'Payment Successful',
		NA: 'NA',
		TOTAL_AMOUNT: 'Total Amount',
		CALL_EMAIL_ME_FOR_COLOR: 'Call Me/Email Me for Color',
		ADD_ORDER_COMMENTS: 'Add order comments',
		PURCHASE_ORDER_NUMBER: 'Purchase Order Number',
		FINAL_CONFIRMATION: 'Final Confirmation',
		POWER_WILL_BE_TAKEN_AFTER_CHECKOUT:
			'Power will be taken after checkout. No additional charges for high powers.',
		EXTRA_CONTENT: 'Extra Content',
		DOWNLOADAPP_PRODUCTTYPE: 'Eyeglasses, Sunglasses and Contact Lenses',
		LINK_EMAIL: 'LINK EMAIL',
		PLEASE_ENTER_OTP: 'Please enter OTP',
		THIS_IS_A_GIFT: 'This is a gift',
		APPLY_OFFER: 'Apply Offer',
		CHECK_GIFT_VOUCHER_BALANCE: 'Check gift Voucher Balance',
		POWER_DETAILS_UPDATE_FAILED: 'Power Details Update Failed',
		ADD_TO_CART: 'Add To Cart',
		ITEM_ALREADY_SHIPPED: 'Some Items have already been shipped',
		MORE_REVIEWS: 'More Reviews',
		LENSKART: 'Lenskart',
		ABOVE_56_MM: 'Above 56 mm',
		CYLINDER: 'Cylinder',
		BOOK_APPOINTMENT: 'Book Appointment',
		HEADER_CONTACT_US: '(0) 99998 99998',
		ADD_POWER_PRESCRIPTION:
			'Upload Power Prescription / Take Photo or Enter power manually',
		PD_UPLOADED: 'PD uploaded',
		OK: 'OK',
		DELIVERY_OPTIONS_TO: 'delivery Options To',
		SAME_FRAME_DIFFERENT_LENS: 'Same frame different lens',
		CLOSE_TRY_ON: 'Close Try On',
		SORT_SELECTED: 'best seller',
		ACCESS_TO_FEATURE: 'Browser to access the feature.',
		TOTAL_PRICE: 'Total Price',
		GO_TO_APP: 'Go to App',
		ENTER_GIFT_VOUCHER_CODE: 'Enter Gift Voucher Code',
		POST_REVIEW: 'POST REVIEW',
		LEARN_MORE_TEXT: 'Learn More',
		VIEW: 'View',
		CONTINUE_SHOPPING: 'Continue Shopping',
		RE_SEND_OTP: 'Re-Send Otp',
		SAMPLE_LABLE:
			'*THIS IS A SAMPLE LABEL. You can download the actual return label above or get it via email',
		HIDE_CART: 'Hide Cart',
		WE_HAVE_SENT_AN_OTP: 'We have sent an OTP to ',
		PLEASE_SELECT_FROM_LIST:
			'Please select an app from below list to make the payment.',
		PS: 'ps',
		SAVE_FOR_FASTER_CHECKOUT: 'Save for faster checkout',
		PERSONAL_OPTICIAN_DESCRIPTION:
			'12-Step Eye Test & Try 100+ best selling frames | Book online or call us at 1800-111-124 Currently available for the Age Group 14 to 75 years',
		ADDITIONAL_ITEM: 'additional item',
		PLEASE_SELECT_POWER_FROM_THE_LIST: 'Please select a power from the list',
		WE_WILL_NEVER_POST_TO_FACEBOOK:
			"(We'll never post to facebook without your permission)",
		EXCHANGE_PRODUCT_DETAILS: 'Exchange Product Details',
		PLEASE_ENTER_VALID_CVV_NUMBER: 'Please enter a valid CVV number',
		PICKUP_REFUND_DETAILS: 'Pickup/Refund Details',
		WRITE_A_REVIEW: 'Write A Review',
		ADD_PD: 'Add PD',
		SELECT_SHIPPING_ADDRESS: 'Select Shipping Address',
		SELECT_THE_PROBLEM_WITH_THE_PRODUCT:
			'Select the problem with the product',
		CONTACT_LENSES: 'Contact Lenses',
		VERIFY: 'Verify',
		EXCHNAGE_ORDER_ID: 'Exchange Order Id',
		THE_ADJUSTED_TAX_AFTER_EXCHANGE_ORDER:
			'The tax for this exchange order is calculated after adjusting the tax paid for the previous product you are exchanging',
		FRAME: 'Frame',
		POWER_CHECKUP_SCHEDULED_AT_STORE: 'Power checkup scheduled at store.',
		REQUEST_ALREADY_RECEIVED_FOR_EXCHANGE_REFUND:
			'Request already received for exchange/refund for this item',
		SIGN_IN_USE_PREVIOUS_PRESCRIPTION: 'Sign In to use previous prescription',
		THIS_HELP_TO_TRACK_YOUR_EYES: 'This will help us to track your eyes and',
		ADD_NOW: 'Add Now',
		CANCEL_RETURN_PICKUP: 'Cancel Return Pickup',
		AFTER_CHECKOUT_SUBMIT_PRESCRIPTION:
			'AFTER CHECKOUT, HOW WILL YOU SUBMIT PRESCRIPTION?',
		VERIFY_PHONE_NUMBER: 'Verify Phone Number',
		PRODUCT_DESCRIPTION: 'Product Description',
		DELETE_IMAGE:
			'Are you sure you want to delete the image and upload the new image',
		GIVE_MISSED_CALL: 'Give Missed Call',
		SHOP_NOW: 'Shop Now',
		REVIEWS_AND_QNS: 'REVIEWS and Q&As',
		FORGOT_PASSWORD_CLICK_HERE: 'Forgot Password? Click here',
		FACE_WIDTH_FEATURE_NOT_SUPPORTED:
			'The Face Width calculation feature is not supported on this browser. Try opening in',
		HEAD_TURN_IMAGE_FEMALE: 'head turn image female',
		FREE: 'Free',
		PASSWORD_SUCCESSFULLY_UPDATED:
			'Your password has been successfully updated, please login',
		MARKETING_CHANNEL_PERMISSIONS: 'MarketingChannelPermissions',
		NUMBER_OF_BOXES_GREATER_THAN_ZERO:
			'Number of boxes should be greater than 0',
		EMAIL_ADDRESS: 'Email Address',
		CURRENT: 'Current',
		STANDARD_VAT: 'Standard VAT is 5%',
		REFUND_AMOUNT: 'Refund Amount',
		SOLUTIONS: 'Solution',
		LESS: 'Less',
		WITH_1_YEAR_WARRANTY_14_DAY_RETURN:
			'with 1 Year Warranty & 14 Day Return',
		SIGN_UP: 'Sign Up',
		UNABLE_TO_PROCESS_REQUEST: 'Unable to process request',
		PRICES_VARY_DEPENDING_ON_POWER:
			'Prices vary depending on power of lenses',
		BANK_CARDS: 'Bank Cards',
		WANT_TO_EXCHANGE_REFUND: 'Want to Exchange/refund your product?',
		REFUND_DETAILS: 'Refund Details',
		COVERED_BENEFITS: 'Covered Benefits',
		YOU_DONT_NEED_TO_PAY_ANYTHING:
			'You dont need to pay anything for this Exchange',
		ORDERS_PAGE: 'Orders page',
		PLEASE_ENTER_CARDHOLDER_NAME: 'Please enter Cardholder name.',
		SELECT_FROM_THE_AVAILABLE_LENS_PACKAGES:
			'SELECT FROM THE AVAILABLE LENS PACKAGES',
		TRACK_ORDER: 'Track Order',
		ALERT: 'Alert!',
		HYPHEN: '-',
		CALCULATE_YOUR_FRAME_SIZE: 'calculate your frame size',
		SORT_BY: 'Sort By',
		NEW_PRODUCT_PRICE: 'New Product Price',
		RECEIVE_ORDER_UPDATES_WHATSAPP: 'Receive Order Updates on your Whatsapp',
		VOUCHER: 'Voucher',
		CONFIRM_COD: 'Confirm your COD order to begin processing',
		REGISTER: 'Register',
		POWER_CAN_BE_SUBMITTED_WITHIN_7_DAYS:
			'Power can be submitted within 7 days of placing order. No additional charge for higher power',
		SUCCESSFULLY_APPLIED_TO_CART: 'Successfully applied to cart',
		RECENTLY_VIEWED_CATEGORIES: 'Recently Viewed Categories',
		SUBMIT_POWER_POST_CHECKOUT: 'Submit power post checkout',
		SYSTEM_ERROR_OCCURRED: 'System error occurred',
		ENTER_POWER: 'Enter Power',
		ICON: 'icon',
		DELIVERY_MSITE_TEXT: 'Delivery at your doorsteps within',
		HOW_WILL_I_KNOW_IF_THESE_FRAMES_FIT_ME:
			'HOW WILL I KNOW IF THESE FRAMES FIT ME?',
		PRICE_DIFFERENCE_BETWEEN_OLD_NEW_PRODUCT:
			'Price difference between old & new product',
		LKDOTCOM: 'Lenskart.com',
		EDIT_ADDRESS: 'Edit address',
		VIA_NEARBY_STORE: 'Via Nearby Store',
		LATEST_LENSKART_CUSTOMER_REVIEWS:
			'Check out the latest Lenskart customer reviews and ratings who purchased eyewear, sunglasses, contact lens and more at Lenskart.com',
		PLEASE_CHOOSE_ANOTHER_PAYMENT_METHOD:
			'Please choose another payment method to pay remaining amount',
		COD_PENDING: 'COD confirmation Pending',
		AUTOADDBANNER_TWO: 'autoAddBanner2',
		PRESCRIPTION_NEEDED: 'Prescription Needed',
		CONTINUE_TO_GET_REFUND: 'CONTINUE TO GET REFUND',
		MEDIUM: 'medium',
		PLEASE_TELL_US_THE_PROBLEM_WITH_PRODUCT:
			'1. Please tell us the problem with Product',
		YOUR_PRESCRIPTION: "What's your prescription ?",
		YOUR_PHONE_NUMBER: 'YOUR PHONE NUMBER',
		ICON_DOWN_OPEN: 'icon-down-open',
		ALREADY_REFUNDED: 'Already Refunded',
		SIMILAR: 'Similar',
		P_FAQ_Q_5: 'Ques 5. I have a complex power, can it be made?',
		CUSTOM: 'Custom',
		RS: 'Rs',
		CURRENT_SELECTED_PACKAGE: 'Current selected Package',
		WE_WILL_NOT_SHARE_NUMBER_WITH_ANYONE:
			'We will not share your number with anyone',
		COMMENTS: 'Comments',
		SHIP_TO: 'Ship To',
		HOW_ARE_YOU_SENDING_PRODUCT_BACK_TO_LENSKART:
			'How are you sending product back to lenskart',
		SUBMIT_ADDRESS: 'SUBMIT ADDRESS',
		SAVED_POWERS: 'Saved Powers',
		THIS_IS_YOUR_MAIN_POWER:
			'This is your main power and is a + or - number or 0',
		PROCEED: 'Proceed',
		VIDEO_ICON: 'video icon',
		TODAY: 'Today',
		REMOVE_FROM_SHORTLIST: 'Remove From Shortlist',
		REFUND_PENDING: 'REFUND PENDING',
		THANK_YOU_FOR_PLACING_ORDER: 'Thank You for placing an order with us.',
		VIDEO_PLAY_ICON: 'Video Play Icon',
		PAGE_TITLE: 'Lenskart.com Homepage',
		EXCHANGE_PICKUP:
			'Pickup will be done within 2 days. Once the product is received by Lenskart, then your exchange will be processed.',
		PLEASE_SELECT_A_BANK_TO_PROCEED: 'Please select a bank to proceed',
		CALL_EMAIL_ME_FOR_POWER: 'Call Me/Email Me for Power',
		BUY_ONE_BOX: 'BUY 1 BOX',
		REFUND_INTITATED: 'REFUND INTITATED',
		TOTAL_WIDTH: 'Total Width',
		SAVE_AND_PROCEED: 'Save & Proceed',
		CVV: 'CVV',
		VIEW_RETURN_REFUND_DETAILS: 'View Return/Refund Details',
		SEND_PASSWROD_RESET_LINK: 'Send Password Reset link',
		STAR: 'Star',
		ORDER_ON_PHONE_NUMBER: '+918470007367',
		LEADGEN_USER_DETAIL: 'Lead Generation - User Detail',
		CHECK_STORE_CREDIT_BALANCE: 'Check Store Credit Balance',
		FRAME_SUITS_BEST: 'frames suit you the best',
		GET_IT_DELIVERED_BY: 'Get it delivered by',
		TECHNICAL_DETAILS: 'Technical Details',
		APPLICABLE_AMOUNT: 'Applicable Amount',
		VIEW_POWERS: 'View Powers',
		LENSES_SHAPED_BY_LASER_PRECISION_MACHINES:
			'Lenses shaped by laser precision machines',
		MY_SAVED_PRESCRIPTIONS: 'My Saved Prescriptions',
		ONCE_PRODUCT_RECEIVED_BY_LENSKART:
			'Once your product is received by Lenskart',
		CHANGING_THE_PAYMENT_OPTION:
			'Changing the payment option will remove the selected offer',
		LOADING_LENS_PACKAGES: 'loading lens packages',
		FOR_ANY_QUERIES: 'for any queries',
		EMAIL_ID: 'Email ID',
		FIRST_NAME: 'First Name',
		ONLY_ONE_QUANTITY_LEFT: 'Only 1 quantity left, Hurry !!!',
		WHAT_WOULD_YOU_LIKE_TO_DO: 'What would you like you to do?',
		UPI_ICON: 'Upi icon',
		COUNTRY: 'Country',
		ENTER_MANUALLY: 'Enter manually',
		DESCRIPTION: 'Description',
		UNIT_NUMBER: 'Unit Number',
		ICON_UP_OPEN: 'icon-up-open',
		WHAT_ARE_YOU_LOOKING_FOR: 'What are you looking for ',
		SPECSY: 'Specsy',
		TOTAL: 'Total',
		ONCE_YOU_VISIT_LENSKART_STORE_WE_WILL_INSPECT:
			'Once you visit Lenskart Store, we will inspect the product and if accepted you can exchange with a new product at store or take refund as per policy',
		PRODUCT_RECOMMENDATIONS: 'Product Recommendations',
		P_FAQ_Q_4: 'Ques 4. Will the glasses have my prescription?',
		TRACK_PRODUCT_HERE: 'Track Product here',
		CANNOT_ACCESS_PAGE: 'Cannot access this page due to the error:',
		EYEGLASSES: 'Eyeglasses',
		ALLOW_EMAIL_PERMISSION:
			'please allow email permission from your facebook account',
		I_HAVE_READ_AND_UNDERSTOOD_THE_TERMS_OF_POWER_SUBMISSION:
			'I have read and understood the terms of power submission',
		NO_SAVED_CARDS: 'No Saved Cards.',
		YOUR_APPOINTMENT_HAS_BEEN_BOOKED:
			'Your appointment has been booked successfully.',
		CLICK_HERE_TO_RETRY: 'Click Here To Retry',
		SUBMIT_PD_TO_COMPLETE_ORDER: 'Submit PD to complete order',
		DATE: 'Date',
		I_DONT_KNOW_MY_POWER: 'I DONT KNOW MY POWER - (CALL ME)',
		MOBILE: 'Mobile',
		WITH_GST: 'with GST',
		CLEAR_ALL: 'CLEAR ALL',
		PROCEED_FOR_REFUND: 'Proceed For Refund',
		P_FAQ_Q_2: 'Ques 2. I’m not sure about the size and fit of the frames.',
		UPI_NOT_VERIFY_TEXT: 'Id not verified! Please enter correct Id',
		CHECK_AVAILABLE_OFFERS: 'Check available offers',
		TO_GO_BACK_TO_THE_HOME_PAGE: 'to go back to the home page.',
		SEC: 'sec',
		SUBSCRIPTION_PRICE: 'Subscription Price',
		YOUR_PRESCRIPTION_IMAGE_HAS_BEEN_UPLOADED:
			'Your prescription image has been uploaded with us.',
		PRODUCT_CANCELLATION: 'Order Cancellation',
		POWER_SUNGLASSES: 'Power Sunglasses',
		RETURN_POWER_FAIL_STATEMENT:
			'We’re Sorry!  An error occurred when we tried to update your powers on the order. We apologise for the inconvenience.',
		ONLY_IF_YOU_HAVE_CYL:
			'Only if you have a CYL power, you will have an AXIS i.e. angle value (between 1 to 180)',
		POWER_PRESCRIPTION: 'Power Prescription',
		PACKAGE_PRICE: 'Package Price',
		SUBMIT_POWER: 'Submit Power',
		ORDER_CONFIRMATION_PLEASE_PRESS_1:
			'You will receive an automated call shortly for order confirmation, Please press 1 to confirm your order.',
		CANCELLATION_POLICY: 'Cancellation Policy',
		SELLING_FAST_FEW_PIECES_LEFT: 'Selling fast! Few pieces left !',
		SAVED_ADDRESS: 'SAVED ADDRESS',
		PERSONAL_DATA: 'Personal Data',
		YOUR_SAVED_CARDS: 'Your Saved Cards',
		SHOW_CART: 'Show Cart',
		NAME: 'Name',
		LEARN_READ_PRESCRIPTION: 'Learn how to read prescription',
		WHEN_PRODUCT_RECEIVED_BY_LENSKART:
			'When the product is received by Lenskart',
		YOUR_CART: 'Your Cart',
		NAME_ON_CARD: 'Name on Card',
		VIRTUALPAGEVIEW: 'VirtualPageView',
		SHOP_INSTAGRAM: 'Shop Instagram',
		TRY_ALTERNATE_PRODUCTS: 'Try Alternate Products',
		SAVE_AND_CONTINUE: 'Save & Continue',
		DOWNLOAD_OUR_MOBILE_APP: 'Download our mobile app',
		POWER_OF_THE_FRAME: 'POWER OF THE FRAME(s)',
		SHIPMENT_ICON: 'shipment icon',
		THANKYOU_MESSAGE:
			'Thanks for the information! We will reach out to you soon.',
		CUSTOMER_NAME: 'Customer Name',
		REFUND_PICKUP:
			'Pickup will be done in few days. Once the product is picked up by lenskart, then your refund order will be processed.',
		APPOINTMENT_SCHEDULED_SUCCESSFULLY: 'Appointment Scheduled Successfully',
		BOUGHT: 'bought',
		CHOOSE_PRODUCT_TO_CONTINUE: 'Choose Product to Continue',
		CHOOSE_FRAME_STYLE: 'CHOOSE FRAME STYLE',
		POWER_SUBMITTED_TIME:
			'Power can be submitted within 10 days of order placement',
		VISIT_NEARBY_STORE: 'Visit Nearby Store',
		PLACE_ORDER: 'PLACE ORDER',
		VOUCHER_CODE: 'Voucher Code',
		NUMBER_OF_BOXES_CAN_NOT_BE: 'Number of boxes can not be 0 for Both Eyes',
		WE_DO_NOT_CHARGE_EXTRA_FOR_HIGHER_POWER:
			'We do not charge extra for higher power, so lenses you’ve selected will be provided regardless of your power',
		SEND_CREDIT_CODE: 'Send Credit Code',
		DELIVERY_DETAIL: 'Delivery Details',
		EYE_POWER: 'eye power',
		SELECT_APP_FROM_LIST_TEXT:
			'Please select an app from below list to make the payment.',
		CLICK_TO_BROWSE_CATEGORY:
			'Click any of the links below to browse our popular categories',
		FRAME_DETAILS: 'Frame Details',
		FIND_YOUR_SIZE: 'Find your size',
		SL_EXCEEDED_MESSAGE: 'You have exceeded limit of saving products: 50',
		LEFT_EYE: 'Left Eye',
		APPLIED_ON_THIS_ORDER: 'applied on this order',
		MM_YY: 'MM/YYYY',
	},
	localeInfo: {
		defaultLocale: 'en_in',
		defaultLanguage: 'en',
		countryCode: 'in',
		maxMobileNumberLength: 10,
		minMobileNumberLength: 10,
		fbVerificationTag: {
			enabled: false,
			key: '',
		},
		regex: {},
		isPinCodeHide: false,
		countryName: 'India',
		storeHomeTrial: true,
		cookieDomain: 'www.lenskart.com',
		domain: 'https://preprod.lenskart.com',
		domainUrl: 'preprod.lenskart.com',
		hrefLang: 'en-in',
		gaId: 'UA-130468609-1',
		facebookPixel: '790230201013876',
		GvLkEnabled: true,
		phoneCode: '+91',
		gtmId_mob_prod: 'GTM-KPNNZ53',
		gtmId_mob_dev: 'GTM-PX477GW',
		gtmId_desktop_prod: 'GTM-NJM6RCZ',
		localeList: [
			{
				title: 'English',
				code: 'en_in',
			},
		],
		trendingSearch_desktop: [
			{
				name: 'Ray ban',
				url: 'https://www.lenskart.com/sunglasses/brands/ray-ban-sunglasses.html',
			},
			{
				name: 'Eyeglasses',
				url: 'https://www.lenskart.com/eyeglasses.html',
			},
			{
				name: 'Sunglasses',
				url: 'https://www.lenskart.com/sunglasses.html',
			},
			{
				name: 'Contact Lenses',
				url: 'https://www.lenskart.com/contact-lenses.html',
			},
			{
				name: 'Acuvue',
				url: 'https://www.lenskart.com/contact-lenses/most-popular-contact-lenses/acuvue-contact-lenses.html',
			},
			{
				name: 'Eyewear Accessories',
				url: 'https://www.lenskart.com/eyewear-accessories.html',
			},
			{
				name: 'Oakley',
				url: 'https://www.lenskart.com/sunglasses/brands/oakley-sunglasses.html',
			},
			{
				name: 'Mens Sunglasses',
				url: 'https://www.lenskart.com/sunglasses/find-eyewear/mens-sunglasses.html',
			},
			{
				name: 'Women Sunglasses',
				url: 'https://www.lenskart.com/sunglasses/find-eyewear/womens-sunglasses.html',
			},
			{
				name: 'Aviator',
				url: 'https://www.lenskart.com/sunglasses/frame-shape/aviator-sunglasses.html',
			},
			{
				name: 'Purevision',
				url: 'https://www.lenskart.com/contact-lenses/most-popular-contact-lenses/purevision-contact-lenses.html',
			},
			{
				name: 'Sunpocket - Folding Sunglasses',
				url: 'https://www.lenskart.com/sunglasses/brands/sunpocket.html',
			},
			{
				name: 'Eye Checkup',
				url: 'https://www.lenskart.com/HTO/',
			},
		],
		trendingSearch_mobile: [
			{
				name: 'Ray ban',
				url: '//www.lenskart.com/sunglasses/brands/ray-ban-sunglasses.html',
			},
			{
				name: 'Eyeglasses',
				url: '/eyeglasses.html',
			},
			{
				name: 'Sunglasses',
				url: '/sunglasses.html',
			},
			{
				name: 'Contact Lenses',
				url: '/contact-lenses.html',
			},
			{
				name: 'Acuvue',
				url: '//www.lenskart.com/contact-lenses/most-popular-contact-lenses/acuvue-contact-lenses.html',
			},
			{
				name: 'Eyewear Accessories',
				url: '//www.lenskart.com/eyewear-accessories.html',
			},
			{
				name: 'Oakley',
				url: '//www.lenskart.com/sunglasses/brands/oakley-sunglasses.html',
			},
			{
				name: 'Mens Sunglasses',
				url: '//www.lenskart.com/sunglasses/find-eyewear/mens-sunglasses.html',
			},
			{
				name: 'Women Sunglasses',
				url: '//www.lenskart.com/sunglasses/find-eyewear/womens-sunglasses.html',
			},
			{
				name: 'Aviator',
				url: '///www.lenskart.com/sunglasses/frame-shape/aviator-sunglasses.html',
			},
			{
				name: 'Purevision',
				url: '//www.lenskart.com/contact-lenses/most-popular-contact-lenses/purevision-contact-lenses.html',
			},
			{
				name: 'Sunpocket - Folding Sunglasses',
				url: '//www.lenskart.com/sunglasses/brands/sunpocket.html',
			},
			{
				name: 'Eye Checkup',
				url: '//www.lenskart.com/HTO/',
			},
		],
		allowedTrafficSourceCountries: [],
		showSentry: false,
	},
	platform: 'desktop',
	commonCallsActionCreators: {},
	headerCallsActionCreators: {},
	checkoutCallsActionCreators: {},
	homeCallsActionCreators: {},
	//added
	isSupported: undefined,
}
