import styled from 'styled-components'

export const Header = styled.div`
	height: 103px;
	font-size: 1.1vw;
`

export const HeaderTopWrapper = styled.div`
	/* padding: 0.7vw 2vw 0 2vw; */
	display: flex;
	justify-content: space-between;
	width: 100%;
`

export const ULHeadTop = styled.ul`
	display: flex !important;
	flex-direction: row;
	list-style: none;
	font-size: 12px;
	gap: 20px;
	padding: 0;
`

// .headeTopWrapper .topNav_bar .menuItem{
//     padding: 0 0.5vw;
// }
// .mainNav .fb-30 {
//     flex-basis: 30%;
// }
// .mainNav .middle {
//     padding: 0 2vw;
//     @include mQ-min($bigScreenWidth){
//         padding: 0;
//     }
// }
// .header .container-fluid {
//     padding:0;
// }
// .search{
//     flex-grow:0.8;
// }
// .lenskart-brand img {
//     width: 100%;
// }
// .lenskart-brand .logo {
//     display: flex;
//     align-items: center;
//     height: 50px;
// }
// .navigation_top {
//     padding: 0 2vw;
//     @include mQ-min($bigScreenWidth){
//         padding: 0;
//     }
// }
// .main-menu .nav-level-1{
//     padding: 0 0.7vw;
//     letter-spacing: 0.03em;
// }
// .navigation_top .navigation_right img{
//     height:2.5vw;
// }

// .search .search-icon {
//     top: 7px;
//     right: 7px;
// }
// // #topNavigationBar {
//     // top: 30px;
// // }
// // #topNavBar {
// //     height: 30px;
// // }
// .main-menu .nav-level-1 > a{
//     font-size:68%;
// }
// .main-menu .nav-level-acc{
//     top: 100%;
// }

// .main-menu .nav-level-1 > a{
//     padding: 9px 4px;
// }

// @media (min-width: 500px) and (max-width: 768px) {
//     .layout.justify-content-between.navigation_right{
//         display:none
//     }
// }

// @media (min-width: 500px) and (max-width: 768px) {
//     .header {
//         height: auto;
//         font-size: 1.1vw;
//     }
//     #topNavigationBar {
//         // top: 21px;
//         top: 30px;
//     }
//     #topNavBar {
//         height: 21px;
//     }
//     .search .search-icon {
//         top: 7px;
//         right: 7px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:60%;
//         padding: 9px 2px;
//     }
//     .navigation_top .navigation_right img{
//         height:2.5vw;
//     }
// }

// @media (min-width: 768px) and (max-width: 1024px) {
//     .header {
//         height: auto;
//         font-size: 1.1vw;
//     }
//     #topNavigationBar {
//         // position: static !important;
//         min-width: $smallScreenWidth;
//         // top: 30px;
//     }
//     // #topNavBar {
//     //     height: 30px;
//     // }
//     .search .search-icon {
//         top: 7px;
//         right: 7px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:60%;
//     }
//     .navigation_top .navigation_right img{
//         height:2.5vw;
//     }
// }

// @media (min-width: 1024px) and (max-width: 1152px) {
//     .header {
//         height: 109px;
//         font-size: 1.1vw;
//     }
//     #topNavigationBar {
//         // top: 30px;
//         top: 40px;
//     }
//     #topNavBar {
//         height: 30px;
//     }
//     .search .search-icon {
//         top: 5px;
//         right: 9px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:80%;
//     }
//     .navigation_top .navigation_right img{
//         height:2.5vw;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 27%;
//     }
// }

// @media (min-width: 1153px) and (max-width: 1365px) {
//     .header {
//         height: 127px;
//         font-size: 1vw;
//     }
//     #topNavigationBar {
//         // top: 30px;
//         top: 40px;
//     }
//     #topNavBar {
//         height: 30px;
//     }
//     .search .search-icon {
//         top: 5px;
//         right: 9px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:85%;
//         letter-spacing: 1px;
//     }
//     .main-menu .nav-level-1 > span{
//         font-size:85% !important;
//         letter-spacing: 1px !important;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 26%;
//     }
// }

// @media (min-width: 1365px) and (max-width:1800px) {
//     .header {
//         height: 144px;
//         font-size: 0.9vw;
//     }
//     #topNavigationBar {
//         top: 40px;
//     }
//     #topNavBar {
//         height: 40px;
//     }
//     .search .search-icon {
//         top: 7px;
//         right: 7px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:100%;
//         letter-spacing: 1px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 24%;
//     }
// }

// @media (min-width: 1600px) and (max-width:1920px) {
//     .header {
//         height: 162px;
//         font-size: 0.8vw;
//     }
//     .main-menu .nav-level-1 > a{
//         padding: 14px 10px;
//     }
//     #topNavigationBar {
//         top: 40px;
//     }
//     #topNavBar {
//         height: 40px;
//     }
//     .search .search-icon {
//         top: 7px;
//         right: 7px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:100%;
//         letter-spacing: 1px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 24%;
//     }
// }

