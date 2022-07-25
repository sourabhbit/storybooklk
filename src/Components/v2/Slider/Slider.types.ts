export interface SliderTypes {
	id: string
	startValue: string
	endValue: string
	minDiff?: number
	maxRangeValue: number
	step?: number
	onInput?: () => void
}
