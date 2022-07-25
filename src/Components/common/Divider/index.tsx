import { DividerTypes } from './Divider.types'
import { DividerWrapper } from './styles'

const Divider = ({ id }: DividerTypes) => {
	return <DividerWrapper data-testid="divider-test" id={id}></DividerWrapper>
}

export default Divider
