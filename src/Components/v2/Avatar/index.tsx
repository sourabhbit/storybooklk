import { AvatarTypes } from './Avatar.types'
import { ComponentSizeENUM } from 'Types/general'
import SVGIcon from 'Components/common/SVGIcon'
import {
	AvatarWrapper,
	AvatarImage,
	AvatarName,
	AvatarNameSpan,
} from './styles'

const Avatar = ({
	componentSize = ComponentSizeENUM.medium,
	id,
	icon,
	name,
	image,
}: AvatarTypes) => {
	return (
		<AvatarWrapper data-testid="avatar-test" id={id}>
			{icon && <SVGIcon icon={icon} alt="avatar" />}
			{image && (
				<AvatarImage
					src={image}
					alt="user-image"
					styleSize={componentSize}
				/>
			)}
			{name && (
				<AvatarName styleSize={componentSize}>
					<AvatarNameSpan>{name.charAt(0).toUpperCase()}</AvatarNameSpan>
				</AvatarName>
			)}
		</AvatarWrapper>
	)
}

export default Avatar
