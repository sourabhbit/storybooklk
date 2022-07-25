import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-blue-100: #000042;
        --dark-blue-50: #737397;
        --light-blue-50: #DAF2FF;

        --ocean-blue-100: #7FE1EE;
        --ocean-blue-50: #BFF6F2;
        --ocean-blue-25: #EDF7FE;

        --vivid-green-100: #11DAAC;
        --vivid-green-50: #9FE7D2;
        --vivid-green-25: #DAF7ED;

        --see-green-100: #B9F7E6;
        --see-green-50: #E2FAF2;
        --see-green-25: #F0FCF8;

        --blashish-gray: #329c92;
        --whitish-gray: #999999;

        --acetate-green-100: #D5F0C2;
        --acetate-green-50: #E3F7DE;
        --acetate-green-25: #F3FBEF;

        --tortoiseshell-100: #FFC223;
        --tortoiseshell-50: #FFE092;
        --tortoiseshell-25: #FFEFCE;

        --terracotta-100: #FF5E48;
        --terracotta-50: #FFA499;
        --terracotta-25: #FFD5D2;

        --warm-grey-100: #F3E9E2;
        --warm-grey-50: #F7F2ED;
        --warm-grey-25: #FBF9F7;

        --gold-100: #E0C67C;
        --gold-50: #EFE2BD;
        --gold-25: #F7F1DE;

        --black: #000000;
        --white: #FFFFFF;
        --border: #EBEBF0;

        --transparent: transparent;
        --inherit: inherit;

        --placeholder:#00004252;
        
        --border-radius-xs: 12px;
        --border-radius-sm: 24px;
        --border-radius-md: 32px;
        --border-radius-lg: 40px;
        
        --grid-space-desktop: 20px;
        --page-margin-desktop: 120px;
        
        --grid-space-mobile: 12px;
        --page-margin-mobile: 12px;

        --spacing-sm: 8.1px;
        --spacing-md: 16.2px;
        --spacing-lg: 24.3px;
        --spacing-xl: 48.6px;

        --font-serif: 'serif';
        --fs-52: 52px;
        --fs-48: 48px;
        --fs-40: 40px;
        --fs-32: 32px;
        --fs-30: 30px;
        --fs-26: 26px;
        --fs-20: 20px;
        --fs-18: 18px;
        --fs-16: 16px;
        --fs-14: 14px;
        --fs-12: 12px;
        --fs-9: 9px;

        //padding
        --pd-50: 50px;
        --pd-30: 30px;
        --pd-20: 20px;
        --pd-15: 15px;
        --pd-12: 12px;       
        --pd-10: 10px;
        --pd-5: 5px;


        --fw-light: 300;
        --fw-regular: 400;
        --fw-semi-bold: 600;
        --fw-bold: 700;
    }

	html {
		box-sizing: border-box;
		width: 100%;
		scroll-behavior: smooth;
	}


	body {
        margin: 0px;
        padding: 0;
		width: 100%;
		min-height: 100%;
		overflow-x: hidden;
		font-family: var(--font-serif);
		font-size: var(--fs-18);
		line-height: 1.3;
    }

	*::-webkit-scrollbar {
		width: 1em;
	}
	
	*::-webkit-scrollbar-thumb {
		border-radius: var(--border-radius);
	}

    *, ::before, ::after {
		box-sizing: inherit;
	}

	// a {
	// 	display: inline-block;
	// 	text-decoration: none;
	// 	text-decoration-skip-ink: auto;
	// 	color: inherit;
	// 	position: relative;
	// 	transition: var(--transition);
	// }

	// a:hover, a:focus {
	// 	color: var(--orange);
	// }


    // h1,h2,h3,h4,h5,h6 {
    //     margin-top: 0;
    //     margin-bottom: 0;
    // }

	

	// section {
	// 	margin: 0px auto;
	// 	padding: 100px 0px;
	// }
`

export default GlobalStyles
