import { BottomSheetContainer, BackdropWrapper, BottomSheet } from './styles'
import { BottomsheetTypes } from './Bottomsheet.types'

const Bottomsheet = ({
	backdrop,
	expanded,
	onClickBackdrop = () => null,
	children,
	scrollable,
}: BottomsheetTypes) => {
	return (
		<BottomSheetContainer
			data-testid="bottomsheet-container"
			aria-label="bottom-sheet-container"
		>
			<>
				{backdrop && expanded && (
					<BackdropWrapper
						data-testid="backdrop-container"
						expanded={expanded}
						aria-label="backdrop"
						onClick={() => onClickBackdrop()}
					></BackdropWrapper>
				)}
				<BottomSheet
					expanded={expanded}
					scrollable={scrollable}
					aria-label="bottom-sheet"
				>
					{children}
				</BottomSheet>
			</>
		</BottomSheetContainer>
	)
}

export default Bottomsheet
