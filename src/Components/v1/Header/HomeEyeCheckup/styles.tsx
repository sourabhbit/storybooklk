import styled from 'styled-components'

export const HomeEyeCheckUpWrapper = styled.div`
	height: 100px;
	.parentDiv {
		margin-left: -40px;
	}
	.custome-width {
		max-width: 500px;
	}
	.imageGrid {
		background-color: #fbfbfb;
		border-radius: 12px;
		@media (min-width: 1800px) {
			width: 55%;
		}
	}
	.checkup-image-section {
		> img {
			position: relative;
			left: -30px;
			top: -24px;
			height: 325px;
		}
	}

	.right-content {
		overflow: hidden;
		white-space: normal;
		font-size: 14px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		@media (max-width: 1300px) {
			font-size: 10px;
		}
	}

	.btn-navigation {
		background: #51b7c4;
		padding: 10px 8px;
		font-weight: 600;
		font-size: 16px;
		line-height: 25px;
		color: #f7f7f7;
		border-radius: 4px;
		margin-right: 20px;
		width: 205px;
		height: 59px;
	}
	.heading-text {
		line-height: 25px;
		text-transform: uppercase;
		color: #000000;
	}
	.light-dark {
		color: #888888;
		line-height: 20px;
		width: 220px;
		padding-top: 10px;
		padding-left: 15px;
		margin: 0;
	}
	.support-text {
		color: #888888;
		font-size: 17px;
		line-height: 25px;
	}
	.button-text {
		margin-top: 50px;
	}
	.mid-line {
		background-color: #d0d0d0;
		width: 1px;
	}

	.BannerDiv {
		/* display: none; */
		/* @media (min-width: 1800px) {
			display: block;
		} */
	}

	/* @media (min-width: 1800px) {
		.BannerImg {
			height: 325px;
			position: absolute;
			top: 0px;
			right: 0px;
		}
	} */
`
