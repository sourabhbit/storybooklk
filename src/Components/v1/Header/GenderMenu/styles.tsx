import styled from 'styled-components'
// const screenSize = {
// 	breakpointmintabletview: '768px',
// 	breakpointninetabletview: '992px',
// }

export const GenderMenuWrapper = styled.div`
	margin-top: 20px;
	/* .menu-line-section {
    position: relative;
  } */
`
export const Navhead = styled.a`
	padding-left: 25px;
	@media (max-width: 1300px) {
		font-size: 1rem !important;
	}
`

//   .gender {
//     .gender_info {
//       width: 230px;
//       display: flex;
//       padding: 10px 10px 10px 25px;
//       cursor: pointer;
//       align-items: center;
//       font-weight: 700;
//       font-size: 13px;
//       border-radius: 5px;
//       margin-left: 30px;
//       @media (max-width: 1300px) {
//         // width: 200px;
//       }
//       // @media (min-width: $breakpoint-mintabletview) and (max-width: $breakpoint-ninetabletview) {
//       //   min-width: 110px;
//       //   max-width: 180px;
//       // }
//       &:hover {
//         background: #e6e7e9;
//       }

//       span {
//         width: 50%;
//         display: inline-block;
//         @media (max-width: 1300px) {
//           font-size: 1rem !important;
//         }
//       }
//       .fa-angle-right {
//         padding-left: 30px;
//       }
//       @media (min-width: $breakpoint-mintabletview) and (max-width: $breakpoint-ninetabletview) {
//         span {
//           width: 55%;
//         }
//         // img {
//         //   width: 80%;
//         // }
//         .fa-angle-right {
//           padding-left: 10px;
//         }
//       }
//       .gender_img {
//         max-width: 30px;
//         margin-right: 30px;
//         img {
//           max-width: 150%;
//         }
//         @media (min-width: $breakpoint-mintabletview) and (max-width: $breakpoint-ninetabletview) {
//           margin-left: 5px;
//         }
//       }
//     }

//     &:hover {
//       .gender_category {
//         display: block;
//         position: absolute;
//         left: 100%;
//         top: -21px;
//         width: 100%;
//       }
//     }
//   }

export const GenderMenuSection = styled.div`
	position: relative; //added
	> .gender {
		&.active {
			.gender_info {
				background-color: #f6f6f6;
				+ .gender_category {
					position: absolute;
					left: 100%;
					width: 100%;
					top: -35px;
					// width: 230px;
					display: block;
					background-color: #f2f2f2;
					margin-left: 17px;
					height: 324px;
					top: -54px;
					&.submenu {
						width: auto;
					}
					@media (max-width: 1300px) {
						// width: 200px;
						top: -50px !important;
					}
					// @media (min-width: $breakpoint-mintabletview) and (max-width: $breakpoint-ninetabletview) {
					//   width: 100%;
					// }
					.category-menu {
						.category-menu_data {
							margin: 0px 15px;
							// @media (max-width: 1000px) {
							//   margin-top: 5px;
							// }
							&.active {
								background: #dfdfdf;
								border-radius: 5px;
								.select-submenu {
									display: block;
									position: absolute;
									left: 100%;
									top: 0;
									min-height: 400px;
								}
							}
						}
					}
				}
			}
		}
	}
`

//   .category-condtion {
//     background-color: #F7F7F7 !important;
//     margin-top: 20px;
//     height: 304px !important;
//   }
// }
