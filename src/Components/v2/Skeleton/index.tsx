import {
	SkeletonParagraph,
	SkeletonButton,
	SkeletonTitle,
	SkeletonImg,
} from './styles'
import { SkeletonTypes, typeENUM } from './Skeleton.types'
import { ComponentSizeENUM } from 'Types/general'

const Skeleton = ({
	componentSize = ComponentSizeENUM.small,
	id,
	animation = true,
	type = typeENUM.title,
	paragraphRows = 1,
}: SkeletonTypes) => {
	const rowList = [...Array(paragraphRows)].map((index) => (
		<SkeletonParagraph
			animation={animation}
			id={id}
			styleSize={componentSize}
			data-testid="paragraph-skeleton"
			key={index}
		/>
	))
	return (
		<>
			{type === 'title' && (
				<>
					<SkeletonTitle
						animation={animation}
						id={id}
						styleSize={componentSize}
						data-testid={id}
					/>
				</>
			)}
			{type === 'button' && (
				<>
					<SkeletonButton
						animation={animation}
						id={id}
						styleSize={componentSize}
						data-testid="button-skeleton"
					/>
				</>
			)}
			{type === 'paragraph' && <>{rowList}</>}
			{type === 'image' && (
				<>
					<SkeletonImg
						animation={animation}
						id={id}
						data-testid="image-skeleton"
					/>
				</>
			)}
		</>
	)
}

export default Skeleton
