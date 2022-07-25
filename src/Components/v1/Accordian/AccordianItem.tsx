import { AccodionTypes } from './Accodion.types'
import {
	AccordionnWrapper,
	TitleBox,
	TitleWrapper,
	Title,
	Content,
	DownArrow,
	UpArrow,
} from './styles'

const Accordion = ({
	id,
	children,
	title,
	expand,
	handleExpand,
}: AccodionTypes) => {
	return (
		<AccordionnWrapper id={id}>
			<TitleBox onClick={() => handleExpand()} expand={expand}>
				<TitleWrapper>
					<Title>{title}</Title>
				</TitleWrapper>
				<i>{!expand ? <UpArrow /> : <DownArrow />}</i>
			</TitleBox>
			{expand && <Content>{children}</Content>}
		</AccordionnWrapper>
	)
}

export default Accordion
