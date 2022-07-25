import { PaginationTypesENUM } from 'Components/v2/Pagination/Pagination.types'

export interface PaginationCarouselTypes {
	images: string[]
	videos: string[]
	timeGap: number
	type: PaginationTypesENUM.image | PaginationTypesENUM.video
}
