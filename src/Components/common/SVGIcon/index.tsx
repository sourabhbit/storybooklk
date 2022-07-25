import { Img } from './style'
import { SVGIconTypes } from './SVGIcon.types'

const SVGIcon = ({ icon, alt, color, width }: SVGIconTypes) => {
	const iconPath = `/${icon}.svg`
	return (
		<>
			<Img
				src={iconPath}
				alt={alt}
				color={color || 'default'}
				width={width + 'px'}
			/>
		</>
	)
}

export default SVGIcon
