import { BadgesTypes } from './Badges.types'
import { ComponentSizeENUM, ThemeENUM } from 'Types/general'
import { BadgesWrapper, Indicator } from './styles'
import {
	UserIcon,
	UserImage,
	UserName,
} from 'Components/v2/Avatar/Avatar.stories'
import profileImage from './assets/image.png'
import { Overview as Button } from 'Components/v2/Button/Button.stories'
import { buttons, typeENUM } from 'Components/v2/Button/Button.types'

const Badges = ({
	badgeSize = ComponentSizeENUM.medium,
	componentSize = ComponentSizeENUM.medium,
	id,
	icon,
	name,
	image,
	text = 'button badge',
	subText,
	kind = buttons.kind.background,
	theme = ThemeENUM.primary,
	buttonType = typeENUM.button,
	disabled = false,
	loading = false,
	active = false,
	showRightIcon = false,
	rightIcon,
	showLeftIcon = false,
	leftIcon,
	onClick,
	showChildren = false,
	children,
}: BadgesTypes) => {
	return (
		<BadgesWrapper data-testid="badge-test" id={id}>
			<Indicator styleSize={badgeSize} />
			{icon && <UserIcon id={id} icon={icon} />}
			{image && (
				<UserImage
					id={id}
					image={profileImage}
					componentSize={componentSize}
				/>
			)}
			{name && (
				<UserName id={id} name={name} componentSize={componentSize} />
			)}
			{!icon && !image && !name && (
				<Button
					id={id}
					text={text}
					subText={subText}
					kind={kind}
					componentSize={componentSize}
					theme={theme}
					buttonType={buttonType}
					disabled={disabled}
					loading={loading}
					active={active}
					showLeftIcon={showLeftIcon}
					showRightIcon={showRightIcon}
					showChildren={showChildren}
					rightIcon={rightIcon}
					leftIcon={leftIcon}
					onClick={onClick}
				>
					{children}
				</Button>
			)}
		</BadgesWrapper>
	)
}

export default Badges
