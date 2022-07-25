import { TooltipWrapper } from './styles'
import { TooltipTypes } from './Toottip.types'

const Tooltip = ({ children }: TooltipTypes) => {
	return <TooltipWrapper>{children && children}</TooltipWrapper>
}

export default Tooltip
