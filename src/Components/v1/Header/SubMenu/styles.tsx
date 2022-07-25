import styled from 'styled-components'

export const SubMenuListWrapper = styled.div<{ section: string }>`
	font-size: 12px;
	${({ section }) =>
		section === 'Kids Glasses' &&
		`
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0px 40px;
    background-color: #fbfbfb;
    height: 280px;
    width: 240px;
    border-radius: 20px;
    flex-direction: column;
  `}
`

export const SubMenuWrapper = styled.div<{ section: string; dataType: string }>`
	min-width: 200px;
	${({ dataType, section }) =>
		dataType === 'image' &&
		`
    max-width: none;
    min-width: none;
    margin-right: 0;
  `}
	${({ dataType, section }) =>
		dataType !== 'image' &&
		section === 'Kids Glasses' &&
		`
    min-width: 200px;
    max-width: 220px;
    @media (max-width: 1380px) {
        min-width: 100px !important;
        max-width: 183px !important;
    }
    display: none
  `}
${({ section }) =>
		section === 'Kids Glasses' &&
		`
    justify-content: center;
    display: flex;
  `}
`
export const FlexCol = styled.div`
	display: flex;
	flex-direction: column;
`
