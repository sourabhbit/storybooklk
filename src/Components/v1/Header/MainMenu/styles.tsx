import styled from 'styled-components'

export const Flex = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
	font-size: 11px;
	justify-content: space-around;
	padding: 0;
	/* position: relative;
	margin-left: -15px; */
	font-family: 'FuturaStd-Book';
	color: #000000;
	.nav-level-1 {
		white-space: nowrap;
		letter-spacing: 1px;
		display: flex;
		justify-content: center;
		transition: 0.5s all;
		&.three-col-layout {
			.nav-level-acc {
				.nav-level-2 {
					position: absolute;
					background-color: white;
					padding: 0px 15px 74px 0px;
					height: 324px;
					top: -1px;
				}
			}
		}

		&.grid {
			.nav-level-acc {
				padding-left: 4%;
			}
		}

		> a {
			color: #000000;
			font-weight: 400;
			padding: 11px 4px;
			font-size: 1.2rem;
			&:focus,
			&:hover {
				text-decoration: none;
			}
		}

		&:hover {
			// animation: scaleUp 0.5s;
			> a {
				text-decoration: none;
				border-bottom: 3px solid #31b2b0;
			}

			> .nav-level-acc {
				background: white;
				left: 0;
				z-index: 200;
				top: 120px;
				left: 18px;
				@include mQ-min($bigScreenWidth) {
					z-index: 200;
					left: 0;
				}
				@include mQ-minmax(1800px, $bigScreenWidth) {
					left: 0;
				}
			}
		}

		.nav-level-2 {
			&.cl {
				width: 150vw;
				.image {
					.nav-level-4-item {
						display: flex;
						flex-direction: column;
						img {
							max-width: 100%;
						}
					}
					> div {
						flex-basis: 48%;
						margin-right: 10px;
					}
				}
				.line-sep {
					height: 1px;
					display: block;
					width: 96vw;
					background: #dfdfdf;
					position: absolute;
					top: 50px;
					left: 0vw;
					z-index: 1;
					margin-bottom: 100px;
					@include mQ-minmax(1800px, $bigScreenWidth) {
						width: 96vw;
					}
					@include mQ-min($bigScreenWidth) {
						width: calc(#{$bigScreenWidth});
					}
				}
			}
		}
		&.try-at-home {
			.nav-level-acc {
				padding-left: 30px;
			}
		}
	}

	.nav-level-acc {
		background: white;
		padding: 24px 1.9% 24px 0;
		// margin: 0 2vw;
		min-height: 340px;
		position: absolute;
		left: -10000px;
		width: 96vw;
		right: 0;
		display: flex;
		justify-content: space-between;
		border-top: 15px solid white;
		z-index: 1;
		@include mQ-minmax(1800px, $bigScreenWidth) {
			width: 96vw;
		}
		// @include mQ-min($bigScreenWidth){
		//   width: calc(#{$bigScreenWidth});
		// }
		@media (max-width: $breakpoint-mintabletview) {
			min-height: 320px;
			overflow-x: scroll;
			width: 100vw;
			min-width: 1024px;
		}
		@media (min-width: $breakpoint-mintabletview) and (max-width: 1200px) {
			min-height: 320px;
			overflow-x: scroll;
			width: 100vw;
			min-width: 1024px;
		}
		/* .BannerDiv {
			display: none;
			@media (min-width: 1800px) {
				display: block;
				.BannerImgCont {
					position: absolute;
					top: 1px;
					right: 0px;
					height: 326px;
				}
			}
		} */

		&.nav-glasses {
			&:before {
				height: 1px;
				display: block;
				width: calc(96vw - 276px);
				background: #dfdfdf;
				content: '';
				position: absolute;
				top: 45px;
				left: 276px;
				z-index: 1;
				@media (min-width: 1800px) {
					width: calc(100% - 570px);
				}
			}
		}

		.btn-navigation {
			background-color: #329c92;
			padding: 14px 10px;
			text-transform: uppercase;
			min-width: 200px;
			color: #fff;
			font-size: 15px;
			letter-spacing: 1px;
			> a {
				color: #fff;
				&:hover,
				&:focus {
					text-decoration: none;
				}
			}
		}

		.lh-25 {
			line-height: 25px;
		}
	}

	.nav-head {
		color: #3e3e3f;
		font-weight: 700;
		text-transform: uppercase;
		font-size: 14px;
		display: block;
		padding-bottom: 16px;
		text-decoration: none;

		@media (min-width: $breakpoint-mintabletview) and (max-width: $breakpoint-ninetabletview) {
			font-size: 13px;
			// padding-left: 4px;
		}
	}
`

// @import '../../../../../src/theme/desktop/desktop-variables.scss';
// @import '../../../../../src/theme/desktop/reusables.scss';

// $breakpoint-mintabletview: 768px;
// $breakpoint-ninetabletview: 992px;
// $breakpoint-maxtabletview: 1024px;
// $breakpoint-maxscreen: 1152px;

// @keyframes scaleUp {
//   0% {
//     background: linear-gradient(80deg, #edbc31, #31b2b0);
//   }
//   33% {
//     background: linear-gradient(80deg, #31b2b0, #edbc31);
//   }
//   63% {
//     background: linear-gradient(80deg, #edbc31, #31b2b0);
//   }
//   100% {
//     background: linear-gradient(80deg, #31b2b0, #edbc31);
//   }
// }