// @media (min-width: 1920px) and (max-width:2100px) {
//     .header {
//         height: 176px;
//         font-size: 1rem;
//     }
//     .main-menu .nav-level-1 > a{
//         padding: 14px 10px;
//     }
//     #topNavBar {
//         height: 50px;
//         padding: 0 2vw;
//     }
//     #topNavigationBar {
//         top: 50px;
//         padding: 0 2vw;
//     }
//     .search .search-icon {
//         top: 5px;
//         right: 10px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:110%;
//         letter-spacing: 1px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 24%;
//     }
// }

// @media (min-width: 2100px) and (max-width:2400px) {
//     .header {
//         height: 200px;
//         font-size: 1rem;
//     }
//     .main-menu .nav-level-1 > a{
//         padding: 16px 10px;
//     }
//     #topNavBar {
//         height: 45px;
//     }
//     #topNavigationBar {
//         top: 45px;
//     }
//     .search .search-icon {
//         top: 7px;
//         right: 12px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:115%;
//         letter-spacing: 1px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 22%;
//     }
// }

// @media (min-width: 2400px) and (max-width:2900px) {
//     .header {
//         height: 206px;
//         font-size: 1rem;
//     }
//     #topNavBar {
//         height: 45px;
//     }
//     #topNavigationBar {
//         top: 45px;
//     }
//     .search .search-icon {
//         top: 5px;
//         right: 11px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:120%;
//         letter-spacing: 1px;
//     }
//     .main-menu .nav-level-1 > a {
//         padding: 20px 14px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 20%;
//     }
// }

// @media (min-width: 2900px) {
//     .header {
//         height: 206px;
//         font-size: 1rem;
//     }
//     #topNavBar {
//         height: 50px;
//     }
//     #topNavigationBar {
//         top: 50px;
//     }
//     .search .search-icon {
//         top: 5px;
//         right: 11px;
//     }
//     .main-menu .nav-level-1 > a{
//         font-size:120%;
//         letter-spacing: 1px;
//     }
//     .main-menu .nav-level-1 > a {
//         padding: 20px 14px;
//     }
//     .mainNav .fb-30 {
//         flex-basis: 20%;
//     }
// }

// @media (min-width: 1600px) and (max-width:1700px) {
//     .header {
//         height: 153px;
//     }
// }

// @media (min-width: 1700px) and (max-width:1900px) {
//     .header {
//         height: 155px;
//     }
// }

// .buyonChat {
//     // display: none;
//     z-index: 10000;
//     position: fixed;
//     box-shadow: 0 5px 30px 0 rgba(0,0,0,0.15),0 5px 4px 0 rgba(0,0,0,0.26)!important;
//     bottom: 30px;
//     right: 30px;
//     width: 24px;
//     height: 24px;
//     background-color: #289f95;
//     border-radius: 30px 8px 30px 30px;
//     padding: 17px;
//     box-sizing: content-box;
//     @media screen and (min-width: 1920px) {
//         right: calc((100vw - 1920px)/2 + 30px);
//     }
//     &:hover {
//         text-decoration: none;
//     }
//     .fa-comments {
//         background-image: url(https://cdn.freshbots.ai/assets/imgs/g3_icons/chat_logo.svg);
//         width: 24px;
//         height: 24px;
//         background-repeat: no-repeat;
//         background-size: 24px 24px;
//         &:before {
//             content: " ";
//         }
//     }
// }
// .headeTopWrapper{
//     display: flex;
//     justify-content: flex-end;
//     ul {
//         margin:0;
//         padding: 0;
//         list-style: none;
//         font-size: 1.2rem;
//     }
//     .topNav {
//         /**** new css**/
//         &_bar {
//             display: flex;
//             flex:1;
//             font-family: 'FuturaStd-Book';
//             align-items: center;
//             padding:0px;
//             transition: 0.7s all;
//             .menuItem {
//                 border-right: 1px solid #ccc;
//                 &:first-child {
//                     padding-left: 0;
//                 }
//                 &:last-child {
//                     border-right: none;
//                 }
//                 a {
//                     color: #828282;
//                 }
//             }
//             // &.is-scroll {
//             //     display: none;
//             // }
//         }
//         /**** new css**/
//     }

//     .topRight {
//         display: flex;
//         justify-content: flex-end;
//         transition: 0.7s all;
//         .topRightLink{
//             color: #828282;
//             font-family: 'FuturaStd-Book';
//             display: flex;
//             margin-left:1VW;
//             align-items: center;
//             &:hover{
//                 text-decoration: underline;
//             }
//         }
//         .topIcon{
//             margin-right:5px;
//             line-height: 18px;
//         }
//     }
// }
